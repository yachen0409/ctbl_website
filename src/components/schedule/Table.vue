<template>
  <div class="schedule-table">
    <table>
      <tr v-for="content in contents" :key="content.id">
        <td>
          <p>{{ content.date }}</p>
          <p>({{ content.weekday }})</p>
        </td>
        <td>{{ content.team1 }}</td>
        <td>
          <p>{{ content.place }}</p>
          <p>{{ content.time }}</p>
        </td>
        <td>{{ content.team2 }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const contents = reactive([
      {id: 1, date: "12/19", weekday: "日", team1: "資工", place: "B場", time: "19:00", team2: "電研一"},
      {id: 2, date: "12/19", weekday: "日", team1: "資工", place: "B場", time: "19:00", team2: "電研一"},
      {id: 3, date: "12/19", weekday: "日", team1: "資工", place: "B場", time: "19:00", team2: "電研一"},
      {id: 4, date: "12/19", weekday: "日", team1: "資工", place: "B場", time: "19:00", team2: "電研一"},
      {id: 5, date: "12/19", weekday: "日", team1: "資工", place: "B場", time: "19:00", team2: "電研一"},
      {id: 6, date: "12/19", weekday: "日", team1: "資工", place: "B場", time: "19:00", team2: "電研一"},
      {id: 7, date: "12/19", weekday: "日", team1: "資工", place: "B場", time: "19:00", team2: "電研一"},
      {id: 8, date: "12/19", weekday: "日", team1: "資工", place: "B場", time: "19:00", team2: "電研一"}
    ])
    return { contents }
  }
}
</script>

<style>
.schedule-table {
  position: fixed;
  top: 40%;
  width: 80%;
  height: 400px;
  margin: 0 10%;
  border-radius: 20px;
  background-color: #373737;
  overflow-y: scroll;
}
.schedule-table::-webkit-scrollbar{
  display: none;
}
.schedule-table table {
  width: 100%;
  height: 100%;
}
.schedule-table table tr {
  width: 100%;
  height: 100px;
  text-align: center;
  border-bottom: 1px solid #aaaaaa;
}
.schedule-table table tr:last-child {
  border: none;
}
.schedule-table table td {
  font: bold 22px "Bai Jamjuree";
  width: 35%; 
}
.schedule-table table td:first-child {
  width: 15%;
  border-right: 2px solid white;
}
.schedule-table table td:nth-child(3n){
  width: 15%;
  color: #9f8950;
}
.schedule-table table td p {
  margin: 0;
}
</style>