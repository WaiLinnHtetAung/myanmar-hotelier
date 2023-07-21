<template>
    <section class="header">
        <div class="banner">
            <div class="slider">
                <img :src="currentImage" id="slideImg">
            </div>
            <div class="content">
                <h1>MYANMAR HOTELIER ASSOCIATION</h1>
                <h3>
                    <p>ORGANIZATION AND RESPONSIBILITIES</p>
                </h3>
                <div>
                    <button class="about-btn" type="button"><a href="about.html">About Us</a></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, ref } from 'vue'
    export default {
        setup() {

            const images = [
                require('@/assets/images/carousels/cover.jpg'),
                require('@/assets/images/carousels/cover2.jpg'),
                require('@/assets/images/carousels/cover3.jpg'),
                require('@/assets/images/carousels/cover4.jpg'),
                require('@/assets/images/carousels/cover5.jpg'),
                require('@/assets/images/carousels/cover6.jpg'),
                require('@/assets/images/carousels/cover7.jpg'),
                require('@/assets/images/carousels/cover8.jpg'),
                require('@/assets/images/carousels/cover9.jpg'),
                require('@/assets/images/carousels/cover10.jpg'),
                require('@/assets/images/carousels/cover11.jpg'),
                require('@/assets/images/carousels/cover12.jpg'),
            ];

            const currentImageIndex = ref(0);
            const currentImage = ref(images[currentImageIndex.value]);

            const slider = () => {
                if(currentImageIndex.value < images.length -1) {
                    currentImageIndex.value++;
                } else {
                    currentImageIndex.value = 0;
                }

                currentImage.value = images[currentImageIndex.value];
            }

            onMounted(() => {
                setInterval(slider, 6000);
            })

            

            return {currentImage}

        }
    }
</script>

<style scoped>
.banner {
    width: 100%;
    height: 75vh;
    position: relative;
    overflow: hidden;
}

.slider {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
}

#slideImg {
    width: 100%;
    height: 100%;
    animation: zoom 6s linear infinite;
}

@keyframes zoom {
    0% {
        transform: scale(1.3);
    }
    15% {
        transform: scale(1);
    }
    85% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.3);
    }
}


.logo {
    flex-basis: 10%;
}

.content {
    position: absolute;
    width: 60%;
    top: 50%;
    text-align: left;
    color: #fff;
}

.content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #c9a42e;
}

.content h3 {
    width: 100%;
    margin: 20px auto 50px;
    font-size: 25px;
    font-weight: 600;
    line-height: 10px;
}

button {
    width: 150px;
    padding: 6px 0;
    text-align: center;
    margin: 0 10px;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: 600;
    border: 2px solid #c9a42e;
    background: transparent;
    color: #fff;
    cursor: pointer;
    transition: background 0.5s;
}

button a {
    color: #c9a42e;
    text-decoration: none;
}

button:hover {
    /*background: linear-gradient(rgba(10,0,0,0.4),rgba(10,0,0,0.4));*/
    background: linear-gradient(to right, #2d0b00, #c9a42e);
    border: 2px solid #fff;
}

button:hover a {
    color: #fff;
}

@media (max-width: 1500px) {
    .overlay {
        width: 100%;
        height: 30vh;
        background: none;
        /*background: linear-gradient(to top, transparent, #0193c9 20%,#2d0b00 100%);*/
        /*background: transparent;*/
        opacity: 1;
        position: absolute;
        bottom: 20%;
    }
    .logo {
        flex-basis: 10%;
    }
    .content {
        width: 60%;
        margin-top: 25 0px;
        margin-left: 100px;
        text-align: left;
        color: #fff;
    }
    .content h1 {
        font-size: 1.8rem;
        color: #c9a42e;
    }
    .content h3 {
        width: 100%;
        margin: 20px auto 50px;
        font-size: 20px;
        font-weight: 600;
        line-height: 10px;
    }
    button {
        width: 100px;
        padding: 2px 0;
        text-align: center;
        margin: 0 5px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        border: 2px solid #c9a42e;
        background: transparent;
        color: #fff;
        cursor: pointer;
        transition: background 0.5s;
    }
}

@media (max-width: 900px) {
    .header {
        height: 400px;
    }
    #slideImg {
        height: 400px;
        object-fit: cover;
    }
    .logo {
        flex-basis: 10%;
    }
    .content {
        position: absolute;
        width: 60%;
        top: 30%;
        left: 0%;
        text-align: left;
        color: #fff;
    }
    .content h1 {
        font-size: 1.5rem;
        color: #c9a42e;
    }
    .content h3 {
        width: 100%;
        margin: 20px auto 30px;
        font-size: 18px;
        font-weight: 600;
        line-height: 10px;
    }
    button {
        width: 100px;
        padding: 2px 0;
        text-align: center;
        margin: 0 5px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        border: 2px solid #c9a42e;
        background: transparent;
        color: #fff;
        cursor: pointer;
        transition: background 0.5s;
    }
}

@media (max-width: 490px) {
    .header {
        height: 300px;
    }
    #slideImg {
        height: 300px;
        object-fit: cover;
    }
    .logo {
        flex-basis: 10%;
    }
    .content {
        position: absolute;
        width: 60%;
        top: 0%;
        left: -10%;
        text-align: left;
        color: #fff;
    }
    .content h1 {
        font-size: 14px !important;
        color: #c9a42e;
    }
    .content h3 {
        width: 100%;
        margin: 20px auto 20px;
        font-size: 10px !important;
        font-weight: 600;
        line-height: 10px;
    }
    button {
        width: 70px;
        padding: 2px 0;
        text-align: center;
        margin: 0 5px;
        border-radius: 15px;
        font-size: 10px;
        font-weight: 600;
        border: 2px solid #c9a42e;
        background: transparent;
        color: #fff;
        cursor: pointer;
        transition: background 0.5s;
    }
}
</style>
