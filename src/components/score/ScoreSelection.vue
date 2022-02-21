<template>
  <div class="selection">
    <div class="selectionBar">
      <div class="date">
        <div class="left" @click="dateDecrement"></div>
        <div class="month">
          <p>{{ date }}</p>
        </div>
        <div class="right" @click="dateIncrement"></div>
      </div>
      <div class="round">
        <button id="f_round" class="rounds">第一輪</button>
        <button id="s_round" class="rounds">第二輪</button>
        <button id="ssn_off" class="rounds">季後賽</button>
      </div>
      <div class="search">
        <input type="text" placeholder="Search..." />
      </div>
    </div>    
  </div>

</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const date = ref("2022 FEB")
    const find = (map, month) => {
      for(let i in map){
        if(map[i] === month){
          return parseInt(i);
        }
      }
    } 
    let year = date.value.substr(0, 4)
    let month = date.value.substr(5, 3)
    let map = {
      1: "JAN",
      2: "FEB",
      3: "MAR",
      4: "APR",
      5: "MAY",
      6: "JUN",
      7: "JUL",
      8: "AUG",
      9: "SEP",
      10: "OCT",
      11: "NOV",
      12: "DEC"
    }
    let digit_month = find(map, month)
    const dateIncrement = () => {
      if(digit_month === 12) {
        digit_month = 1
        year = parseInt(year) + 1;
      }else{
        digit_month += 1
      } 
      month = map[digit_month]
      date.value = year + " " + month
    }
    const dateDecrement = () => {
      if(digit_month === 1) {
        digit_month = 12
        year = parseInt(year) - 1;
      }else{
        digit_month -= 1
      } 
      month = map[digit_month]
      date.value = year + " " + month      
    }
        
    return { date, dateIncrement, dateDecrement }
  }
}
</script>

<style scoped>
.selectionBar {
  position: fixed;
  top: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  background-color: #2c2c2c;
}
.date {
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.left {
  clip-path: polygon(0 50%, 100% 100%, 100% 0);
  width: 20px;
  height: 20px;
  background-color: #9f8950;
  cursor: pointer;
}
.month {
  padding: 0px 10px;
  text-align: center;
  width: 140px;
  font: bold 20px 'Bai Jamjuree';
  line-height: 20px;
  letter-spacing: 0.1em;
  height: 20px;
  color: #9f8950;
}
.right {
  clip-path: polygon(100% 50%, 0 100%, 0 0);
  width: 20px;
  height: 20px;
  background-color: #9f8950;
  cursor: pointer;
}
.round {
  width: 600px;
  height: 50px;
  box-shadow: 1px 2px 5px rgba(10, 10, 10, 0.5);
}
.rounds {
  width: 200px;
  background-color: #2c2c2c;
  color: white;
  font: bold 20px 'Bai Jamjuree';
  line-height: 50px;
  letter-spacing: 0.1em;
  border-radius: 0;
  border: 0;
  cursor: pointer;
}

button:hover{
  background: #2f2f2f;
}
button:focus{
  color: #9F8950;
  background: #202020;
}
.search {
  width: 240px;
  height: 30px;
  background-color: #2c2c2c;
  background-image: url("../../assets/search.png");
  background-size: 24px 24px;
  background-repeat: no-repeat;
  border-bottom: 1px solid white;
}
.search input[type="text"] {
  width: 85%;
  height: 100%;
  float: right;
  background-color: #2c2c2c;
  color: white;
  font-size: 20px;
  border: 0;
  padding-left: 5%;
}
.search input[type="text"]:focus {
  outline: 0;
}
</style>