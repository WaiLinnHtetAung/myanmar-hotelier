<template>
    <div class="destination">
        <div class="hero-section">
            <div class="banner">
                <img src="@/assets/images/destination/pyay/banner.webp" class="banner" alt="">
            </div>
            <div class="content">
                <div class="hero-header">
                    <img src="@/assets/images/destination/travel.gif" class="icon" alt="">
                
                    <h3>Places to Visit in</h3>
                    <h2>PYAY</h2>
                    <div class="scroll-down">
                        <div class="container">
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <span class="text">Scroll down</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="places">
            <div class="paginate">
                <div class="btn-group">
                    <button @click="prevPage" :disabled="pageNumber == 0" class=" btn-sm btn-primary" :class="{disable: pageNumber == 0}">Prev</button>
                    <button @click="nextPage" :disabled="pageNumber >= pageCount-1" class=" btn-sm btn-primary" :class="{disable: pageNumber >= pageCount-1}">Next</button>
                </div>

                <div class="paginateNum">
                    <span v-for="(n,i) in pageCount" :key="i" :class="{active: i == pageNumber}">{{n}}</span>
                </div>
                <div>&nbsp;</div>
            </div>
            <div class="row">
                <div class="place-card-wrapper" v-for="(card, i) in paginatedData" :key="i">
                    <div class="place-card" :class="{odd: i%2 !== 0}">
                        <div class="place-img ">
                            <div class="swiper place-swiper" data-aos-delay="100">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="(img, i) in card.images" :key="i">
                                        <img :src="img" class="float-start" alt="">
                                    </div>
                                </div>
                                <div class="swiper-pagination" id="swiper-paginate"></div>
                            </div>
                        </div>
                        <div class="place-content">
                            <h2>{{card.title}}  </h2>
                            <p v-html="card.content">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="paginate">
                <div class="btn-group">
                    <button @click="prevPage" :disabled="pageNumber == 0" class=" btn-sm btn-primary" :class="{disable: pageNumber == 0}">Prev</button>
                    <button @click="nextPage" :disabled="pageNumber >= pageCount-1" class=" btn-sm btn-primary" :class="{disable: pageNumber >= pageCount-1}">Next</button>
                </div>

                <div class="paginateNum">
                    <span v-for="(n,i) in pageCount" :key="i" :class="{active: i == pageNumber}">{{n}}</span>
                </div>
                <div>&nbsp;</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted, computed, watch } from 'vue';
    export default {
        setup() {
            const pageNumber = ref(0);
            const size = 5;
            const swiper = ref(null);

            const places = [
                {
                    images : [
                            require('@/assets/images/destination/pyay/bawbawgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/bawbawgyi/1.jpg'),
                        ],
                    title: `ဘောဘောကြီးစေတီတော်`,
                    status: 0,
                    content: `ဘောဘောကြီးစေတီတော်သည် သရေခေတ္တရာမြို့ဟောင်း၏ အနောက်တောင်ဖက်တွင်တည်ရှိပြီး ဒွတ္တပေါင်မင်းကြီးတည်ထားကိုးကွယ်ခဲ့သော စေတီတော်ကိုးဆူအနက်မှ တစ်ဆူဖြစ်ပါသည်။ အေဒီ ၆-၇ ရာစုတွင်တည်ထားခဲ့ပြီး ဘုရားရှင်၏ ဓာတ်တော်မွေတော်များဌာပနာထားသည်။ စေတီတော်၏ ဉာဏ်တော် (၄၆.၆၃၄)မီတာရှိပြီး လုံးပတ်တော်သည်(၆၄.၈)မီတာရှိသည်။ စေတီတော်၏ ပုံသဏ္ဍာန်ပစ္စယံငါးဆင့်ခံ၍ ၎င်းပစ္စယံပေါ်တွင် ထုလုံးရှည်ပုံအုတ်စေတီတည်ထားခြင်းဖြစ်သည်။ စေတီတော်သည် အိန္ဒိယနိုင်ငံဆာရ်နတ် အရပ်ရှိ အနတ္တလက္ခသုတ်တော်ဟောတော်မူရာ အထိမ်းအမှတ်စေတီဖြစ်သော ဓမ္မေခစေတီနှင့်ဆင်တူသည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/pagoda-mar/2.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/3.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/2.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/3.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/2.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/3.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/2.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/3.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/2.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/3.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/2.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/3.jpg'),
                            require('@/assets/images/destination/pyay/pagoda-mar/2.jpg'),
                        ],
                    title: `ဘုရားမာစေတီတော်`,
                    status: 1,
                    content: `ဘုရားမာစေတီတော်သည် သရေခေတ္တရာမြို့ဟောင်း၏ အရှေ့မြောက်ဖက်တွင်တည်ရှိပြီး ဒွတ္တပေါင်                     မင်းကြီးတည်ထားကိုးကွယ်ခဲ့သော စေတီတော်ကိုးဆူအနက်မှတစ်ဆူဖြစ်ပါသည်။ အေဒီ ၆-၇ ရာစုတွင် တည်ထားခဲ့ပြီး ဘုရားရှင်၏   လက်သည်းတော်ခြေသည်းတော်ညှပ်ရိုးတော်တို့ကို ဌာပနာထားသည်။ စေတီတော်၏ ဉာဏ်တော်(၄၂၆၂)မီတာ၊ လုံးပတ်တော်သည်(၉၅.၉၈)မီတာရှိပြီး စေတီတော်သည် ပစ္စယံသုံးဆင့်ပါရှိပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/belbelgu/1.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/2.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/1.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/2.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/1.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/2.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/1.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/2.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/1.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/2.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/1.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/2.jpg'),
                            require('@/assets/images/destination/pyay/belbelgu/1.jpg'),
                        ],
                    title: `ဘဲဘဲဂူဘုရား`,
                    status: 2,
                    content: `ဘဲဘဲဂူဘုရားသည် သရေခေတ္တရာမြို့ဟောင်းအတွင်းတွင်တည်ရှိပြီး ဂူဘုရားတစ်ဆူဖြစ်ပြီး ရှေးဟောင်းဘုရားတဆူဖြစ်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/shwesantaw/1.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/2.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/3.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/1.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/2.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/3.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/1.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/2.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/3.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/1.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/2.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/3.jpg'),
                            require('@/assets/images/destination/pyay/shwesantaw/1.jpg'),
                        ],
                    title: `ရွှေဆံတော်ဘုရား `,
                    status: 3,
                    content: ` 
                        လေးဆူဓာတ်ပျော် ရွှေဆံတော်စေတီတော်မြတ်ကြီးသည် မြတ်စွာဘုရားသက်တော်ထင်ရှားရှိစဉ် ကပင် တည်ထားကိုးကွယ်ခဲ့သော စေတီတော်မြတ်ကြီးဖြစ်သည်။ ပဲခူးတိုင်းဒေသကြီး၊ ပြည်မြို့၏ အရှေ့ပိုင်း ဆင်စုရပ်မြောက်ဖက်၊ ဆံတော်ရပ်၌ “သုဒဿန”မည်သော တောင်ကုန်းငယ်တွင် တည်ရှိသည့် ရွှေဆံတော် ဘုရားကို မြသိတင် (မြသီးတင်) ဘုရားဟုလည်း ရှေးကခေါ်တွင်ခဲ့သည်။ ရွှေဆံတော်၏ ဉာဏ်တော်မှာ ထီးတော်မှ ဖိနပ်တော်(တတိယပစ္စယံ)အထိ (၁၂၇)ပေ၊ (၈၅ တောင်)၊ လုံးပတ်တော် (၈၈)ပေ (၈)လက်မ၊ ဖိနပ်တော်(၂၉၄)ပေ အသီးအသီးရှိလေသည်။ အတွင်းအောင်မြေကိုးဌာန အပြင်အောင်မြေကိုးဌာနရှိပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/selhtatgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/1.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/2.jpg'),
                            require('@/assets/images/destination/pyay/selhtatgyi/1.jpg'),
                        ],
                    title: `ဆယ်ထပ်ကြီးဘုရား`,
                    status: 4,
                    content: ` 
                        ဒွတ္တဘောင်မင်းကြီးသည် ရွှေဆံတော်စေတီတော်မြတ်ကြီးအား ဖူးမြော်ရန်လာသောအခါ ရွှေဆံတော် စေတီတော်မြတ်ကြီး၏ အရှေ့ဖက်ရှိ ဇေယျပထဝီအောင်မြေကုန်းတွင် မင်းကြီး၏စီးတော်ဆင်နှင့် မြင်းတို့ကို ချည်နှောင်ထားလေ့ရှိသည်။ မင်းကြီးနတ်ရွာစံသောအခါ သားတော်ရဟန္တာ အရှင်စန္ဒာသိရီနှင့် အရှင်စန္ဒာဂရာဇာတို့ သီရိလင်္ကာနိုင်ငံမှ ပင့်ဆောင်လာသော ဓာတ်တော်နှင့် မင်းမိဖုရား၏ လက်ဝတ်တန်ဆာ တို့ကိုဌာပနာပြီး ရဟန္တာအရှင်မြတ်နှစ်ပါးနှင့် ပန်ထွာမိဖုရားတို့ကြီးကြပ်ကာ ဆင်ချည်တိုင်နှင့် မြင်းချည်တိုင် ညီနောင်စေတီနှစ်ဆူကို တည်ထားတော်မူခဲ့သည်။ နှစ်ကာလကြာပျက်စီးလာသဖြင့် ဆရာတော် ဘဒ္ဒန္တတေဇဝန္တ ဦးဆောင်ပြီး ဆင်ချည်တိုင်နှင့် မြင်းချည်တိုင်စေတော်နေရာတွင် ဆယ်ထပ်ကြီးဘုရားကို တည်ထားကိုးကွယ်ခဲ့ပါသည်။
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/pyu/1.jpg'),
                            require('@/assets/images/destination/pyay/pyu/2.jpg'),
                            require('@/assets/images/destination/pyay/pyu/3.jpg'),
                            require('@/assets/images/destination/pyay/pyu/4.jpg'),
                            require('@/assets/images/destination/pyay/pyu/5.jpg'),
                            require('@/assets/images/destination/pyay/pyu/6.jpg'),
                            require('@/assets/images/destination/pyay/pyu/7.jpg'),
                            require('@/assets/images/destination/pyay/pyu/8.jpg'),
                            require('@/assets/images/destination/pyay/pyu/9.jpg'),
                            require('@/assets/images/destination/pyay/pyu/10.jpg'),
                            require('@/assets/images/destination/pyay/pyu/11.jpg'),
                            require('@/assets/images/destination/pyay/pyu/12.jpg'),
                            require('@/assets/images/destination/pyay/pyu/13.jpg'),
                        ],
                    title: `ပျူမြို့ဟောင်း`,
                    status: 5,
                    content: ` 
                        ရှေးဟောင်းရာဇဝင်မှတ်တမ်းများအရ မြို့ရိုးကာရံထားသည့် ပျူမြို့ဟောင်း (၁၀)မြို့ရှိခဲ့သည်ဟု ဆိုပါသည်။ သို့ရာတွင် ရှေးဟောင်းသုတေသနဌာန၏ လေ့လာတွေ့ရှိချက်အရ အထက်မြန်မာပြည်တွင် မြို့ရိုးကာရံထားသည့် ပျူမြို့ဟောင်း (၆)မြို့တွေ့ရှိခဲ့ပါသည်။ ယင်းတို့အနက် ဟန်လင်း၊ သရေခေတ္တရာ၊ ဗိဿနိုးတို့မှာ သမိုင်းတွင် အထူးခြားဆုံးနှင့် ထင်ရှားသော အထောက်အထားပြည့်စုံသည့် ပျူမြို့ဟောင်းများ ဖြစ်ပါသည်။  
                        <br><br>
                        ပြည်မြို့နယ်အတွင်း မှော်ဇာမြို့အနီးရှိ ပျုမြို့ဟောင်းနေရာ ပြည်ပေါက်ခေါင်းလမ်းမပေါ်တွင် တည်ရှိပါသည်။ ပျုမြို့ဟောင်း၏ ဂူဘုရားများအတွင်း အုတ်ခွက်ဘုရားများ၊ ဂူဘုရားများ၊ ရဟန္တာဂူများနှင့် နန်းတော်မြို့ရိုးဟောင်းလက်ရာများကို လေ့လာနိုင်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/phoeoo/1.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/2.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/1.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/2.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/1.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/2.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/1.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/2.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/1.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/2.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/1.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/2.jpg'),
                            require('@/assets/images/destination/pyay/phoeoo/1.jpg'),
                        ],
                    title: `ဖိုးဦးတောင်စေတီတော်မြတ်ကြီး `,
                    status: 6,
                    content: ` 
                        ဖိုးဦးတောင်စေတီတော်မြတ်ကြီးသည် ပြည်ခရိုင်အတွင်း ပြည်မြို့၏တစ်ဖက်ကမ်းမြောက်ဖက်တွင် တည်ရှိပြီး တောင်၏အမြင့်မှာ ပင်လယ်ရေမျက်နှာပြင်အထက် ပေပေါင်း(၉၀၀)ကျော်တွင် တည်ရှိပါသည်။ ဧရာဝတီမြစ်၏ အနောက်ဖက်ကမ်းနဖူးပေါ်တွင် တည်ရှိပါသည်။ ဖိုးဦးတောင်သည် ပုဂံခေတ် နောက်ပိုင်းလက်ရာ ဖြစ်သည်ဟုယူဆကြပြီး   ဆင်ဖြူရှင်မင်းမှ သက္ကရာဇ်(၁၁၃၇)တွင် မူလစေတီတော်ကို ငုံ၍ စေတီတော်တစ်ဆူ တည်ထားကိုးကွယ်ခဲ့သည်ဟု ကျောက်စာများတွင်ပါရှိပါသည်။  
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/akouttoung/1.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/2.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/3.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/4.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/5.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/1.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/2.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/3.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/4.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/5.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/1.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/2.jpg'),
                            require('@/assets/images/destination/pyay/akouttoung/3.jpg'),
                        ],
                    title: `အကောက်တောင် `,
                    status: 7,
                    content: ` 
                        အကောက်တောင်သည် ပဲခူးတိုင်းဒေသကြီး၊ ပြည်ခရိုင်၊ ပန်းတောင်းမြို့နယ်၊ ထုံးဘိုမြို့အဆုံးနှင့် ဧရာဝတီတိုင်းဒေသကြီး၊ ဟင်္သာတခရိုင်၊ ကြံခင်းမြို့နယ်၊ သောကြာဒူးကျေးရွာအုပ်စု၌ တည်ရှိသည်။ ဧရာဝတီ မြစ်ကမ်းပါးယံရှိ ကျောက်သားနံရံများတွင် ရေးထွင်းထားသော ရှေးဟောင်းဘုရားဆင်းတုများ အမြောက် အမြားရှိသည့်အတွက် အနယ်နယ်အရပ်ရပ်မှ ဘုရားဖူးဧည့်သည်များသာမက နိုင်ငံခြားသားခရီးသွားများ လည်း လာရောက်လည်ပတ်ဖူးမြော်ကြသည်။ ရှေးအခါက ဤနေရာသည် လှေသင်္ဘောများကို အခွန်ကောက် ယူရာ နေရာဖြစ်ခဲ့သည်။ လှေဖြင့်ပါလာကြသော ကျောက်ဆစ်ပညာရှင်များက ကျောက်တောင်ကမ်းပါးယံ ကြီးများကိုထွင်းထု၍ နှောင်းလူတို့ပူဇော်နိုင်ရန် မိမိတို့တတ်မြောက်ထားသည့်ပညာဖြင့် လုပ်အားဒါနပြုခဲ့ ကြခြင်းဖြစ်သည်။ အကောက်တောင်တွင် ဗုဒ္ဓဆင်းတုတော်ပေါင်း(၃၇ဝ)ခန့် ဖူးမြော်တွေ့ရှိနိုင်ပြီး ဆင်းတု တော်အားလုံးသည် ကျောက်သားနံရံပေါ်တွင် ထွင်းထုထားသော ကျောက်ဆစ်လက်ရာများဖြစ်ပြီး ထိုင်တော်မူ ဆင်းတုတော်(၂၄၆)ဆူ၊ ရပ်တော်မူဆင်းတု(၁ဝ၉)ဆူနှင့် လျောင်းတော်မူဆင်းတုတော် (၁၅)ဆူခန့်ရှိသည်။ ရုပ်ပွားတော်များ၏ လက်ရာများမှာ ကုန်းဘောင်ခေတ်လက်ရာများဖြစ်ပြီး အင်းဝခေတ် လက်ရာအချို့လည်း ပါဝင်သည်ဟု သုတေသီများက ခန့်မှန်းကြသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                            require('@/assets/images/destination/pyay/bayargyi/1.jpg'),
                        ],
                    title: `ဘုရားကြီးစေတီတော် `,
                    status: 8,
                    content: ` 
                        ဘုရားကြီးစေတီတော်သည် သရေခေတ္တရာမြို့ဟောင်း၏ အနောက်မြောက်ဖက်တွင်တည်ရှိပြီး ဒွတ္တပေါင်မင်းကြီး တည်ထားကိုးကွယ်ခဲ့သော စေတီတော်ကိုးဆူအနက်မှ တစ်ဆူဖြစ်ပါသည်။ အေဒီ ၆-၇ ရာစုတွင်တည်ထားခဲ့ပြီး ဘုရားရှင်၏ဓာတ်တော်များ ဌာပနာထားပါသည်။ စေတီတော်၏ ဉာဏ်တော်မှာ (၁၃၉)ပေရှိပြီး လုံးပတ်တော်သည်(၃၀၇)ပေရှိပါသည်။ စေတီတော်သည် ပစ္စယံသုံးဆင့်နှင့် အဝိုင်းပုံပစ္စယံ တစ်ဆင့်ပါရှိပါသည်။ စေတီတော်သည် ယခုခေတ်မြန်မာစေတီတော်များ၏ ပုံစံသို့စတင်ပြောင်းလဲလာသော အဆောက်အဦပုံစံဖြစ်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/tonepanhla/1.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/2.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/3.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/1.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/2.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/3.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/1.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/2.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/3.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/1.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/2.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/3.jpg'),
                            require('@/assets/images/destination/pyay/tonepanhla/1.jpg'),
                        ],
                    title: `သုံးပန်လှမင်းသမီးအုတ်ကျောင်း `,
                    status: 9,
                    content: ` 
                        ပြည်မြို့နယ်၊ မှော်ဇာမြို့၊ မြို့ဟောင်းအနီး သုံးပန်လှမင်းသမီး လက်သည်းရေကန်နှင့် အုတ်ကျောင်း တည်ရှိပါသည်။ သုံးပန်လှမင်းသမီးနတ်ကွန်းသည် ပုဂံမြို့ဟောင်းထက် အေဒီ၂ရာစုလောက်ရှေးပိုကြသည်။ သုံးပန်လှမင်းသမီးသည် တောင်ညိုမင်း၏နှမတော်ဖြစ်ပြီး နှစ်ပြည်ထောင်ချစ်ကြည်ရေးအတွက် ဒွတ္တပေါင် မင်းကြီးထံဆက်သလိုက်ရာ ဘုရင့်လူယုံတော်များက မမှန်သတင်းလျှောက်တင်သဖြင့် မင်းသမီးကို နန်းတော်ထဲဝင်ခွင့်မပြုဘဲ မောင်းထုတ်ခဲ့သည်။ မင်းသမီးသည် အရှက်ကြီးရှက်ခဲ့ရသည့်အတွက် လက်သည်းနဲ့တူးရာကနေ ရေကန်ဖြစ်ပြီး ယနေ့တိုင်လက်သည်းရေကန်အဖြစ် တည်ရှိပါသည်။ မင်းသမီး နာကျည်းဝမ်းနည်းစိတ် ရှက်စိတ်ဖြင့် ခရီးတထောက်နားရာ တောတွင်းမှာပင် သေဆုံးခဲ့ရသည်။ ဒွတ္တဘောင်မင်းကြီး သိရှိလိုက်သွားခဲ့ချိန်မှာ အလောင်းတော်ကိုဂူဗိမ္မာန်တည်ပြီး စောင့်ရှောက်ထားရာ ကိုယ်ကြီးမြုတ်ရွာဟု ခေါ်တွင်ခဲ့ကြပါသည်။ မင်းသမီး၏ လက်သည်းရေကန်အနီးမှာ ကျောင်းတိုက် တည်ထားကိုးကွယ်ပြီး လက်သည်းရေကန်ကျောင်းတိုက်ဟု ခေါ်တွင်ခဲ့ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/shwebontar/1.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/2.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/3.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/4.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/5.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/6.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/7.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/8.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/9.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/1.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/2.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/3.jpg'),
                            require('@/assets/images/destination/pyay/shwebontar/4.jpg'),
                        ],
                    title: `ရွှေဘုံသာမုနိ `,
                    status: 10,
                    content: ` 
                        ပြည်မြို့၏တစ်ဖက်ကမ်း ပန်းတောင်းမြို့နယ် ဧရာဝတီမြစ်ကမ်းပေါ်တွင် တည်ရှိပါသည်။ ရွှေဘုံသာမုနိသည် ရခိုင်ဘုရင် စန္ဒာသူရိယ၏ မုနိလေးဆူမှ တစ်ဆူအပါအဝင်ဖြစ်ပါသည်။ ဘုရားရှင်၏ ရင်ငွေ့တော်လှုံခဲ့သောဘုရားများဖြစ်၍ တန်ခိုးအလွန်ကြီးပြီး ဆုတောင်းအလွန်ပြည့်သော ဘုရားများဖြစ်ကြ သည်။ ယခုအခါ မုနိလေးဆူဝင် ရုပ်ပွားတော်မြတ်များဖြစ်ကြသော မဟာမုနိရုပ်ရှင်တော်မြတ်ကြီးသည် မန္တလေးမြို့၌လည်းကောင်း၊ ရှင်ကျော်မုနိသည် ကျောက်တော်မြို့၌လည်းကောင်း၊ ရွှေဘုံသာမုနိသည် ဆင်တဲဘက်ကမ်း၊ ဧရာဝတီမြစ်ကမ်းနဖူးရှိ ပြည်ခရိုင်၊ ပန်းတောင်မြို့နယ်ရှိ ရွှေဘုံသာစေတီတော်မြတ်ကြီး၏ ဌာပနာတိုက်အတွင်း၌လည်းကောင်း၊ မာန်အောင်မြင်မုနိသည် ဇလွန်ပြည်တော်ပြန်ဘုရားအဖြစ် ဇလွန်မြို့၌ လည်းကောင်း အသီးသီးကိန်းဝပ်စံပယ်တော်မူလျက်ရှိသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/pyay/shwenattaung/1.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/2.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/3.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/4.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/5.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/6.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/7.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/8.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/9.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/1.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/2.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/3.jpg'),
                            require('@/assets/images/destination/pyay/shwenattaung/4.jpg'),
                        ],
                    title: `ရွှေနတ်တောင်စေတီတော် `,
                    status: 11,
                    content: ` 
                        ရွှေနတ်တောင်စေတီတော်သည် ပြည်မြို့အနီး ရွှေတောင်မြို့အထွက်တွင် တည်ထားကိုးကွယ်ထား သောစေတီဖြစ်သည်။ ရွှေနတ်တောင်စေတီကို မူလဘုရားရှင်လက်ထက်တော်ကပင် နိဂုံးသားတို့သည် ရုပ်ပွားတော်ကို အင်္ဂတေအုတ်ရိုးတို့ဖြင့် တည်ထားခဲ့ကြသည်။ စေတီတော်တည်ရာနေ့တွင် လူတို့ကတစ်ရစ် တည်၍ နတ်တို့ကတစ်ရစ်တည်သည်ဟု အဆိုရှိကြသည်။ ထိုကြောင့်သမိုင်းရင်း၌ "လူနတ်နှစ်လီ တစ်ရစ်စီ စေတီရွှေနတ်တောင်" ဟုဆိုသည်။ ရွှေနတ်တောင်စေတီကို ဒွတ္တပေါင်မင်းလက်ထက်တွင် ဗိဿနိုးနှင့် စန္ဒာဒေဝီတို့က ဘုရားရှင်၏ဓာတ်တော်ပေါင်း (၁၈၂)ဆူကို ရတနာကြုတ်ဖြင့်ဌာပနာ၍ အုတ်ရိုးစေတီ (၁၅)တောင် အမြင့်တည်ထားခဲ့သည်။ မင်းအဆက်ဆက်ပြုပြင်ခဲ့ရမှာ ယခုအခါ ထီးတော်အပါ အတောင်(၈၀) အမြင့်ရှိသည်။ အရံစေတီ(၁၇)ဆူနှင့် ခေါင်းလောင်းပေါင်း(၂၁)လုံးရှိပြီး ကျောက်စာတိုင် စိုက်ထူးထားသည်။ 
                    `,
                },
            ];

            const nextPage = () => {
                pageNumber.value++;
            }

            const prevPage = () => {
                pageNumber.value--;
            }

            const pageCount = computed(() => {
                let l = places.length
                let s = size;
                return Math.ceil(l/s);
            })

            const paginatedData = computed(() => {
                let start = pageNumber.value * size;
                let end = start + size;

                return places.slice(start, end);
            })

            onMounted(() => {
                swiper.value = new Swiper('.place-swiper', {
                    speed: 600,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'bullets',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        1200: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        }
                    }
                });
                
            });

            return { swiper, paginatedData, nextPage, prevPage, pageCount, pageNumber };
        },
    };
</script>