<template>
  <div id="app">
    <div v-if="isLoading" id="start">
      <video id="video-container" autoplay muted>
        <source src="./assets/start.mp4" type="video/mp4" />
      </video>
    </div>
    <div v-else>
      <div id="nav">
        <div id="home">
          <router-link to="/"><img src="./assets/logo.png" alt="logo" /></router-link>
        </div>      
        <router-link to="/announcement">公告</router-link>
        <router-link to="/schedule">賽程</router-link>
        <router-link to="/score">比分</router-link>
        <router-link to="/data">數據</router-link>
        <router-link to="/info/news">消息</router-link>
        <router-link to="/about">關於</router-link>
        <div id="icons">
            <a href="https://www.facebook.com/CTBL-%E4%BA%A4%E5%A4%A7%E7%B1%83%E7%90%83%E8%81%AF%E7%9B%9F-704812476380338/" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/2021ctbl/" target="_blank"><i class="fab fa-instagram"></i></a>
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
    const isLoading = ref(false)
    // onMounted(() => {
    //   isLoading.value = true
    //   setTimeout(() => {
    //     isLoading.value = false
    //   }, 4000)
    // })
    return { isLoading }
  }
}
</script>

<style scoped>
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
  display: inline-block;
  text-decoration: none;
  font: bold 18px "Roboto";
  color: white;
  text-align: center;
  width: 75px;
  height: 75px;
  line-height: 75px;
  border-bottom: 5px solid #000;
} 
#nav a:hover {
  border-bottom: 5px solid #9f8950;
}
#home img {
  width: 100px;
  height: 100px;
}
#home a:hover{
  border-bottom: 5px solid #000;
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