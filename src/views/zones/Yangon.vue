<template>
    <section class="header">
        <div class="sub-banner">
            <div class="slider">
                <img src="@/assets/images/about3.jpg" id="aboutImg">
            </div>
            <div class="sub-overlay">
                <div class="content">
                    <h1>YANGON HOTEL ZONE</h1>
                    <h3>
                        <p>CHOOSE THE BEST HOTEL AND PLACE TO VISIT</p>
                    </h3>
                </div>
            </div>
        </div>
    </section>
    <!--- End Header and Menu --->
    <!--------------- Start Famous Place to Visit Section ----------------->
    <section class="famous services famous-section" id="services">
        <h1>FAMOUS PLACES TO VISIT</h1>
        <div class="container">

            <div class="row famous-cards">
                <div class="col-lg-4 famous-card-wrap">
                    <div class="famous-card" data-card="UI/UX">
                        <div class="card-content z-index">
                            <img src="@/assets/images/zones/famous-ygn-01.jpg" class="famous-icon" alt="" />
                            <h3 class="title-sm">Shwedagon Pagoda</h3>
                            <p class="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?
                            </p>
                            <a href="#" class="btn btn-outline-light">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 famous-card-wrap">
                    <div class="famous-card" data-card="Code">
                        <div class="card-content z-index">
                            <img src="@/assets/images/zones/famous-ygn-02.jpg" class="famous-icon" alt="" />
                            <h3 class="title-sm">Kandawgyi Lake</h3>
                            <p class="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit nobi?
                            </p>
                            <a href="#" class="btn btn-outline-light">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 famous-card-wrap">
                    <div class="famous-card" data-card="App">
                        <div class="card-content z-index">
                            <img src="@/assets/images/zones/famous-ygn-03.jpg" class="famous-icon" alt="" />
                            <h3 class="title-sm">Bogyoke Aung San Market</h3>
                            <p class="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic veniam.
                            </p>
                            <a href="#" class="btn btn-outline-light">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="hotel-zone">
        <div class="container">
            <div class="row">

                <div class="paginate">
                    <pagination v-model="currentPage" :records="total" :per-page="60" @paginate="getData(currentPage)"/>
                </div>
                
                <div class="col-lg-3 col-md-6 col-sm-4" v-for="(hotel, index) in hotels" :key="index">  
                    <div class="card hotel-card  shadow p-2 mb-5 bg-body rounded">
                        <div class="card-header">
                            <img :src="hotel.image" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{hotel.name}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{hotel.owner}}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Sr. No {{hotel.sr_no}}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">{{hotel.total_room}} Room</h6>
                            <p class="card-text"><i class="fa fa-phone"></i> {{hotel.phone}}</p>
                            <p class="card-text"><i class="fa fa-location-arrow"></i> {{hotel.email}}</p>
                            <p class="card-text"><i class="fa fa-map-marker"></i> {{hotel.address}}</p>
                            <a :href="hotel.web_link" class="card-link btn btn-outline-light">View Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="paginate">
                <pagination v-model="currentPage" :records="total" :per-page="60" @paginate="getData(currentPage)"/>
            </div>
        </div>
    </div>


</template>

<script>
    import getHotels from '@/composables/getHtels'
    import { onMounted, ref } from 'vue';
    
    export default {
        setup() {
            let default_img = require('@/assets/images/default.webp');
            const currentPage = ref(1);
          

            let {hotels, total, errors, load} = getHotels();

            load();

            let getData = (page) => {
                load(page);
            }

            return {hotels, default_img, currentPage, getData, total}
        }
    }
</script>

<style>
    .paginate {
        width: 400px;
        margin: 35px auto 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    
  

</style>
