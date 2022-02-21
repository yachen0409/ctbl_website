<template>
  <div id="app">
    <div v-if="isLoading" id="start">
      <!-- <video id="video-container" autoplay muted>
        <source src="./assets/start.mp4" type="video/mp4" />
      </video> -->
    </div>
    <div v-else>
      <div id="nav">      
        <router-link to="/"><img src="./assets/ctbl_logo.svg" alt="logo" /></router-link>
        <router-link to="/announcement">公告</router-link>
        <router-link to="/schedule">賽程</router-link>
        <router-link to="/score">比分</router-link>
        <router-link to="/data">數據</router-link>

        <router-link to="/info">消息</router-link>
        <router-link to="/teams">球隊</router-link>
        <router-link to="/about">關於</router-link>
        <div id="icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="far fa-envelope"></i></a>    
        </div>
      </div>    
      <router-view />
    </div>
  </div>  
</template>
<script>
import { ref, onMounted } from 'vue';
export default{
  setup() { 
    // const isLoading = ref(false)
    // onMounted(() => {
    //   isLoading.value = true
    //   setTimeout(() => {
    //     isLoading.value = false
    //   }, 4000)
    // })
    // return { isLoading }
  }
}
</script>

<style>
#app {
  height: 100vh;
  background-color: #000;
}
#start{
  width: 100%;
  height: 100%;
}
#start video {
  width: 100%;
  height: 100%;
}
#nav {
  width: 100%;
  height: 80px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
}
#nav a {
  text-decoration: none;
  font: bold 18px "Roboto";
  color: white;
  text-align: center;
  width: 75px;
  height: 75px;
  line-height: 80px;
  border-bottom: 5px solid #000;
}
#nav a:hover {
  border-bottom: 5px solid #9f8950;
}

#icons {
  width: 75px;
  display: inline-flex;
  justify-content: space-between;
}
#icons a:hover{
  border-bottom: 5px solid #000;
}
</style>
