<template>
  <div class="newsDetail">
    <div>
      <Header :news="news" :isDetail="true"></Header>
    </div>

    <div class="detail">
      <div class="title">
        <router-link class="back" to="#" @click="back()"
          ><i class="bx bxs-left-arrow-square"></i
        ></router-link>
        <h4>{{ news.title }}</h4>
      </div>

      <div
        class="img-one"
        v-if="(news.news_images ? news.news_images.length : '') == 1"
      >
        <img
          :src="
            image_path + (news.news_images ? news.news_images[0].image : '')
          "
          alt=""
        />
      </div>

      <div
        class="img-more"
        v-if="(news.news_images ? news.news_images.length : '') > 1"
      >
        <img
          v-for="(img, index) in news.news_images"
          :key="index"
          :src="image_path + img.image"
          alt=""
        />
      </div>

      <div class="news-content">
        <span v-html="news.content"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/newsletter/Header";
import getNewsDetail from "@/composables/getNewsDetail";
import api from "@/api/api";
export default {
  components: { Header },
  props: ["id"],
  setup(props) {
    let image_path = api.image_url;
    let { news, errors, isLoaded, load } = getNewsDetail(props.id);
    load();

    let back = () => {
      window.history.go(-1);
      return false;
    };

    return { news, image_path, isLoaded, back };
  },
};
</script>

<style scoped>
.newsDetail {
  padding: 80px 9% 30px;
}

.detail {
  margin: 40px 0;
}

.detail .title {
  display: flex;
  justify-content: center;
  margin: 20px auto 30px;
  position: relative;
}

.detail .title .back {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-50%, -50%);
}

.detail .title .back i {
  color: #0575c0;
  font-size: 44px;
}

.title h4 {
  background-color: #ecdf64;
  display: inline-block;
  padding: 15px 40px;
  font-weight: bold;
  color: #017bbc;
  font-size: 20px;
}

.detail .img-one {
  display: flex;
  justify-content: center;
}

.detail .img-one img {
  width: 70%;
  object-fit: contain;
}

.detail .img-more {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.detail .img-more img {
  width: 40%;
  object-fit: contain;
}

.news-content {
  padding: 10px 100px;
  margin: 30px auto;
}

.news-content span {
  text-align: justify;
}

@media (max-width: 990px) {
  .newsDetail {
    padding: 80px 3% 30px;
  }
}

@media (max-width: 450px) {
  .newsDetail {
    padding: 80px 3% 0px;
  }
  .title h4 {
    font-size: 16px;
    text-align: center;
  }

  .news-content {
    padding: 10px 20px;
    margin: 30px auto;
  }
}
</style>
