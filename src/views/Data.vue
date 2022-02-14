<template>
  <div class="data">
    <div id="title">
      <h1>statistic</h1>
    </div>
    <div class="space"></div>
    <ranking1 /> 
  </div>

</template>

<script>
import ranking1 from '../components/ranking1.vue'
export default {
  components:{ranking1},
  setup(){

  }

}
</script>

<style>
.data{
  width: 100%;
  height: 1000px;
  background-color: #2c2c2c;
  color: white;
  /*text-align: center;*/
}
#title {
    height: 75px;
    background: linear-gradient( 269.04deg,rgba(159,137,80,0.495) 57.82%, rgba(89,81,61,0) 85.4%) ;
    text-transform: uppercase;
    display: flex;
    font:bold 28px 'Bai Jamjuree';
    letter-spacing: 0.4em;
}

#title h1{
  margin-left:3%;
}

.space{
  height:50px;
  width: 100%;
}

</style>