<template>
    <section id="why-us" class="why-us mb-5">
        <div class="container" data-aos="fade-up">

            <div class="lna-row lna-justify-content-center lna-mb-5 lna-pb-2">
                <div class="lna-col-md-8 lna-text-center lna-heading-section lna-ftco-animate">
                    <h2 class="lna-mb-4">Our Vision and Mission</h2>
                </div>
            </div>

            <div class="row g-0" data-aos="fade-up" data-aos-delay="200">

                <div class="col-xl-5 img-bg" >
                    <img src="@/assets/images/about.jpg" alt="">
                </div>
                <div class="col-xl-7 slides  position-relative bg-info">
                    <swiper
                        :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }"
                        :breakpoints="{
                            '100': {
                                slidesPerView:1,
                                slidesPerGroup:1
                            },
                            '450': {
                            slidesPerView:1,
                            slidesPerGroup:1,
                            },
                            '850': {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                        
                        }"
                        class="swiper"
                        id="card-swiper"
                    >
                        <swiper-slide>
                            <div class="item">
                                <h3 class="mb-3">Our Vision</h3>
                                <p>MHA will be the association that empowers Myanmar Hotel Industry to achieve sustainable growth and be competitive at international standards.</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="item">
                                <h3 class="mb-3">Our Mission</h3>
                                <p>To unite and represent nationwide hotels, motels, inns, lodgings and guest houses so as to help develop the members systematically and to solve the problems in the Hotel Industry effectively.</p>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
        import {Swiper, SwiperSlide} from 'swiper/vue'
        import 'swiper/swiper-bundle.css'
        import SwiperCore,{ Autoplay, Navigation } from 'swiper';

        SwiperCore.use([Autoplay, Navigation])

        export default {
            components: {Swiper, SwiperSlide}
        }
</script>

<style scoped>
    .why-us .img-bg img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: 40px 0 0 40px;
    }

    .slides {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 40px 0 5%;
        border-radius: 0 40px 40px 0;
        background: linear-gradient(to right, #2d0b00, #c9a42e);
    }

    .slides .item h3 {
        font-size: 32px;
        color: #fff;
        font-weight: bold;
    }

    .slides .item p {
        font-size: 22px;
        color: #fff;
    }

    @media (max-width:1500px) {
        .why-us .img-bg img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 40px 0 0 40px;
        }
    
        .slides {
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 40px 0 5%;
            border-radius: 0 40px 40px 0;
            background: linear-gradient(to right, #2d0b00, #c9a42e);
        }

        .slides .item p {
            font-size: 18px;
            color: #fff;
        }
    }

    @media (max-width: 990px) {
        .why-us .img-bg img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 40px 0 0 40px;
            margin-bottom: 20px;
        }
    
        .slides {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 40px 0 5%;
            border-radius: 0 40px 40px 0;
            background: linear-gradient(to right, #2d0b00, #c9a42e);
        }

        .slides .item p {
            font-size: 18px;
            color: #fff;
        }
    }

    @media (max-width: 450px) {
        .why-us .row {
            padding: 0 15px;
        }
    }

    

</style>
