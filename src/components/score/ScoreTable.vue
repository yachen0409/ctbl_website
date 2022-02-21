<template>
  <div class="schedule-table">
    <table>
      <tr v-for="content in contents" :key="content.id">
        <td>{{ content.date }}</td>
        <td>{{ content.team1 }}</td>
        <td :class="content.one_win">{{ content.score1 }}</td>
        <td>{{ content.semi }}</td>
        <td :class="content.two_win">{{ content.score2 }}</td>
        <td>{{ content.team2 }}</td>
        <td>{{ content.arrow }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    var score = reactive([
     [101, 100],
     [101, 100],
     [100, 101],
     [101, 100],
     [101, 100],
     [100, 101],
     [100, 101],
     [101, 100],
    ]);
    
    const contents = reactive([
      { id: 1,
 	date: "12/19(日)",
	team1: "資工", 
	score1: score[0][0],
	one_win: score[0][0] > score[0][1] ? "win" : "lose",
	semi: ":", 
	score2: score[0][1],
	two_win: score[0][1] > score[0][0] ? "win" : "lose",
	team2: "電研一", 
	arrow: "➤"},
      { id: 2, 
	date: "12/19(日)", 
	team1: "資工", 
	score1: score[1][0], 
	one_win: score[1][0] > score[1][1] ? "win" : "lose",
	semi: ":", 
	score2: score[1][1], 
	two_win: score[1][1] > score[1][0] ? "win" : "lose",
	team2: "電研一", 
	arrow: "➤"},
      { id: 3, 
	date: "12/19(日)", 
	team1: "資工", 
	score1: score[2][0], 
	one_win: score[2][0] > score[2][1] ? "win" : "lose",
	semi: ":", 
	score2: score[2][1], 
	two_win: score[2][1] > score[2][0] ? "win" : "lose",
	team2: "電研一", 
	arrow: "➤"},
      { id: 4, 
	date: "12/19(日)", 
	team1: "資工", 
	score1: score[3][0], 
	one_win: score[3][0] > score[3][1] ? "win" : "lose",
	semi: ":", 
	score2: score[3][1], 
	two_win: score[3][1] > score[3][0] ? "win" : "lose",
	team2: "電研一", 
	arrow: "➤"},
      { id: 5, 
	date: "12/19(日)", 
	team1: "資工", 
	score1: score[4][0], 
	one_win: score[4][0] > score[4][1] ? "win" : "lose",
	semi: ":", 
	score2: score[4][1], 
	two_win: score[4][1] > score[4][0] ? "win" : "lose",
	team2: "電研一", 
	arrow: "➤"},
      { id: 6, 
	date: "12/19(日)", 
	team1: "資工", 
	score1: score[5][0], 
	one_win: score[5][0] > score[5][1] ? "win" : "lose",
	semi: ":", 
	score2: score[5][1], 
	two_win: score[5][1] > score[5][0] ? "win" : "lose",
	team2: "電研一", 
	arrow: "➤"},
      { id: 7, 
	date: "12/19(日)", 
	team1: "資工", 
	score1: score[6][0], 
	one_win: score[6][0] > score[6][1] ? "win" : "lose",
	semi: ":", 
	score2: score[6][1], 
	two_win: score[6][1] > score[6][0] ? "win" : "lose",
	team2: "電研一", 
	arrow: "➤"},
      { id: 8, 
	date: "12/19(日)", 
	team1: "資工", 
	score1: score[7][0], 
	one_win: score[7][0] > score[7][1] ? "win" : "lose",
	semi: ":", 
	score2: score[7][1], 
	two_win: score[7][1] > score[7][0] ? "win" : "lose",
	team2: "電研一", 
	arrow: "➤"},
    ])
    return { contents  }
  }
}
</script>

<style scoped>
.schedule-table {
  position: fixed;
  top: 350px;
  width: 80%;
  height: 500px;
  margin: 0 10%;
  border-radius: 20px;
  background-color: #373737;
  overflow-y: scroll;
}
.schedule-table table {
  width: 100%;
  height: 100%;
}
.schedule-table table tr {
  width: 100%;
  height: 100px;
  text-align: center;
  border-bottom: 1px solid white;
}
.schedule-table table tr:last-child {
  border: none;
}
.schedule-table table td {
  font: bold 32px "Bai Jamjuree";
  width: 20%; 
}
.schedule-table table td:first-child {
  width: 15%;
  font-size: 24px;
  border-right: 2px solid white;
}
.schedule-table table td:nth-child(3n){
  width: 15%;
}
.schedule-table table td:nth-child(4n){
  width: 5%;
  color: #ffffff;
}
.schedule-table table td:nth-child(5n){
  width: 15%;
}
.schedule-table table td:nth-child(6n){
  width: 15%;
  color: #ffffff;
}

.schedule-table table td:nth-child(7n){
  width: 5%;
  color: #ffffff;
}
.schedule-table table .win{
  color: #fec311;
}
.schedule-table table .lose{
  color: #bbbbbb;
}
</style>
