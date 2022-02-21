<template>
  <div class="ranking">
    <div id="rankbar">
      <div id="year" >
        <div class="left" @click="yeardecrease"></div>
          <div class="num">
            <!-- <p>2021-22</p> -->
            <p>{{ yr }}</p>
          </div>
        <div class ="right" @click="yearincrease"></div>
      </div>
      <div id = "choose">
        <button id="zonhe" class ="chooses">綜合排行</button>
        <button id="player" class ="chooses">球員數據</button>
        <button id="team" class ="chooses">球隊數據</button> 
      </div>   
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const yr = ref("2021-22")
    let first=yr.value.substr(0,4);
    let second=yr.value.substr(5,2);
    const yearincrease = ()=> {
      first = parseInt(first) + 1 ;
      second = parseInt(second) + 1 ;

      
      yr.value = first + "-" + second;
    }
    const yeardecrease = ()=> {
      first = parseInt(first) - 1 ;
      second = parseInt(second) - 1 ;

      if(parseInt(second) < 22){
        first = parseInt(first) +1;
        second = parseInt(second) +1;
      }
      yr.value = first + "-" + second;
    }

    return { yr, yearincrease, yeardecrease} 

  }

}
</script>

<style scoped>

#rankbar {
  position: fixed;
  top: 200px;
  width: 100%;
  height: 100px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
#year{
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.left{
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
  height: 20px;
  width: 20px;
  background-color:#9F8950;
}
.num {
  width: 140px;
  text-align: center;
  padding: 0px 10px;
  font: bold 20px 'Bai Jamjuree';
  line-height: 20px;
  letter-spacing: 0.1em;
  height: 20px;
  color: #fff;
}

.right{
  clip-path: polygon(0 0, 0 100%, 100% 50%);
  height: 20px;
  width: 20px;
  background-color:#9F8950;
}

#choose{
  width: 900px;
  height: 50px;
  background-color: #2c2c2c;
  box-shadow: 1px 2px 5px rgba(10, 10, 10, 0.5);
}

.chooses{
  width: 300px;
  background-color: #2f2f2f;
  color: white;
  font: bold 20px 'Bai Jamjuree';
  line-height: 50px;
  letter-spacing: 0.1em;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
}

button:hover{
  background: #2f2f2f;
  border-radius: 8px;
      border: 1px solid #2f2f2f;
}
button:focus{
  color: #9F8950;
  background: #2c2c2c;
  border-radius: 8px;
      border: 1px solid #2f2f2f;
}



</style>