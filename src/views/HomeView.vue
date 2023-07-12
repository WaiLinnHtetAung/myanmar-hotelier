<template>
  <div class="home">
    <Carousel></Carousel>
    <Information></Information>
    <AboutMHA></AboutMHA>
    <MainPageVisionMission></MainPageVisionMission>
  </div>
</template>

<script>
import MainPageVisionMission from '../components/MainPageVisionMission'
import AboutMHA from '../components/AboutMHA'
import Information from '../components/Information'
import Carousel from '../components/Carousel'
// @ is an alias to /src

export default {
  components: {
    MainPageVisionMission,
    AboutMHA,
    Information, Carousel },
  
}
</script>
