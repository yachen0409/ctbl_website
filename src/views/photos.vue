<template>
  <div id="photos">
    <Title :titles="{ title : 'PHOTOS' }"></Title>
    <h1>This is photo page</h1>
  </div>
  
</template>

<script>
import Title from '../components/title.vue'

export default {
    components : { Title }
}
</script>

<style>
#photos {
  width: 100%;
  height: 100vh;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}
</style>