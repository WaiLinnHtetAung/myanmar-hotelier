<template>
    <section class="la-act">
        <div class="container">
            <div class="lna-row lna-justify-content-center lna-mb-5 lna-pb-2">
                <div class="lna-col-md-8 lna-text-center lna-heading-section lna-ftco-animate">
                    <h1 class="lna-mb-4">Get The Benefits From <span class="auto-type"> {{ TypedText }}</span></h1>
                    <p>Take the best offers and promotions from our association. <br>sGet the benefits from Our Team as a Business Member.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 la-act-col" v-for="(article, index) in ads" :key="index">
                    <img :src="article.img">
                    <h3>{{article.title}}</h3>
                    <p>{{article.content}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, ref } from 'vue';
    export default {
        setup() {
            let ads = [
                {
                    img: require("@/assets/images/la-act-1.jpg"),
                    title: "Title 1",
                    content: "MHA is proudly represented in International Travel Trade Fairs and national events to highlight our tourism and hospitality activities and future development plans.",
                },
                {
                    img: require("@/assets/images/la-act-2.jpg"),
                    title: "Title 1",
                    content: "MHA is proudly represented in International Travel Trade Fairs and national events to highlight our tourism and hospitality activities and future development plans.",
                },
                {
                    img: require("@/assets/images/la-act-3.jpg"),
                    title: "Title 1",
                    content: "MHA is proudly represented in International Travel Trade Fairs and national events to highlight our tourism and hospitality activities and future development plans.",
                },
            ];

            const sentences = ref(['MHA', 'Our Members', 'Our Partners']);
            const TypedText = ref('');
            let sentenceIndex = ref(0);
            let charIndex = ref(0);

            const typeWriter = () => {
                const sentence = sentences.value[sentenceIndex.value];

                TypedText.value += sentence[charIndex.value];
                charIndex.value++;


                if(charIndex.value === sentence.length + 1) {
                    TypedText.value = '',
                    charIndex.value = 0,
                    sentenceIndex.value++;

                    if(sentenceIndex.value === sentences.value.length) {
                        sentenceIndex.value = 0;
                    }
                }
            }

            onMounted(() => {
                setInterval(typeWriter, 300)
            })

            return {ads, TypedText}
        }
    }
</script>

<style scoped>
.ads-row {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.la-act {
    width: 100%;
    margin: 5rem auto 8rem;
    text-align: center;
    padding-top: 3rem;
    background-image: linear-gradient(to right, #0193c9, #196288, #0193c9);
}

.la-act h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 1rem;
}

.la-act span {
    background: linear-gradient(to right, #ddd, #fff, #eee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.la-act p {
    font-size: 20px;
    line-height: 30px;
    margin: 0 auto;
    margin-bottom: 1rem;
    color: #dfdfdf;
}

.la-act-col {
    border-radius: 10px;
    margin-bottom: 2%;
    text-align: left;
}

.la-act-col img {
    width: 100%;
}

.lna-col-lg-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    position: relative;
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
}

.la-act-col img {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    transition: all 1.1s;
}

.la-act-col p {
    padding: 0;
    font-size: 18px;
}

.la-act-col h3 {
    margin-top: 16px;
    margin-bottom: 15px;
    text-align: left;
    font-size: 25px;
    color: #fff;
}

.la-act-col:hover img {
    transform: scale(1.08);
}

.la-act-col:hover h3 {
    font-size: 27px;
    color: #c9a42e;
}

@media (max-width: 420px) {
    .la-act h1 {
        font-size: 1.7rem;
    }
    .la-act p {
        font-size: 1rem;
        text-align: left;
        line-height: 1.5;
    }
}
</style>
