<template>
  <div class="score">
    <div id="title">
      <h1>Score</h1> 
    </div>
    <Selection />
    <div id="table">
      <table>

      </table>
    </div>
  </div>
</template>

<script>
import Selection from './../components/schedule/Selection.vue'
export default {
  components: { Selection },
  setup() {

  }
}
</script>

<style>
.score {
  width: 100%;
  height: 1000px;
  background-color: #2c2c2c;
  color: white;
}
.table {
  
  background-color: #373737;
}
#title {
  height: 75px;
  background: linear-gradient(269.04deg, rgba(159, 137, 80, 0.495) 57.82%, rgba(89, 81, 61, 0) 85.4%);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font: bold 28px 'Bai Jamjuree';
  letter-spacing: 0.4em; 
}
#title h1 {
  margin-left: 3%;
}
</style>


