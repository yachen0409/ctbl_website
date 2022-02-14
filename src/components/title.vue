<template>
  <div id="title">
    <div>
      <div class="row justify-content-end">

        <a id="logo" class="navbar-brand col-3 text-white fw-bold" href="">
          {{ titles.title }}
        </a>

        <div id="infoTimer" class="col text-white">
          <div class="row align-items-center">
            <div id="infoLeft" role="button" @click="minusMonth"></div>
            <span id="infoTime" class="col-2">{{ myYear }} {{ months[myMonth] }}</span>
            <div id="infoRight" role="button" @click="addMonth"></div>
          </div>
            
        </div>
        
        <div id="btns" class="col-md-5 me-5 align-self-center">
          <div class="row justify-content-end">
            <router-link to="/info/news" id="newsBtn" tag="button" 
            @mouseover="newsBorder = true" @mouseleave="newsBorder = false"
            :class="{hoverBorder: newsBorder}"
            class="nav-link text-white col col-xxl-2">賽事報導</router-link>

            <router-link to="/info/photos" id="photosBtn" tag="button" 
            @mouseover="photosBorder = true" @mouseleave="photosBorder = false"
            :class="{hoverBorder: photosBorder}"
            class="nav-link text-white col col-xxl-2">照片回顧</router-link>

            <router-link to="/info/videos" id="videosBtn" tag="button" 
            @mouseover="videosBorder = true" @mouseleave="videosBorder = false"
            :class="{hoverBorder: videosBorder}"
            class="nav-link text-white col col-xxl-2">影音紀錄</router-link>
          </div>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>


export default {
  props: ['titles'],
  data() {
    return {
      newsBorder: false,
      photosBorder: false,
      videosBorder: false,
      myDate: new Date(2021, 10),
      myYear: 2021,
      myMonth: 10,
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    }
  },
  methods: {
    minusMonth() {
      if (this.myDate.getTime() > 1635696000000) {
        this.myDate.setMonth(this.myDate.getMonth() - 1)
        this.myYear = this.myDate.getFullYear()
        this.myMonth = this.myDate.getMonth()
      }
    },
    addMonth() {
      this.myDate.setMonth(this.myDate.getMonth() + 1);
      this.myYear = this.myDate.getFullYear()
      this.myMonth = this.myDate.getMonth()
    }
  },
}
</script>

<style scoped>
.hoverBorder {
  border: 1px dotted white;
  border-radius: 5px;
}
.router-link-active {
  border: 1px solid white;
  border-radius: 5px;
}

#title {
  position: sticky;
  top: 80px;
  align-items: center;
  background: linear-gradient(271.52deg, rgba(159, 137, 80, 0.495) 2.22%, rgba(152, 131, 78, 0.440943) 18.74%, rgba(89, 81, 61, 0) 95.38%);
  padding: 6px 6px;
}

#logo {
  position: relative;
  /* top: 8px; */
  right: 2%;
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  align-items: center;
  letter-spacing: 0.15em;
}

#infoLeft {
  width: 15px;
  height: 15px;
  background: white;
  display: inline-block;
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
  padding: 0px 0px;
}

#infoRight {
  width: 15px;
  height: 15px;
  background: white;
  display: inline-block;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  padding: 0px 0px;
}

#infoTime {
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: bold;
  width: 172px;
  font-size: 24px;
  line-height: 31px;
  display: inline-block;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15em;
}

#infoTimer {
  display: flex;
  position: relative;
  /* top: 12px; */
  right: 7%;
}

#newsBtn {
  font-family: Bai Jamjuree;
  font-weight: bold;
  font-size: 16px;
}

#photosBtn {
  font-family: Bai Jamjuree;
  font-weight: bold;
  font-size: 16px;
}

#videosBtn {
  font-family: Bai Jamjuree;
  font-weight: bold;
  font-size: 16px;
}

</style>