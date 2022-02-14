<template>
  <div id="videos">
    <Title :titles="{ title : 'VIDEOS' }"></Title>
    <h1>This is videos page</h1>
  </div>
</template>

<script>
import Title from '../components/title.vue'

export default {
  components : { Title }
}
</script>

<style>
#videos {
  width: 100%;
  height: 100vh;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}
</style>