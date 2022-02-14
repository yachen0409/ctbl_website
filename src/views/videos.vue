<template>
  <div id="videos">
    <Title :titles="{ title : 'VIDEOS' }"></Title>
    <div id="videosContent">
      <h1>This is videos page</h1>
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
#videos {
  width: 100%;
  height: 1000px;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}

#videosContent {
  position: sticky;
  top: 160px;
}
</style>