<template>
  <div class="home">
    <news></news>
    <events></events>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import news from '@/components/news.vue';
import events from '@/components/events.vue';

export default {
  name: 'LatestNew',
  components: {
    news,events
  }
}
</script>
<style>



</style>
