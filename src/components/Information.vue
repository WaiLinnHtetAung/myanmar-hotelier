<template>
    <section class="info-section">
        <div class="info-container">
            <div class="cards">

                <div class="card-wrap">
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fa fa-car"></i>
                        </div>
                        <div class="card-content z-index">
                            <h3 class="title-sm">The Best Places</h3>
                            <a href="#" class="btn btn-outline-light">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="card-wrap">
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fa fa-building"></i>
                        </div>
                        <div class="card-content z-index">
                            <h3 class="title-sm">Myanmar Hotels</h3>
                            <a href="#" class="btn btn-outline-light">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="card-wrap">
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fa fa-th-list"></i>
                        </div>
                        <div class="card-content z-index">
                            <h3 class="title-sm">Member Lists</h3>
                            <a href="#" class="btn btn-outline-light">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="card-wrap">
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fa fa-users"></i>
                        </div>
                        <div class="card-content z-index">
                            <h3 class="title-sm">Join Members</h3>
                            <a href="#" class="btn btn-outline-light">Read more</a>
                        </div>
                    </div>
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
.info-section {
    padding: 1rem 0;
    overflow: hidden;
    /*background-image: linear-gradient(to right, #0193c9, #196288, #0193c9);*/
    margin-bottom: 5rem;
}

.info-container {
    position: relative;
    z-index: 5;
    max-width: 92rem;
    padding: 0 4rem;
    margin: 0 auto;
}

.cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
}

.card-wrap {
    position: relative;
    margin: 1rem 0.8rem;
}

.info-card {
    position: relative;
    width: 100%;
    min-width: 280px;
    /*background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2));*/
    background-image: linear-gradient(to right, #0193c9, #196288, #0193c9);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 1rem;
    overflow: hidden;
    transition: 0.3s;
    border-radius: 30px;
}

.info-card:before {
    content: attr(data-card);
    position: absolute;
    top: -15px;
    right: -15px;
    font-size: 6rem;
    font-weight: 800;
    line-height: 1;
    color: var(--main-color);
    opacity: 0.025;
}

.info-card:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0px;
    bottom: 0;
    left: 0;
    /*background-color: var(--main-color);*/
    background: linear-gradient(to right, #2d0b00, #c9a42e);
    transition: 0.3s;
}

.card-wrap:hover .info-card {
    transform: translateY(-15px);
}

.card-wrap:hover .info-card:after {
    height: 8px;
}

.info-icon {
    font-size: 3rem;
    color: #c9a42e;
    align-items: center;
    margin-right: 1rem;
    text-align: center;
}

.info-card .title-sm {
    font-size: 20px;
    font-weight: bold;
    line-height: 0.8;
    color: #fff;
    margin: 1rem auto;
}
</style>
