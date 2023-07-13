<template>
    <section class="header">
        <div class="sub-banner">
            <div class="slider">
                <img src="@/assets/images/about3.jpg" id="aboutImg">
            </div>
            <div class="sub-overlay">
                <div class="content">
                    <h1>Contact Us</h1>
                    <h3>
                        <p>We are always ready to connect you.</p>
                    </h3>
                </div>
            </div>
        </div>
    </section>
    <!---------- End Navigation Bar ---------->
    <!--- Contact Us --->
    <section class="gmap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15276.23040551089!2d96.1582341!3d16.8234983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xafb7f2bd52046fbc!2sMyanmar%20Hotelier%20Association!5e0!3m2!1sen!2smm!4v1654597318629!5m2!1sen!2smm"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    <section class="cont-us">
        <div class="container">
            <div class="row ads-row">
                <div class="col-lg-6 col-md-12 col-sm-12 cont-us-col">
                    <div>
                        <i class="fa fa-home"></i>
                        <span>
								<h5>Room No.101, Aye Yeik Thar (1) Street, Shwe Than Lwin Condo, Bahan Township, Yangon, Myanmar.</h5>
							</span>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <span>
								<h5>01 - 554084, 554980, 554981</h5>
								<p>Fax: 01 - 554840</p>
							</span>
                    </div>
                    <div>
                        <i class="fa fa-envelope-o"></i>
                        <span>
								<h5>info@myanmarhotelier.org</h5>
								<p>Email us for any query.</p>
							</span>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 cont-us-col">
                    <form action="">
                        <input type="text" placeholder="Enter your name"  required>
                        <input type="email" placeholder="Enter email address" required>
                        <input type="text" placeholder="Enter your subject" required>
                        <textarea rows="8" placeholder="Message" required></textarea>
                        <button type="submit" class="about-btn about-page-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.gmap {
    width: 80%;
    margin: auto;
    padding: 80px 0;
}

.gmap iframe {
    width: 100%;
}

.cont-us-col {
    margin-bottom: 30px;
}

.cont-us-col div {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

.ads-row div .fa {
    font-size: 40px;
    color: #0193c9;
    margin: 10px;
    margin-right: 30px;
}

.cont-us-col div p {
    padding: 0;
}

.cont-us-col div h5 {
    font-size: 20px;
    margin-bottom: 5px;
    color: #555;
    font-weight: 400;
}

.cont-us-col input,
.cont-us-col textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 17px;
    outline: none;
    border: 1px solid #ccc;
    box-sizing: border-box;
    color: #000 !important;
}

.cont-us-col form {
    display: block;
    border-bottom: none;
}
</style>
