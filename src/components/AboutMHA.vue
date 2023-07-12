<template>
    <section class="about section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 about-grid">
                    <div class="about-card">
                        <i class="uil uil-users-alt"></i>
                        <h3><a href="cec-members.html">CEC Members</a></h3>
                    </div>
                    <div class="about-card">
                        <i class="uil uil-user-plus"></i>
                        <h3><a href="#">Personl Membership</a></h3>
                    </div>
                    <div class="about-card">
                        <i class="uil uil-cell"></i>
                        <h3><a href="constitution.html">Constitution</a></h3>
                    </div>
                    <div class="about-card">
                        <i class="uil uil-building"></i>
                        <h3><a href="#">Hotel Membership</a></h3>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 about-info">
                    <h3 class="sub-heading">About MHA</h3>
                    <h1 class="heading">Requirement of MHA Membership</h1>
                    <h3 class="sub-heading">Requirement for MHA Member Hotel</h3>
                    <p class="text">1. One copy of Ministry of Hotels and Tourism License</p>
                    <p class="text">2. Three passport photos</p>
                    <p class="text">3. One copy of National Registration Card</p>
                    <p class="text">4. Contact details</p>
                    <h3 class="sub-heading">Requirement for MHA Personal Member</h3>
                    <p class="text">1. Three passport photos of Applicant</p>
                    <p class="text">2. One copy of National Registration Card</p>
                    <p class="text">3. Contact details</p>
                    <!--<div class="cta">
                  <a href="mailto:mtn@itgatewaymm.com" class="btn">Contact me</a>
                  <a href="./assets/cv.pdf" download class="btn secondary-btn">Download CV</a>
                </div>-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.about {
    margin: 7rem auto;
}

.about .text {
    color: var(--text-color-2);
    font-size: 16px;
    font-weight: 600;
    line-height: 0.2;
}

.about-grid {
    display: grid;
    grid-template-columns: 190px 190px;
    grid-template-rows: 190px 190px;
    justify-content: center;
    column-gap: 2rem;
    row-gap: 100px;
    position: relative;
}

.about-card {
    background: linear-gradient(to right, #0162a0, #0193c9);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s transform;
}

.about-card:nth-child(1) {
    border-radius: 40px 40px 5px 40px;
}

.about-card:nth-child(2) {
    margin-top: 50px;
    border-radius: 40px 40px 40px 5px;
}

.about-card:nth-child(3) {
    margin-top: -50px;
    border-radius: 40px 5px 40px 40px;
}

.about-card:nth-child(4) {
    border-radius: 5px 40px 40px 40px;
}

.about-card .uil {
    width: 60px;
    font-size: 4rem;
    color: #c9a42e;
    transition: 0.5s;
}

.about-card h3 {
    color: #c9a42e;
    font-weight: 600;
    font-size: 1.1rem;
    margin-top: 1rem;
    letter-spacing: 0.3px;
}

.about-card:hover {
    transform: scale(1.1);
}

.about-card a {
    color: #c9a42e !important;
    font-family: Abril Fatface;
}

.about-grid::before {
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 15px solid #c9a42e;
    z-index: -1;
    opacity: 0.3;
}

.about-info .heading {
    font-family: Abril Fatface;
    font-size: 2.5rem;
    margin: 1rem 0 2rem;
    background: linear-gradient(to right, #c9a42e, #96711b, #c9a42e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about-info .sub-heading {
    color: #0193c9;
}

@media (max-width: 420px) {
    .about-grid {
        grid-template-columns: 160px 160px;
        grid-template-rows: 160px 160px;
        column-gap: 1.6rem;
        row-gap: 70px;
        margin-bottom: 32px;
    }
    .about-grid::before {
        width: 170px;
        height: 170px;
    }
    .about-card .uil {
        font-size: 3rem;
    }
    .about-card h3 {
        font-size: 0.9rem;
    }
    .about .text {
        font-size: 12px;
        font-weight: 400;
    }
}
</style>
