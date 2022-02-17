<template>
  <div class = "ranking1">
    <div id = "rankbar">
      <div id = "year" >
        <div class ="left"></div>
          <div class = "num">
            <h1>2021-22</h1>
          </div>
        <div class ="right"></div>
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
export default {

}
</script>

<style scoped>
/*.ranking1{
  width: 100%;
  height: 1000px;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}*/


#rankbar {
    height: 75px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font: bold 28px 'Bai Jamjuree';
    letter-spacing: 0.4em;
    /* align-items: center; */
}
#year{
    color:white;
    margin-left: 3%;
    line-height: 75px;
}
#choose{
    
    position: absolute;
    left:30%;
    
    text-align: center;
    align-items: center;
    /* width: 80%; */
    /* height: 75px; */
    
}

.chooses{
    width:300px;
    /* position:  relative; */
    align-items: center;
    background-color: #2c2c2c;
    color: white;
    font: bold 20px 'Bai Jamjuree';
    
    letter-spacing: 0.4em;
    padding: 0px 70px;
    cursor: pointer;
}

button {
    /* display: inline-block; */
    
    padding: 5px 70px;
    border: 0px solid #2f2f2f;
    border-radius: 8px;
    background: #2f2f2f;
    /* background: -webkit-gradient(linear, left top, left bottom, from(#2f2f2f), to(#2a2a2a)); */
    /* background: -moz-linear-gradient(top, #2f2f2f, #2a2a2a);
    background: linear-gradient(to bottom, #2f2f2f, #2a2a2a); */
    font: bold 20px 'Bai Jamjuree';
    color: #ffffff;
    text-decoration: none;
}
button:hover,
button:focus {
    border: 1px solid #2f2f2f;
    background: #2f2f2f;
    /* background: -webkit-gradient(linear, left top, left bottom, from(#383838), to(#323232)); */
    /* background: -moz-linear-gradient(top, #383838, #323232);
    background: linear-gradient(to bottom, #383838, #323232); */
    text-decoration: none;
}
button:focus{
    color: #9F8950;

}
button:active {
    color :#ffffff;
    background: #2f2f2f;
    /* background: -webkit-gradient(linear, left top, left bottom, from(#1c1c1c), to(#2a2a2a)); */
    /* background: -moz-linear-gradient(top, #1c1c1c, #2a2a2a);
    background: linear-gradient(to bottom, #1c1c1c, #2a2a2a); */
}
.num {
    width: 100%;
    text-align: center;
    padding: 10px;
    
}
.num h1{
    font-size: 20px;
}

#year{
    width: 270px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.left{
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    height: 15px;
    width: 15px;
    background-color:#9F8950;
}
.right{
    clip-path: polygon(0 0, 0 100%, 100% 50%);
    height: 15px;
    width: 15px;
    background-color:#9F8950;
}
</style>