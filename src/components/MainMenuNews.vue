<template>
    <section class="category-section">
        <div class="container" data-aos="fade-up">

            <div class="section-header d-flex justify-content-between align-items-center mb-5">
                <h2></h2>
                <div>
                    <a href="category.html" class="more"></a>
                </div>
            </div>

            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="post-entry-1 lg">
                        <a href="#"><img src="@/assets/images/cover9.jpg" alt="" class="img-fluid"></a>
                        <!--<div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>-->
                        <h2 class="post-entry-main-title"><a href="#">Myanmar Hotelier Association</a></h2>
                        <p class="mb-4 d-block">
                            To develop the hotel industry in systematic ways, and get rid of the problems and difficulties that each member is not able to solve, by organizing the nationwide hotels, motels, inns and lodgings.
                            <br><br> The Myanmar Hotelier Association was set up under the close supervision of the Ministry of Hotels and Tourism in line with the permission of the Head of State.
                        </p>

                        <div class="d-flex align-items-center author">
                            <div class="photo"><img src="@/assets/images/cec.jpg" alt="" class="img-fluid"></div>
                            <div class="name">
                                <h3 class="m-0 p-0">U Kyaw Min Htun</h3>
                            </div>
                        </div>
                    </div>

                    <div class="post-entry-1 border-bottom">
                        <div class="post-meta"><span class="date">Technology Development</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                        <h2 class="mb-2"><a href="#">Effectively Changed the MHA Website from Traditional to Digitalized Platform</a></h2>
                        <span class="author mb-3 d-block">Database of Myanmar Hotels</span>
                    </div>

                    <div class="post-entry-1">
                        <div class="post-meta"><span class="date">Apply Membership</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                        <h2 class="mb-2">Are You Ready to Join the Largest Association in Myanmar?
                            <a href="#"></a>
                        </h2>
                        <span class="author mb-3 d-block">U Aung Moe Kyi</span>
                    </div>

                </div>

                <div class="col-lg-6">
                    <div class="row g-5">
                        <div class="col-lg-6 border-start custom-border">
                            <div class="post-entry-1">
                                <a href="#"><img src="@/assets/images/famous-bagan-01.jpg" alt="" class="img-fluid"></a>
                                <div class="post-meta"><span class="date">Bagan</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                <h2><a href="#">UNESCO World Heritage Centre</a></h2>
                            </div>
                            <div class="post-entry-1">
                                <a href="#"><img src="@/assets/images/cover10.jpg" alt="" class="img-fluid"></a>
                                <div class="post-meta"><span class="date">KyaikHtiYo</span> <span class="mx-1">&bullet;</span> <span>Jul 17th '22</span></div>
                                <h2><a href="#">The Most Visited Place in Myanmar</a></h2>
                            </div>
                            <div class="post-entry-1">
                                <a href="#"><img src="@/assets/images/cover5.jpg" alt="" class="img-fluid"></a>
                                <div class="post-meta"><span class="date"></span>Shwe Set Taw<span class="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                                <h2><a href="#">A Weekend in Myanmar You Will Never Forget</a></h2>
                            </div>
                        </div>
                        <div class="col-lg-6 border-start custom-border">
                            <div class="post-entry-1">
                                <a href="#"><img src="@/assets/images/cover12.jpg" alt="" class="img-fluid"></a>
                                <div class="post-meta"><span class="date">Ngapali Beach</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                <h2><a href="#">One of the Asia’s Most Beautiful Beaches</a></h2>
                            </div>
                            <div class="post-entry-1">
                                <a href="#"><img src="@/assets/images/cover7.jpg" alt="" class="img-fluid"></a>
                                <div class="post-meta"><span class="date">Water Festival</span> <span class="mx-1">&bullet;</span> <span>Mar 1st '22</span></div>
                                <h2><a href="#">Celebrated Between 13-17 April 2023.</a></h2>
                            </div>
                            <div class="post-entry-1">
                                <a href="#"><img src="@/assets/images/cover11.jpg" alt="" class="img-fluid"></a>
                                <div class="post-meta"><span class="date">Inle Lake</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                <h2><a href="#">The Second Largest Lake in Myanmar</a></h2>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- End .row -->
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.category-section {
    margin-top: 20px;
}

