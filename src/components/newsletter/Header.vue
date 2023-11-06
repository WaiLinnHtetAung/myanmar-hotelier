<template>
    <div class="header">
        <div class="newsletter-img">
            <img src="@/assets/images/logo.gif" alt="">
        </div>
        <div class="newsletter-text">
            <div class="first-link"></div>
            <h6>မြန်မာနိုင်ငံဟိုတယ်ဆိုင်ရာလုပ်ငန်းရှင်များအသင်း</h6>
            <h2>NEWS LETTER</h2>
            <div class="last-link-container">
                <div class="last-link"></div>
                
                <div class="date" v-if="isLoaded && !isDetail">{{ news[0] ? convertToMyanmarFont(new Date(news[0].date).getFullYear()) : '၂၀၂၃' }} ခုနှစ်၊ {{ news[0] ? new Date(news[0].date).toLocaleString('default', { month: 'long' }) : 'month' }} လ ( {{ news[0] ? convertToMyanmarFont(new Date(news[0].date).getDate()) : '' }} )ရက်နေ့မှ (၃၀)ရက်နေ့အထိ</div>

                <div class="date" v-else>{{ news ? convertToMyanmarFont(new Date(news.date).getFullYear()) : '၂၀၂၃' }} ခုနှစ်၊ {{ news ? new Date(news.date).toLocaleString('default', { month: 'long' }) : 'month' }} လ ( {{ news ? convertToMyanmarFont(new Date(news.date).getDate()) : '' }} )ရက်နေ့မှ (၃၀)ရက်နေ့အထိ</div>

            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: ['news', 'isLoaded'],
        setup() {
            const convertToMyanmarFont = (number) => {
                const MyanmarNumerals = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];
                return number.toString().replace(/\d/g, (digit) => MyanmarNumerals[digit]);
            };
            
            return { convertToMyanmarFont };
        }
    }
</script>

<style  scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: #0086bb;
    padding: 40px 10px;
}

.header .newsletter-img {
    width: 170px;
    height: 170px;
    margin-bottom: 15px;
}

.header .newsletter-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.newsletter-text {
    width: 800px;
}

.newsletter-text h6 {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 15px;
}

.newsletter-text h2 {
    font-family: Abril Fatface;
    color: rgb(255, 183, 0);
    -webkit-text-stroke: .5px rgb(128, 3, 3);
    text-shadow: 5px 5px 1rem rgb(82, 25, 25);
    font-size: 46px;
    letter-spacing: 5px;
}

.newsletter-text .first-link {
    height: 2px;
    background: #fff;
    margin-bottom: 30px;
}

.last-link-container {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.newsletter-text .last-link {
    height: 2px;
    background: #fff;
    width: 55%;
}

.last-link-container .date {
    font-size: 16px;
    font-weight: bold;
    color: rgb(255, 193, 34);
}

@media (max-width: 1200px) {
    .newsletter-text .last-link {
        width: 50%;
    }

    .last-link-container .date {
        font-size: 16px;
    }
}


@media (max-width: 990px) {
    /*-- ------- header -------  -*/

    .header .newsletter-img {
        width: 140px;
        height: 140px;
        margin-bottom: 15px;
    }

    .newsletter-text {
        width: 700px;
    }

    .newsletter-text h6 {
        font-size: 18px;
    }

    .newsletter-text h2 {
        font-size: 38px;
        letter-spacing: 5px;
    }

    .newsletter-text .last-link {
        width: 50%;
    }

    .last-link-container .date {
        font-size: 13px;
    }
}

@media (max-width: 450px) {
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: #0086bb;
        padding: 30px 10px;
    }

    .header .newsletter-img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }

    .header .newsletter-img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .newsletter-text {
        width: 300px;
    }

    .newsletter-text h6 {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
    }

    .newsletter-text h2 {
        font-size: 28px;
        letter-spacing: 5px;
    }

    .newsletter-text .first-link {
        margin-bottom: 20px;
    }

    .last-link-container {
        margin-top: 20px;
    }

    .newsletter-text .last-link {
        width: 20%;
    }

    .last-link-container .date {
        font-size: 11px;
    }

    /* ----- menu link -------- */
}

</style>
