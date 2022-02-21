<template>
  <div class="schedule">
    <div id="title">
      <h1>schedule</h1>
    </div>
    <Selection />
    <Table />
  </div>
</template>

<script>
import Selection from '../components/schedule/ScheduleSelection.vue'
import Table from '../components/schedule/ScheduleTable.vue'
export default {
  components: { Selection, Table },
  setup(){
  }
}
</script>

<style scoped>
.schedule {
  width: 100%;
  height: 100vh;
  background-color: #2c2c2c;
  color: white; 
}
#title {
  position: fixed;
  top: 100px;
  width: 100%;
  height: 75px;
  background: linear-gradient(269.04deg, rgba(159, 137, 80, 0.495) 57.82%, rgba(89, 81, 61, 0) 85.4%);
  text-transform: uppercase;
  padding-left: 5%;
  display: flex;
  align-items: flex-end;
  font: bold 0.6em 'Bai Jamjuree';
  letter-spacing: 0.6em; 
}
</style>