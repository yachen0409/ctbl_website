<template>
  <div class="ranking-table">
    <table>
      <thead>
        <tr><th colspan="2">隊伍</th>
        <th colspan="1">已賽</th>
        <th colspan="1">勝場</th>
        <th colspan="1">敗場</th>
        <th colspan="1">勝率</th>
        <th colspan="1">勝差</th></tr>
      </thead>
      <tbody>
        <tr v-for="content in contents" :key="content.id">
          <td>{{ content.rank }}</td>
          <td>{{ content.team }}</td>
          <td>{{ content.played }}</td>
          <td>{{ content.win }}</td>
          <td>{{ content.lose }}</td>
          <td>{{ content.percent }}</td>
          <td>{{ content.shencha }}</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const contents = reactive([
      {id: 1, rank: 1,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 2, rank: 2,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 3, rank: 3,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 4, rank: 4,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 5, rank: 5,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 6, rank: 6,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 7, rank: 7,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 8, rank: 8,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 9, rank: 9,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 10, rank: 10,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 11, rank: 11,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 12, rank: 12,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 13, rank: 13,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 14, rank: 14,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 15, rank: 15,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"},
      {id: 16, rank: 16,team:"資工" ,played:"5",win:"5",lose:"5",percent:"5",shencha:"5"}
    ])
    return { contents }
  }
}
</script>

<style>
.ranking-table {
  position: fixed;
  top: 350px;
  width: 80%;
  height: 540px;
  margin: 0 10%;
  border-radius: 20px;
  background-color: #373737;
  overflow-y: scroll; 
}
.ranking-table::-webkit-scrollbar{
  display: none;
}
.ranking-table table{
  width: 100%;
}

.ranking-table table thead {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid white;
  font :bold 22px 'Bai Jamjuree';
  position:relative;
}

.ranking-table table thead th {
  text-align: center;
  position: sticky;
  background-color: #373737;
  

  top: 0px;
}

.ranking-table table tbody {
  width: 100%;
  height: 480px;
  /* overflow-y: auto; */
}
.ranking-table table tbody tr {
  width: 100%;
  height: 80px;
  text-align: center;
  border-bottom: 1px solid white;
}
.ranking-table table tbody tr:last-child {
  border: none;
}
.ranking-table table tbody td {
  font: bold 22px "Bai Jamjuree";
  width: 35%; 
}
.ranking-table table tbody td:first-child {
  width: 2%;
}
.ranking-table table tbody td:nth-child(2) {
  width: 3%;
}
.ranking-table table tbody td:nth-child(n+3){
  width: 5%;
  color: #ffffff;
}




</style>