.post-entry-1 {
    margin-bottom: 30px;
}

.post-entry-1 img {
    margin-bottom: 30px;
}

.post-entry-1 h2 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    font-weight: 500;
}

.post-entry-1 h2 a {
    color: #000 !important;
}

.post-entry-1.lg h2 {
    font-size: 40px;
    line-height: 1;
}

.post-entry-main-title {
    background: linear-gradient(to right, #c9a42e, #96711b, #c9a42e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 36px !important;
    font-weight: bold !important;
}

.post-meta {
    font-size: 11px;
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(var(--color-black-rgb), 0.4);
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .custom-border {
        border: none !important;
    }
}

.author .photo {
    margin-right: 10px;
}

.author .photo img {
    width: 40px;
    border-radius: 50%;
    margin-bottom: 0;
}

.author .name h3 {
    margin: 0;
    padding: 0;
    font-size: 15px;
}

.trending {
    border: 1px solid rgba(var(--color-black-rgb), 0.1);
}

.trending>h3 {
    color: var(--color-black);
    padding: 20px;
    border-bottom: 1px solid rgba(var(--color-black-rgb), 0.1);
}

.trending .trending-post {
    padding: 0;
    margin: 0;
}

.trending .trending-post li {
    padding: 0;
    margin: 0;
    list-style: none;
    display: block;
}

.trending .trending-post li a {
    display: block;
    padding: 20px;
    border-bottom: 1px solid rgba(var(--color-black-rgb), 0.1);
    position: relative;
    overflow: hidden;
}

.trending .trending-post li a .number {
    position: absolute;
    z-index: -1;
    font-size: 5rem;
    left: -10px;
    top: -20px;
    font-weight: 700;
    color: rgba(var(--color-black-rgb), 0.05);
}

.trending .trending-post li a h3 {
    font-size: 18px;
    color: rgba(var(--color-black-rgb), 0.9);
}

.trending .trending-post li a .author {
    color: rgba(var(--color-black-rgb), 0.7);
    font-weight: 500;
}

.trending .trending-post li a:hover h3 {
    color: rgba(var(--color-black-rgb), 1);
}

.trending .trending-post li:last-child a {
    border-bottom: none;
}

.post-entry-2 {
    margin-bottom: 30px;
}

.post-entry-2 .post-meta {
    font-size: 11px;
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(var(--color-black-rgb), 0.4);
    margin-bottom: 10px;
}

.post-entry-2 .author {
    color: rgba(var(--color-black-rgb), 0.7);
    font-weight: 500;
    margin-bottom: 20px;
    display: block;
}

.post-entry-2 .thumbnail {
    flex: 0 0 65%;
}

@media (max-width: 960px) {
    .post-entry-2 .thumbnail {
        flex: 0 0 100%;
        margin-bottom: 20px;
    }
}

.post-entry-2.half .thumbnail {
    flex: 0 0 50%;
}

@media (max-width: 768px) {
    .post-entry-2.half .thumbnail {
        flex: 0 0 100%;
        margin-bottom: 20px;
    }
}

.post-entry-2.small-img .thumbnail {
    flex: 0 0 30%;
}

@media (max-width: 768px) {
    .post-entry-2.small-img .thumbnail {
        flex: 0 0 100%;
        margin-bottom: 20px;
    }
}

.img-bg {
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-position: center center;
}

@media (max-width: 768px) {
    .img-bg {
        height: 400px;
    }
}

.img-bg:before {
    position: absolute;
    content: "";
    /*background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);*/
    opacity: 0.5;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    top: 0;
}

.img-bg .img-bg-inner {
    position: relative;
    z-index: 2;
    max-width: 700px;
    position: relative;
    padding-left: 100px;
    padding-right: 100px;
    margin-bottom: 50px;
}

@media (max-width: 768px) {
    .img-bg .img-bg-inner {
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 50px;
    }
}

.img-bg .img-bg-inner h2,
.img-bg .img-bg-inner p {
    color: var(--color-white);
}

@media (max-width: 500px) {
    .img-bg .img-bg-inner p {
        display: none;
    }
}

.custom-swiper-button-next,
.custom-swiper-button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
}

@media (max-width: 768px) {
    .custom-swiper-button-next,
    .custom-swiper-button-prev {
        display: none;
    }
}

