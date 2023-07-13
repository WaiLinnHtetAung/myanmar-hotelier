<template>
    <div class="footer">
        <div class="container">
            <footer>
                <div class="row footer-row">
                    <div class="col-lg-4 col-md-12 footer-col">
                        <img src="@/assets/images/logo.gif" class="footer-logo">
                        <h3>Myanmar Hotelier Association
                            <div class="footer-underline"><span></span></div>
                        </h3>
                        <p>Build your hotel business with our team and become a best provider in Myanmar.</p>
                    </div>
                    <div class="col-lg-3  col-md-6 footer-col">
                        <h3>Head Office
                            <div class="footer-underline"><span></span></div>
                        </h3>
                        <p>Room No.101,</p>
                        <p>Aye Yeik Thar (1) Street,</p>
                        <p>Shwe Than Lwin Condo,</p>
                        <p>Bahan Township, Yangon, Myanmar</p>
                        <p class="email-id">info@myanmarhotelier.org</p>
                        <h4>+951 - 554084, 554980, 554981</h4>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-col">
                        <h3>Home
                            <div class="footer-underline"><span></span></div>
                        </h3>
                        <p><a href="#">Places</a>
                        </p>
                        <p><a href="news.html">News</a></p>
                        <p><a href="#">Zones</a></p>
                        <p><a href="contact.html">Contact</a></p>
                        <p><a href="about.html">About</a></p>
                    </div>
                    <div class="col-lg-3 col-md-12 footer-col">
                        <h3>Social Networks
                            <div class="footer-underline"><span></span></div>
                        </h3>
                        <form>
                            <i class='fa fa-envelope'></i>
                            <input type="email" placeholder="Enter your name" required>
                            <button type="submit"><i class='fa fa-arrow-right'></i></button>
                        </form>
                        <div class="social-icons">
                            <i class="bx bxl-facebook-circle"></i>
                            <i class='bx bxl-youtube'></i>
                            <i class='bx bxl-linkedin-square'></i>
                            <i class='bx bxl-twitter'></i>
                            <i class='bx bxl-whatsapp'></i>
                        </div>
                    </div>
                </div>
                <hr>
                <p class="copyright">Myanmar Hotelier Association &copy; 2023 - All Rights Reserved</p>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer {
    width: 100%;
    position: relative;
    bottom: 0;
    margin-top: 5rem;
    background: linear-gradient(to right, #2d0b00, #0193c9);
    /*#00093c, #2d0b00*/
    color: #fff;
    padding: 30px 0 20px;
    border-top-left-radius: 140px;
    font-size: 13px;
    line-height: 20px;
}

.footer-logo {
    width: 80px;
    margin-bottom: 30px;
}

.footer-col h3 {
    font-size: 18px;
    width: fit-content;
    margin-bottom: 40px;
    position: relative;
    color: #c9a42e;
}

.footer-col h4 {
    font-size: 13px !important;
}

.email-id {
    width: fit-content;
    border-bottom: 1px solid #ccc;
    margin: 20px 0;
}

footer ul li {
    list-style: none;
    margin-bottom: 12px;
}

footer ul li a {
    text-decoration: none;
    color: #fff;
}

.footer-col form {
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin-bottom: 50px;
}

form .bx,
form .fa {
    font-size: 1.6rem;
    margin-right: 10px;
}

form input {
    width: 100%;
    background: transparent;
    color: #ccc;
    border: 0;
    outline: none;
}

form button {
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
}

form button .bx {
    font-size: 2rem;
    color: #ccc;
}

.social-icons .bx {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    color: #c9a42e;
    background: #fff;
    margin-right: 15px;
    cursor: pointer;
}

.copyright {
    text-align: center;
}

.footer-underline {
    width: 100%;
    height: 5px;
    background: #767676;
    border-radius: 3px;
    position: absolute;
    top: 25px;
    left: 0;
    overflow: hidden;
}

.footer-underline span {
    width: 15px;
    height: 100%;
    background: #c9a42e;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 10px;
    animation: moving 2s linear infinite;
}

@keyframes moving {
    0% {
        left: -20px;
    }
    100% {
        left: 100%;
    }
}

@media (max-width: 450px) {
    .footer {
        border-top-left-radius: 70px;

    }
}
</style>
