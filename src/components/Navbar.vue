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
                                                    <li><a href="cec-members.html" class="dropdown-item">CEC Members</a></li>

                                                    <li><a href="constitution.html" class="dropdown-item">Constitution</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                        <div class="col-lg-4 col-12">
                                            <div class="col-megamenu">
                                                <h6 class="title">Apply Membership</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="fee.html" class="dropdown-item">Fees</a></li>
                                                    <li><a href="benefit.html" class="dropdown-item">Benefits</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                        <div class="col-lg-4 col-12">
                                            <div class="col-megamenu">
                                                <h6 class="title">Application Form</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="hform.html" class="dropdown-item">Hotel Member Form</a></li>
                                                    <li><a href="phform.html" class="dropdown-item">Personal Member Form</a></li>
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
                                                    <li><a href="news.html" class="dropdown-item">Activities</a></li>
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
                                    <div class="row g-3">
                                        <div class="col-lg-3 col-6">
                                            <div class="col-megamenu">
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="ygnzone.html">Yangon</a></li>
                                                    <li><a class="dropdown-item" href="mdyzone.html">Mandalay</a></li>
                                                    <li><a class="dropdown-item" href="nptzone.html">Naypyitaw</a></li>
                                                    <li><a class="dropdown-item" href="baganzone.html">Bagan</a></li>
                                                    <li><a class="dropdown-item" href="ctzone.html">Chaung Thar</a></li>
                                                    <li><a class="dropdown-item" href="ngwesaungzone.html">Ngwe Saung</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                        <div class="col-lg-3 col-6">
                                            <div class="col-megamenu">
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="mlmzone.html">Maw La Myine</a></li>
                                                    <li><a class="dropdown-item" href="magwayzone.html">Magway</a></li>
                                                    <li><a class="dropdown-item" href="rakhinezone.html">Rakhine</a></li>
                                                    <li><a class="dropdown-item" href="bagozone.html">Bago</a></li>
                                                    <li><a class="dropdown-item" href="pyayzone.html">Pyay</a></li>
                                                    <li><a class="dropdown-item" href="kachinzone.html">Kachin</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                        <div class="col-lg-3 col-6">
                                            <div class="col-megamenu">
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="kayahzone.html">Kayah</a></li>
                                                    <li><a class="dropdown-item" href="kayinzone.html">Kayin</a></li>
                                                    <li><a class="dropdown-item" href="pyinoolwinzone.html">Pyin Oo Lwin</a></li>
                                                    <li><a class="dropdown-item" href="shanzone.html">Shan (South)</a></li>
                                                    <li><a class="dropdown-item" href="shan(north)zone.html">Shan (North)</a></li>
                                                </ul>
                                            </div>
                                            <!-- col-megamenu.// -->
                                        </div>
                                        <!-- end col-3 -->
                                        <div class="col-lg-3 col-6">
                                            <div class="col-megamenu">
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="tanintharyizone.html">TaninTharYi</a></li>
                                                    <li><a class="dropdown-item" href="sagaingzone.html">Sa Gaing</a></li>
                                                    <li><a class="dropdown-item" href="chinzone.html">Chin</a></li>
                                                    <li><a class="dropdown-item" href="goldentrianglezone.html">Golden Triangle</a></li>
                                                    <li><a class="dropdown-item" href="hotelsupplier.html">Hotel Suppliers</a></li>
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
                            <a href="contact.html" class="nav-link"><i class='bx bx-mobile'></i>Contact</a>
                        </li>
                        <!-- About Us Page -->
                        <li class="nav-item">
                            <a href="about.html" class="nav-link"><i class="fa fa-th-large"></i>About Us</a>
                        </li>
                    </ul>
                    <!-- Search Bar and Login -->
                    <form class="d-flex" role="search">
                        <div class="search">
                            <i class='fa fa-search'></i>
                            <input class="me-2" type="search" placeholder="Quick Search" aria-label="Quick Search">
                        </div>
                        <button class="btn btn-outline-light" type="submit"><a href="login.php">Login</a></button>
                    </form>
                </div>
                <!-- navbar-collapse.// -->
            </div>
            <!-- container-fluid.// -->
        </nav>
    </header>
</template>

<script>
import { onMounted, ref } from 'vue'
    export default {
        setup() {
            let isScrolled = ref(false);

            let scrollChange = () => {
                if(window.pageYOffset > 0) {
                    isScrolled.value = true;
                } else {
                    isScrolled.value = false;
                }
            }

            onMounted(() => {
                window.addEventListener('scroll', scrollChange)
            })


            return {isScrolled}
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

    @media (max-width:1500px) {
        header .container-fluid {
            padding: 0 3%;
        }
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

    .search i {
        color: #fff;
        margin: 0 20px !important;
        font-size: 1rem !important;
    }

    .navbar .megamenu {
        padding: 1rem;
    }

    .navbar .fa-mobile {
        font-size: 20px;
    }


    /* ============ desktop view ============ */

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
    }


    /* ============ mobile view .end// ============ */


    /* ------------- End Navigation Section ----------- */
</style>
