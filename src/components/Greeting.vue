<template>
    <section id="testimonials" class="testimonials">
        <div class="container">
            <div class="lna-row lna-justify-content-center">
                <div class="lna-col-md-8 lna-text-center lna-heading-section lna-ftco-animate">
                    <h2 class="lna-mb-4">Greeting from CEC Members</h2>
                </div>
            </div>

            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="testimonial-wrap">
                            <div class="testimonial-item">
                                <img src="@/assets/images/CEC-Member-Photo/1.jpg" class="testimonial-img" alt="">
                                <h3>U Aung Myo Min Din</h3>
                                <h4>Chairman</h4>
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i> MHA will be the association that empowers Myanmar Hotel Industry to achieve sustainable growth and be competitive at international standards.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="testimonial-wrap">
                            <div class="testimonial-item">
                                <img src="@/assets/images/CEC-Member-Photo/2.jpg" class="testimonial-img" alt="">
                                <h3>U Myo Win Than</h3>
                                <h4>Vice Chairman (1)</h4>
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i> MHA will be the association that empowers Myanmar Hotel Industry to achieve sustainable growth and be competitive at international standards.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="testimonial-wrap">
                            <div class="testimonial-item">
                                <img src="@/assets/images/CEC-Member-Photo/3.jpg" class="testimonial-img" alt="">
                                <h3>U Aung Moe Kyi</h3>
                                <h4>Vice Chairman (2)</h4>
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i> MHA will be the association that empowers Myanmar Hotel Industry to achieve sustainable growth and be competitive at international standards.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="testimonial-wrap">
                            <div class="testimonial-item">
                                <img src="@/assets/images/CEC-Member-Photo/4.jpg" class="testimonial-img" alt="">
                                <h3>U Myo Min Zaw</h3>
                                <h4>Vice Chairman (3)</h4>
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i> MHA will be the association that empowers Myanmar Hotel Industry to achieve sustainable growth and be competitive at international standards.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="testimonial-wrap">
                            <div class="testimonial-item">
                                <img src="@/assets/images/CEC-Member-Photo/5.jpg" class="testimonial-img" alt="">
                                <h3>U Khin Maung Htwe</h3>
                                <h4>Vice Chairman (4)</h4>
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i> MHA will be the association that empowers Myanmar Hotel Industry to achieve sustainable growth and be competitive at international standards.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End testimonial item -->

                </div>
                <div class="swiper-pagination" id="swiper-paginate"></div>
            </div>

        </div>
    </section>
</template>
      

<script>
    import { ref, onMounted } from 'vue';
    export default {
        setup() {
            const swiper = ref(null);

            onMounted(() => {
                swiper.value = new Swiper('.testimonials-slider', {
                    speed: 600,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'bullets',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                });
            });

            return {
            swiper,
            };
        },
    };

</script>

<style>
.testimonials .testimonial-wrap {
    padding-left: 50px;
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
    overflow: hidden;
}

.testimonials .testimonial-item {
    box-sizing: content-box;
    padding: 30px 30px 30px 60px;
    margin: 30px 15px;
    min-height: 200px;
    box-shadow: 0px 2px 12px rgba(44, 73, 100, 0.08);
    position: relative;
    background: #fff;
}

.testimonials .testimonial-item .testimonial-img {
    width: 100px;
    border-radius: 10px;
    border: 6px solid #fff;
    position: absolute;
    left: -45px;
}

.testimonials .testimonial-item h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #111;
}

.testimonials .testimonial-item h4 {
    font-size: 14px;
    color: #999;
    margin: 0;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
    color: #badaf7;
    font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
}

.testimonials .testimonial-item p {
    font-style: italic;
    margin: 15px auto 15px auto;
}

.testimonials .swiper-pagination {
    margin-top: 20px;
    position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid #1977cc;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
    width: 14px;
    height: 14px;
    background: linear-gradient(to right, #2d0b00, #0193c9);
}


@media (max-width: 767px) {
    .testimonials .testimonial-wrap {
        padding-left: 0;
    }
    .testimonials .testimonials-carousel,
    .testimonials .testimonials-slider {
        overflow: hidden;
    }
    .testimonials .testimonial-item {
        padding: 30px;
        margin: 15px;
    }
    .testimonials .testimonial-item .testimonial-img {
        position: static;
        left: auto;
    }
}

@media (max-width: 420px) {
    .testimonials .testimonial-item p {
        font-size: 14px;
    }
}
</style>
