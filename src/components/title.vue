<template>
  <div id="iftitle">
    <div class="container-xxl">
      <div class="row justify-content-between">

        <a id="logo" class="navbar-brand col-2 text-white fw-bold" href="">
          {{ titles.title }}
        </a>
        
        <div class="col-xl-3 col-md-4 align-self-center">
          <div class="row">
            <router-link to="/info/news" id="newsBtn" tag="button" class="nav-link text-white col">賽事報導</router-link>
            <router-link to="/info/photos" id="photosBtn" tag="button" class="nav-link text-white col">照片回顧</router-link>
            <router-link to="/info/videos" id="videosBtn" tag="button" class="nav-link text-white col">影音紀錄</router-link>
          </div>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'

export default {
  props: ['titles'],
  setup(props) {
     const log = onMounted(() => {
      if (props.titles.title === 'PHOTOS') {
        let el = document.getElementById('photosBtn')
        el.style.border = '1px solid white'
        el.style.borderRadius = '5px'
      }else if (props.titles.title === 'NEWS') {
        let el = document.getElementById('newsBtn')
        el.style.border = '1px solid white'
        el.style.borderRadius = '5px'
      }else {
        let el = document.getElementById('videosBtn')
        el.style.border = '1px solid white'
        el.style.borderRadius = '5px'
      }
    })
    return { log }
  }
}
</script>

<style scoped>

#iftitle {
  align-items: center;
  background: linear-gradient(271.52deg, rgba(159, 137, 80, 0.495) 2.22%, rgba(152, 131, 78, 0.440943) 18.74%, rgba(89, 81, 61, 0) 95.38%);
  padding: 6px 6px;
}

#logo {
  position: relative;
  top: 8px;
}

.navbar-brand {
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  align-items: center;
  letter-spacing: 0.15em;
}
</style>