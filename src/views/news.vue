<template>
  <div id="news">
    <Title :titles="{ title : 'NEWS' }"></Title>
    <h1>This is news page</h1>
  </div>
</template>

<script>
import Title from '../components/title.vue'

export default {
  components : { Title }
}
</script>

<style>
#news {
  width: 100%;
  height: 100vh;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}
</style>