.custom-swiper-button-next span,
.custom-swiper-button-prev span {
    font-size: 20px;
    color: rgba(var(--color-white-rgb), 0.7);
    transition: 0.3s all ease;
}

.custom-swiper-button-next:hover span,
.custom-swiper-button-next:focus span,
.custom-swiper-button-prev:hover span,
.custom-swiper-button-prev:focus span {
    color: rgba(var(--color-white-rgb), 1);
}

.custom-swiper-button-next {
    right: 40px;
}

.custom-swiper-button-prev {
    left: 40px;
}

.swiper-pagination .swiper-pagination-bullet {
    background-color: rgba(var(--color-white-rgb), 0.8);
}

.swiper-pagination .swiper-pagination-bullet-active {
    background-color: rgba(var(--color-white-rgb), 1);
}

.more {
    font-family: var(--font-secondary);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    position: relative;
    display: inline-block;
    padding-bottom: 5px;
}

.more:before {
    content: "";
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-black);
}

.post-content {
    padding-left: 10%;
    padding-right: 10%;
}

@media (max-width: 768px) {
    .post-content {
        padding-left: 15px;
        padding-right: 15px;
    }
}

.post-content .firstcharacter {
    float: left;
    font-family: Georgia;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
}

.post-content figure {
    position: relative;
    left: 52%;
    min-width: 990px;
    transform: translateX(-50%);
}

@media (max-width: 1255px) {
    .post-content figure {
        min-width: auto;
        left: auto !important;
        transform: none;
    }
}

.post-content figure figcaption {
    font-family: var(--font-secondary);
    font-size: 14px;
    padding: 10px 0 0 0;
}

.aside-title,
.category-title {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 30px;
    border-bottom: 2px solid var(--color-black);
}

.category-title {
    border-bottom: none;
}

.custom-pagination a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    font-family: var(--font-secondary);
    margin: 5px;
    transition: 0.3s all ease;
}

.custom-pagination a.active {
    background: var(--color-black);
    color: var(--color-white);
}

.custom-pagination a.active:hover {
    background: rgba(var(--color-black-rgb), 0.9);
}

.custom-pagination a:hover {
    background: rgba(var(--color-black-rgb), 0.1);
}

.custom-pagination a.prev,
.custom-pagination a.next {
    width: auto !important;
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
}

.custom-pagination a.prev:hover,
.custom-pagination a.next:hover {
    background: rgba(var(--color-black-rgb), 0.1);
}


/* custom tab nav on sidebar */

.aside-block {
    margin-bottom: 30px;
}

.aside-block .custom-tab-nav .nav-item {
    display: inline-block;
}

.aside-block .custom-tab-nav .nav-item button {
    color: var(--color-black);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    margin-right: 20px;
}

.aside-block .custom-tab-nav .nav-item button.active {
    background-color: var(--color-black) !important;
    background-color: transparent !important;
    color: var(--color-black);
    border-bottom: 2px solid var(--color-black);
}

.link-video {
    position: relative;
}

.link-video span {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
    background-color: rgba(var(--color-black-rgb), 0.2);
    color: var(--color-white);
}

.aside-links li {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(var(--color-black-rgb), 0.1);
}

.aside-links li a {
    display: block;
    color: rgba(var(--color-black-rgb), 0.7);
}

.aside-links li a:hover,
.aside-links li a:focus {
    color: rgba(var(--color-black-rgb), 1);
}

.aside-tags li {
    display: inline-block;
}

.aside-tags li a {
    display: inline-block;
    color: rgba(var(--color-black-rgb), 0.7);
    padding: 7px 10px;
    border: 1px solid rgba(var(--color-black-rgb), 0.1);
    margin-bottom: 3px;
    transition: 0.3s all ease;
}

.aside-tags li a:hover,
.aside-tags li a:focus {
    color: rgba(var(--color-black-rgb), 1);
    border: 1px solid rgba(var(--color-black-rgb), 0.5);
}

@media (max-width: 420px) {
    .post-entry-main-title {
        font-size: 20px !important;
    }
    .category-section p {
        font-size: 13px;
    }
    .post-entry-1 h2 {
        font-size: 16px;
    }
    .category-section span {
        font-size: 14px;
    }
}
</style>
