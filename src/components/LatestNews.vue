<template>
    <section class="lna-section lna-bg-light">
        <div class="container">
            <div class="lna-row lna-justify-content-center">
                <div class="lna-col-md-8 lna-text-center lna-heading-section lna-ftco-animate">
                    <h2 class="lna-mb-4">Latest News and Activities</h2>
                </div>
            </div>
            <div class="row lna-row">
                <div class="col-lg-4 col-sm-12 lna-col " v-for="(article, index) in news" :key="index">
                    <div class="lna-blog-entry ">
                        <a href="blog-single.html" class="lna-block-20 lna-d-flex lna-align-items-end" :style="'background-image: url('+article.img+');'">
                            <div class="lna-meta-date lna-text-center lna-p-2">
                                <span class="lna-day">{{article.day}}</span>
                                <span class="lna-mos">{{article.month}}</span>
                                <span class="lna-yr">{{article.year}}</span>
                            </div>
                        </a>
                        <div class="lna-text lna-bg-white lna-p-4">
                            <h3 class="lna-heading"><a href="#">{{article.title}}</a></h3>
                            <p>{{article.content}}</p>
                            <div class="lna-d-flex lna-align-items-center lna-mt-4">
                                <p class="lna-mb-0"><a href="#" class="lna-btn lna-btn-primary">Read More <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></p>
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
    export default {
        setup() {
            let news = [
                {
                    title: "Article 1",
                    img: require("@/assets/images/lna-1.jpg"),
                    day: 26,
                    month: 'Feb',
                    year: 2022,
                    content: "From the start, MHA has been in close collaboration with the Ministry of Hotels and Tourism, and in partnership with the Union of Myanmar Travel Association and the Myanmar Tourism Marketing promoted the Touris in Myanmar",
                },
                {
                    title: "Article 1",
                    img: require("@/assets/images/lna-2.jpg"),
                    day: 26,
                    month: 'Feb',
                    year: 2022,
                    content: "From the start, MHA has been in close collaboration with the Ministry of Hotels and Tourism, and in partnership with the Union of Myanmar Travel Association and the Myanmar Tourism Marketing promoted the Touris in Myanmar",
                },
                {
                    title: "Article 1",
                    img: require("@/assets/images/lna-3.jpg"),
                    day: 26,
                    month: 'Feb',
                    year: 2022,
                    content: "From the start, MHA has been in close collaboration with the Ministry of Hotels and Tourism, and in partnership with the Union of Myanmar Travel Association and the Myanmar Tourism Marketing promoted the Touris in Myanmar",
                },
            ];

            return {news}
        }
    }
</script>

<style scoped>
    .lna-section {
        overflow-x: hidden;
    }
</style>
