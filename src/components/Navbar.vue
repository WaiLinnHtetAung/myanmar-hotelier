<template>
    <header :class="{'scrolled': isScrolled}">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img src="@/assets/images/logo.gif"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- Members Menu -->
                        <li class="nav-item dropdown has-megamenu">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i class="fa fa-users"></i>Members</a>
                            <div class="dropdown-menu megamenu" role="menu">
                                <div class="container">
                                    <div class="row g-3">
                                        <div class="col-lg-4 col-12">
                                            <div class="col-megamenu">
                                                <h6 class="title">MHA Members</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="/cec-members" class="dropdown-item">CEC Members</a></li>

                                                    <li><a href="/constitution" class="dropdown-item">Constitution</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                        <div class="col-lg-4 col-12">
                                            <div class="col-megamenu">
                                                <h6 class="title">Apply Membership</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="/fees" class="dropdown-item">Fees</a></li>
                                                    <li><a href="/benefits" class="dropdown-item">Benefits</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                        <div class="col-lg-4 col-12">
                                            <div class="col-megamenu">
                                                <h6 class="title">Application Form</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="/hotel-member-form" class="dropdown-item">Hotel Member Form</a></li>
                                                    <li><a href="/personal-member-form" class="dropdown-item">Personal Member Form</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                    </div>
                                    <!-- end row -->
                                </div>
                            </div>
                            <!-- dropdown-mega-menu.// -->
                        </li>
                        <!-- News Menu -->
                        <li class="nav-item dropdown has-megamenu">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i class="fa fa-newspaper-o"></i>News</a>
                            <div class="dropdown-menu megamenu" role="menu">
                                <div class="container">
                                    <div class="row g-3">
                                        <div class="col-lg-4 col-6">
                                            <div class="col-megamenu">
                                                <h6 class="title">Latest News</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="/news/activities" class="dropdown-item">Activities</a></li>
                                                    <li><a href="news.html" class="dropdown-item">Weather</a></li>
                                                    <li><a href="news.html" class="dropdown-item">Foreign Currency</a></li>
                                                    <li><a href="news.html" class="dropdown-item">Emergency Health</a></li>
                                                    <li><a href="news.html" class="dropdown-item">Fire News</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                    </div>
                                    <!-- end row -->
                                </div>
                            </div>
                            <!-- dropdown-mega-menu.// -->
                        </li>
                        <!-- Zones Menu -->
                        <li class="nav-item dropdown has-megamenu">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i class="fa fa-map-o"></i>Zones</a>
                            <div class="dropdown-menu megamenu" role="menu">
                                <div class="container">
                                    <div class="row g-0">
                                        <div class="col-lg-3 px-lg-3 col-6 mb-0" v-for="(zone, index) in zones" :key="index">
                                            <div class="col-megamenu">
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" :href="`/zones/${zone.slug}`">{{zone.name}}</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        
                                        <!-- end col-3 -->
                                    </div>
                                    <!-- end row -->
                                </div>
                            </div>
                            <!-- dropdown-mega-menu.// -->
                        </li>
                        <!-- -- Destination Menu --  -->
                        <li class="nav-item dropdown has-megamenu">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i class="fa-solid fa-tree-city me-1"></i>Destination</a>
                            <div class="dropdown-menu megamenu" role="menu">
                                <div class="container">
                                    <div class="row g-0">
                                        <div class="col-lg-3 px-lg-3 col-6 mb-0" v-for="(zone, index) in zones" :key="index">
                                            <div class="col-megamenu">
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" :href="`/destination/${zone.slug}`">{{zone.name}}</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        
                                        <!-- end col-3 -->
                                    </div>
                                    <!-- end row -->
                                </div>
                            </div>
                            <!-- dropdown-mega-menu.// -->
                        </li>
                        <!-- Contact Page -->
                        <li class="nav-item">
                            <a href="/contact" class="nav-link"><i class='bx bx-mobile'></i>Contact</a>
                        </li>
                        <!-- About Us Page -->
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i class="fa fa-th-large"></i>About Us</a>
                            <div class="dropdown-menu megamenu" role="menu">
                                <div class="container">
                                    <div class="row g-3">
                                        <div class="col-lg-4 col-6">
                                            <div class="col-megamenu">
                                                <ul class="list-unstyled">
                                                    <li><a href="/vision-mission" class="dropdown-item">Vision & Mission</a></li>
                                                    <li><a href="/chairman-message" class="dropdown-item">Chairman Messsage</a></li>
                                                    <li><a href="/introduction" class="dropdown-item">Organization & Responsibilities</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                    </div>
                                    <!-- end row -->
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- Search Bar and Login -->
                    <form class="d-flex justify-content-start" role="search">
                        <div class="search">
                            <i class='fa fa-search'></i>
                            <input class="me-2" type="search" v-model="search" @input="getSearchResults" placeholder="Quick Search" aria-label="Quick Search">
                            <div class="searched_hotels" v-if="search.length > 0">
                                <div class="row w-100" v-if="searchedHotels.length > 0">
                                    <div class="col-lg-3 col-md-6 col-sm-4 mb-3 p-2" v-for="(hotel, index) in searchedHotels" :key="index">
                                        <div class="card search-hotel-card shadow p-2 mb-5 bg-body rounded">
                                            <div class="search-card-header mb-2">
                                                <img :src="hotel.image" alt="" />
                                            </div>
                                            <div class="card-body text-start">
                                                <h5 class="card-title">{{ hotel.name }}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">{{ hotel.owner }}</h6>
                                                <h6 class="card-subtitle mb-2 text-muted">Sr. No {{ hotel.sr_no }}</h6>
                                                <h6 class="card-subtitle mb-2 text-muted">{{ hotel.total_room }} Room</h6>
                                                <p class="card-text text-start"><i class="fa fa-phone"></i> {{ hotel.phone }}</p>
                                                <p class="card-text text-start"><i class="fa fa-location-arrow"></i> {{ hotel.email }}</p>
                                                <p class="card-text text-start"><i class="fa fa-map-marker"></i> {{ hotel.address }}</p>
                                                <a :href="hotel.web_link" class="card-link btn btn-outline-light">View Website</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div v-else class="col-12 d-flex justify-content-center">
                                    <h6 class="text-center text-white">No Match Results</h6>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button class="btn btn-sm btn-outline-light login" type="submit"><a href="login.php">Login</a></button>
                </div>
                <!-- navbar-collapse.// -->
            </div>
            <!-- container-fluid.// -->
        </nav>
    </header>
