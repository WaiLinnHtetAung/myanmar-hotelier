<template>
    <div class="activities">
        <Header :news="news" :isLoaded="isLoaded" :isDetail="false"></Header>
        <hr>
        <div class="menu">
            <h3>MHA</h3>
            <h4>{{currentMonth.toUpperCase()}} လအတွက် သတင်းစာများ</h4>
            <div>
                <select name="" id="" class="pointer" @change="getNewsByMonth">
                    <option v-for="(month, index) in months" :key="index" :value="month" :selected="month == currentMonth">{{month.toUpperCase()}}</option>
                </select>
            </div>
        </div>
        <hr>

        <div class="news">
            <div class="row" v-if="news.length > 0">
                <div class="col-lg-4 mb-5 mt-md-5 mt-sm-5 mt-lg-0 lna-ftco-animate" v-for="(n,index) in news" :key="index">
                    <div class="lna-blog-entry">
                        <a href="" class="lna-block-20 lna-d-flex lna-align-items-end" :style="`background-image: url('${n.news_images ? img_path + n.news_images[0].image : default_img_path}');`">
                            <div class="lna-meta-date lna-text-center lna-p-2">
                                <span class="lna-day">{{ new Date(n.date).getDate() }}</span>
                                <span class="lna-mos">{{ new Date(n.date).toLocaleString('default', { month: 'long' }) }}</span>
                                <span class="lna-yr">{{ new Date(n.date).getFullYear() }}</span>
                            </div>
                        </a>
                        <div class="lna-text lna-bg-white lna-p-4">
                            <h3 class="lna-heading fw-bold"><a href="#">{{n.title}}</a></h3>
                            <p v-html="n.content.slice(0,150)"></p>
                            <div class="lna-d-flex lna-align-items-center lna-mt-4">
                                <p class="lna-mb-0 read-more-btn"><a :href="`/news/${n.id}`" class="lna-btn lna-btn-primary">Read More <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></p>
                                <p class="lna-ml-auto lna-mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="row mt-5">
                <h5 style="font-size: 30px;" class="text-center">NO NEWS FOR THIS MONTH</h5>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/newsletter/Header'
import getNews from '@/composables/getNews'
import api from '@/api/api';
import { ref } from 'vue';
    export default {
  components: { Header },
        setup() {
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let img_path = api.image_url;
            let default_img_path = require('@/assets/images/default.webp')

             //for current month
             let currentMonth = ref(months[new Date().getMonth()]);


            let {news, errors, isLoaded, load} = getNews();
            load(currentMonth.value);

            console.log(news.value);

            let getNewsByMonth = (event) => {
                let month = event.target.value;
                load(month);
                currentMonth.value = month;
            }



           

            return {months, getNewsByMonth, news, img_path, default_img_path, currentMonth, isLoaded}
        }
    }
</script>

<style scoped>
    .activities {
        padding: 80px 9%;
    }

    /*-- ------- header -------  -*/
    

    /* ----- menu link -------- */

    .menu {
        display: flex;
        justify-content: space-between;
        padding: 5px 10px 0;
        height: 30px;
    }

    .menu h3 {
        font-weight: bold;
        color: #0086bb;
    }
    .menu h4 {
        font-weight: bold;
        font-size: 18px;
    }

    .menu select {
        padding: 0 10px;
        border: none;
        background: transparent;
    }

    .menu select:focus, .menu select:active {
        border: none;
        outline: none;
    }

    .news {
        margin-top: 30px;
    }

    .news .lna-text {
        height: 250px;
    }

    .news .read-more-btn {
        position: absolute;
        bottom: 10px;
    }

    .news .read-more-btn a {
        font-size: 14px;
    }

    .lna-text p {
        color: #cccaca;
    }
    @media (max-width: 1200px) {
        .newsletter-text .last-link {
            width: 50%;
        }

        .last-link-container .date {
            font-size: 16px;
        }
    }


    @media (max-width: 990px) {
        .activities {
            padding: 80px 3%;
        }
    
        /*-- ------- header -------  -*/
    
        
    }

    @media (max-width: 450px) {

    
        /* ----- menu link -------- */
    
        .menu {
            display: flex;
            justify-content: space-between;
            padding: 0px 10px;
            height: 15px;
        }
    
        .menu h3 {
            display: none;
        }
        .menu h4 {
            font-weight: bold;
            font-size: 14px;
        }
    
        .menu select {
            padding: 0 10px;
            border: none;
            background: transparent;
            font-size: 12px;
        }
    
        .menu select:focus, .menu select:active {
            border: none;
            outline: none;
        }
    }

    
</style>
