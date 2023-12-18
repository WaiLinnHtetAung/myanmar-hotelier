<template>
    <section class="lna-section lna-bg-light">
        <div class="container">
            <div class="lna-row lna-justify-content-center">
                <div class="lna-col-md-8 lna-text-center lna-heading-section lna-ftco-animate">
                    <h2 class="lna-mb-4">Latest News and Activities</h2>
                </div>
            </div>
            <div class="row lna-row" v-if="news.length > 0 ">
                <div class="col-lg-4 col-sm-12 lna-col " v-for="(n,index) in news.slice(0,3)" :key="index">
                    <div class="lna-blog-entry ">
                        <a href="blog-single.html" class="lna-block-20 lna-d-flex lna-align-items-end" :style="`background-image: url('${n.news_images ? img_path + n.news_images[0].image : default_img_path}');`">
                            <div class="lna-meta-date lna-text-center lna-p-2">
                                <span class="lna-day">{{ new Date(n.date).getDate() }}</span>
                                <span class="lna-mos">{{ new Date(n.date).toLocaleString('default', { month: 'long' }) }}</span>
                                <span class="lna-yr">{{ new Date(n.date).getFullYear() }}</span>
                            </div>
                        </a>
                        <div class="lna-text single-news lna-bg-white lna-p-4">
                            <h3 class="lna-heading"><a href="#">{{n.title.slice(0,40)}}</a></h3>
                            <p class="content-p" v-html="n.content.slice(0,150)"></p>
                            <div class="lna-d-flex lna-align-items-center lna-mt-4">
                                <p class="lna-mb-0"><a :href="`/news/${n.id}`" class="lna-btn lna-btn-primary">Read More <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></p>
                                <p class="lna-ml-auto lna-mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import getNews from '@/composables/getNews';
import api from '@/api/api';

    export default {
        setup() {
             let img_path = api.image_url;
            let default_img_path = require('@/assets/images/default.webp')

             let {news, errors, isLoaded, load} = getNews();
             load();

            return {news, img_path, default_img_path}
        }
    }
</script>

<style scoped>
    .lna-section {
        overflow-x: hidden;
        padding: 4rem 0 0 0;
    }
    .single-news h3{
        height: 50px;
        overflow: hidden;
    }
    .content-p{
        height: 100px;
        overflow: hidden;
    }

</style>
