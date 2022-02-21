<template>
  <div id="photos">
    <Title :titles="{ title : 'PHOTOS' }"></Title>
    <div id="photosContent">
      <!-- <Album :weekPhotos="albums.thePhotos" v-for="album in albums" :key="album.albumID"></Album> -->
      <Album :weekPhotos="thePhotos"></Album>
    </div>
  </div>
  
</template>

<script>
import Title from '../components/title.vue'
import Album from '../components/Album.vue'

export default {
    components : { Title, Album },
    data() {
      return {
        titleDate: null,
        myDate: new Date(2021, 10, 28),
        thePhotos:[
              { id: 0, match: 'A隊 vs B隊' },
              { id: 1, match: 'A隊 vs B隊' },
              { id: 2, match: 'A隊 vs B隊' },
              { id: 3, match: 'A隊 vs B隊' },
              { id: 4, match: 'A隊 vs B隊' },
              { id: 5, match: 'A隊 vs B隊' }
            ],
        albums: [
          {
            albumID : 0,
            thePhotos:[
              { id: 0, match: 'A隊 vs B隊' },
              { id: 1, match: 'A隊 vs B隊' },
              { id: 2, match: 'A隊 vs B隊' },
              { id: 3, match: 'A隊 vs B隊' },
              { id: 4, match: 'A隊 vs B隊' },
              { id: 5, match: 'A隊 vs B隊' }
            ]
          },
          {
            albumID : 1,
            thePhotos:[
              { id: 0, match: 'A隊 vs B隊' },
              { id: 1, match: 'A隊 vs B隊' },
              { id: 2, match: 'A隊 vs B隊' },
              { id: 3, match: 'A隊 vs B隊' },
              { id: 4, match: 'A隊 vs B隊' },
              { id: 5, match: 'A隊 vs B隊' }
            ]
          },
          {
            albumID : 2,
            thePhotos:[
              { id: 0, match: 'A隊 vs B隊' },
              { id: 1, match: 'A隊 vs B隊' },
              { id: 2, match: 'A隊 vs B隊' },
              { id: 3, match: 'A隊 vs B隊' },
              { id: 4, match: 'A隊 vs B隊' },
              { id: 5, match: 'A隊 vs B隊' }
            ]
          },
          {
            albumID : 3,
            thePhotos:[
              { id: 0, match: 'A隊 vs B隊' },
              { id: 1, match: 'A隊 vs B隊' },
              { id: 2, match: 'A隊 vs B隊' },
              { id: 3, match: 'A隊 vs B隊' },
              { id: 4, match: 'A隊 vs B隊' },
              { id: 5, match: 'A隊 vs B隊' }
            ]
          },
        ]
      }
    },
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

#photosContent {
  position: sticky;
  top: 160px;
}
</style>