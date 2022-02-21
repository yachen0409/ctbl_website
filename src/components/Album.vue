<template>
  <div>
      <span id="albumDate">{{ months[myMonth] }} {{ myDay }}</span>
      <div id="autoLayout">
          <!-- <div v-for="weekPhoto in weekPhotos" :key="weekPhoto.id">
              <div>{{ weekPhoto.matchMonth }}</div>
              <img :src="imgPaths[0]"  :alt="weekPhoto.match">
          </div> -->

          <div id="photoAlbums" v-for="weekPhoto in weekPhotos" :key="weekPhoto.id">
              <div>{{ weekPhoto.matchMonth }}</div>
              <img :src="imgPaths[0]"  :alt="weekPhoto.match">
          </div>
      </div>
  </div>
</template>

<script>

export default {
    props: ['weekPhotos'],
    data() {
        return {
            myDate: new Date(2021, 10, 28),
            myMonth: 10,
            myDay: 28,
            months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            // the imgPaths will get by the weekPhoto.date
            imgPaths: [
                require('@/assets/logo.png'),
                require('@/assets/logo.png'),
                require('@/assets/logo.png'),
                require('@/assets/logo.png'),
                require('@/assets/logo.png'),
                require('@/assets/logo.png'),
            ]
        }
    },
    
}
</script>

<style scoped>
#albumDate {
    font-family: Bai Jamjuree;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;
    margin: 10px 50px;
}

#autoLayout {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 0px 15px 0px;
    overflow-x: scroll;
    margin: 0px 20px;
    scrollbar-color: black;
}

img {
    width: 364px;
    height: 260px;
    border: 1px solid white;
    margin: 0px 10px;
}

#autoLayout::-webkit-scrollbar{
    display: none;
}
</style>