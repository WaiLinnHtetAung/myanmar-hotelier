<template>
  <div class="home">
    <Carousel></Carousel>
    <Information></Information>
    <AboutMHA></AboutMHA>
    <MainPageVisionMission></MainPageVisionMission>
    <LatestNews></LatestNews>
    <AdsPromotion></AdsPromotion>
  </div>
</template>

<script>
import AdsPromotion from '../components/AdsPromotion'
import LatestNews from '../components/LatestNews'
import MainPageVisionMission from '../components/MainPageVisionMission'
import AboutMHA from '../components/AboutMHA'
import Information from '../components/Information'
import Carousel from '../components/Carousel'
// @ is an alias to /src

export default {
  components: {
    AdsPromotion,
    LatestNews,
    MainPageVisionMission,
    AboutMHA,
    Information, Carousel },
  
}
</script>

<style scoped>
  .home {
    overflow-x: hidden;
  }
</style>