</template>

<script>
import { onMounted, ref} from 'vue'
import getZones from '@/composables/getZones'
import axios from 'axios';
import api from '@/api/api';
    export default {
        setup() {
            let isScrolled = ref(false);
            let search = ref('');
            let searchedHotels = ref([]);

            // search hotels
            let getSearchResults = async() => {
                try{
                    let response = await axios.get(api.getSearchHotels+'?search='+search.value);
                    if(response.status === 404) {
                        throw new Error('page not found');
                    }

                    searchedHotels.value = response.data.hotels.map(hotel => {
                        let img = hotel.image == null ? require('@/assets/images/default.webp') : api.image_url + hotel.image;
                        return {...hotel, image: img };
                    });
                }
                catch(err) {
                    console.log(err.message);
                }
                
            }
            

            let scrollChange = () => {
                if(window.pageYOffset > 0) {
                    isScrolled.value = true;
                } else {
                    isScrolled.value = false;
                }
            }

            let {zones, errors, load} = getZones();
            load();

            onMounted(() => {
                window.addEventListener('scroll', scrollChange)
            })


            return {isScrolled, zones, errors, search, searchedHotels, getSearchResults}
        }
    }
</script>

<style scoped>
    /* ------------- Start Navigation Section ----------- */

    header {
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1000;
        transition: all 0.5s;
        box-sizing: border-box;
    }

    header .container-fluid {
        padding: 0 15%;
    }

    

    .navbar {
        background-image: linear-gradient(to right, #0193c9, #196288, #0193c9);
    }

    header.scrolled .navbar {
        background: linear-gradient(to right, #2d0b00, #c9a42e);
        box-shadow: 0 5px 20px 0.1px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(15px);
        transition: all 0.5s;
    }

    header.scrolled .logo {
        height: 100%;
        line-height: 100%;
    }

    header.scrolled .nav-link {
        color: #fff;
    }

    header.scrolled .nav-link:hover>a {
        color: #0193c9;
    }

    header.scrolled .dropdown-link>a {
        background-image: linear-gradient(to right, #2d0b00, #c9a42e);
    }

    header.scrolled .dropdown-link:hover>a {
        color: #0193c9;
    }

    header.scrolled .nav-link:hover {
        color: #c9a42e;
    }

    header.scrolled .nav-link:hover::after {
        background-color: #c9a42e;
    }

    header.scrolled .search {
        background-color: #c9a42e;
    }

    header.scrolled .btn.solid,
    header.scrolled .btn.transparent:hover {
        background: linear-gradient(to right, #0193c9, #196288, #0193c9);
    }

    header.scrolled .btn:hover {
        background-image: linear-gradient(to right, #0193c9, #196288, #0193c9);
    }

    .navbar-brand img {
        width: 40px;
        cursor: pointer;
        margin-right: 2rem;
    }

    .nav-item {
        margin-right: 1rem;
    }

    .dropdown-menu {
        background-image: linear-gradient(to right, #0193c9, #196288, #0193c9);
        color: #fff;
        padding: .5rem 1rem;
        font-size: 1rem;
        margin-top: -5px !important;
        transition: .5s;
    }

    .nav-link {
        cursor: pointer;
        font-size: 14px;
    }

    .nav-link:hover {
        transform: scale(1.1);
        color: #c9a42e !important;
        font-weight: 600;
        transition: all 0.5s;
    }

    header.scrolled .nav-link:hover {
        color: #0193c9 !important;
    }

    header.scrolled .dropdown-menu {
        background-image: linear-gradient(to right, #2d0b00, #c9a42e);
    }

    .nav-link .fa {
        margin-right: 0.3rem;
    }

    .dropdown-menu h6 {
        font-size: 14px;
    }

    .dropdown-item {
        font-size: 14px;
    }

    .dropdown-item:hover {
        background: transparent;
        color: #c9a42e !important;
        transform: scale(1.1);
        font-weight: 600;
        transition: all 0.5s;
    }

    header.scrolled .dropdown-item:hover {
        color: #0193c9 !important;
    }

    .dropdown-item a {
        flex-basis: auto;
        border-right: 1px solid #fff;
    }

    .search {
        min-height: 2.2rem;
        background-color: #0193c9;
        display: grid;
        grid-template-columns: 2.7rem 1fr;
        align-items: center;
        text-align: center;
        border-radius: 50px;
        cursor: pointer;
        margin: 0 1rem;
    }

    .search input {
        height: 100%;
        border: none;
        background: none;
        outline: none;
        color: #fff;
        caret-color: #fff;
        font-family: inherit;
    }

    .search input::placeholder {
        color: var(--text-color);
        font-size: 0.8rem;
    }

    .search .fa-search {
        color: #fff;
        margin: 0 20px !important;
        font-size: 1rem !important;
    }

    /* ===== search form ========*/
    .search .searched_hotels {
        position: absolute;
        top: 100%;
        left: 50%;
        width: 90%;
        transform: translateY(0) translateX(-50%);
        z-index: 99999;
        pointer-events: auto;
        background-color: rgba(43, 41, 41, 0.75);
        display: flex;
        gap: 60px;
        transition: 0.3s ease;
        padding: 30px 40px;
        max-height: 700px;
        overflow-y: scroll;
    }

    .searched_hotels .search-card-header img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }

    .searched_hotels .search-hotel-card {
        height: 500px;
        margin: 0 !important;
    }

    .searched_hotels .card-body h5 {
        font-size: 14px !important;
    }

    .searched_hotels .card-body h6 {
        font-size: 12px !important;
    }

    .navbar .megamenu {
        padding: 1rem;
    }

    .navbar .fa-mobile {
        font-size: 20px;
    }



    @media (max-width:1600px) {
        header .container-fluid {
            padding: 0 6%;
        }

        .nav-item {
            margin-right: .7rem;
        }
    
        .dropdown-menu a{
            font-size: 13px;
        }
    
        .nav-link {
            cursor: pointer;
            font-size: 13px;
        }

    }

    @media (max-width: 1250px) {
        .navbar .container-fluid {
            padding: 0 3%;
        }
        .nav-item {
            margin-right: .1rem;
        }

        .search {
            margin: 0 .5rem;
        }

    }

    @media all and (min-width: 992px) {
        .navbar .has-megamenu {
            position: static!important;
        }
        .navbar .megamenu {
            left: 0;
            right: 0;
            width: 100%;
            margin-top: 0;
        }
    }


    /* ============ desktop view .end// ============ */


    /* ============ mobile view ============ */

    @media(max-width: 991px) {
        .navbar.fixed-top .navbar-collapse,
        .navbar.sticky-top .navbar-collapse {
            overflow-y: auto;
            max-height: 90vh;
            margin-top: 10px;
        }

        /* ===== search form ========*/
        .search .searched_hotels {
            position: absolute;
            top: 100%;
            left: 50%;
            width: 100%;
            transform: translateY(0) translateX(-50%);
            z-index: 99999;
            pointer-events: auto;
            background-color: rgba(43, 41, 41, 0.75);
            display: flex;
            gap: 60px;
            transition: 0.3s ease;
            padding: 30px 20px;
            max-height: 700px;
            overflow-y: scroll;
        }

        .searched_hotels .search-card-header img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        .searched_hotels .search-hotel-card {
            height: 500px;
            margin: 0 auto !important;
            padding: 0 !important;
        }

        .searched_hotels .card-body h5 {
            font-size: 14px !important;
        }

        .searched_hotels .card-body h6 {
            font-size: 12px !important;
        }

        .navbar .megamenu {
            padding: 1rem;
        }

        .navbar .fa-mobile {
            font-size: 20px;
        }
    }

    @media (max-width:490px) {
        /* ===== search form ========*/
        .search .searched_hotels {
            position: absolute;
            top: 100%;
            left: 50%;
            width: 100%;
            transform: translateY(0) translateX(-50%);
            z-index: 99999;
            pointer-events: auto;
            background-color: rgba(43, 41, 41, 0.75);
            display: flex;
            gap: 60px;
            transition: 0.3s ease;
            padding: 30px 10px;
            max-height: 700px;
            overflow-y: scroll;
        }

        .searched_hotels .search-card-header img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .searched_hotels .search-hotel-card {
            width: 300px;
            height: 420px;
            margin: 0 auto !important;
            padding: 0 !important;
        }

        .searched_hotels .card-body h5 {
            font-size: 14px !important;
        }

        .searched_hotels .card-body h6 {
            font-size: 12px !important;
        }

        .navbar .megamenu {
            padding: 1rem;
        }

        .navbar .fa-mobile {
            font-size: 20px;
        }
    }

    /* ============ mobile view .end// ============ */


    /* ------------- End Navigation Section ----------- */
</style>
