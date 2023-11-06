<template>
    <div class="destinations">
        <div v-if="destinationName === 'Yangon'"><Yangon></Yangon></div>
        <div v-if="destinationName === 'Pyay'"><Pyay></Pyay></div>
    </div>
</template>

<script>
    import Pyay from '../../components/destination/Pyay'
import Yangon from '../../components/destination/Yangon'
export default {
  components: {
    Pyay, Yangon },
        props: ['destinationName'],
    }
</script>

<style scoped>

    
</style>
