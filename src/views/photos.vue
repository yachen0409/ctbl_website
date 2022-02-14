<template>
  <div id="photos">
    <Title :titles="{ title : 'PHOTOS' }"></Title>
    <div id="photosContent">
      <h1>This is photo page</h1>
    </div>
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
  height: 1000px;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}

#photosContent {
  position: sticky;
  top: 160px;
}
</style>