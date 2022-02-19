<template>
  <div class="playerdata">
    <div id="playertable">

      <!-- <div id="year">
        <div class="left"></div>
        <div class="num">
          <h1>2021-2022</h1>
        </div>
        <div class="right"></div>
      </div> -->

      <div id="choose">
        <button id="zonhe" class="chooses">綜合排行</button>
        <button id="player" class="chooses">球員數據</button>
        <button id="team" class="chooses">球隊數據</button>
      </div>

      <form action="">
        
        <select name="select1" id="type">
          <option value="total">總和</option>
          <option value="average">平均</option>
        </select>

        <select name="select2" id="order">
          <option value="score">得分</option>
          <option value="percent">命中率</option>
          <option value="3pt-percent">三分命中率</option>
          <option value="2pt-percent">兩分命中率</option>
          <option value="free-throw-percent">罰球命中率</option>
          <option value="rebound">籃板</option>
          <option value="assist">助攻</option>
          <option value="steal">抄截</option>
          <option value="block">阻攻</option>
        </select>

        <select name="select3" id="team">
          <option value="CS">資工</option>
          <option value="ECE">電機</option>
          <option value="ECE-graduated1">電研一</option>
          <option value="ECE-graduated2">電研二</option>
          <option value="MS">管科</option>
          <option value="IEM">工工</option>
          <option value="EO">光電</option>
          <option value="IMF">資財</option>
          <option value="AM">應數生科</option>
          <option value="EP">電物</option>
          <option value="ME">機械</option>
          <option value="MSE">材料</option>
          <option value="AC">應化</option>
          <option value="NANO">奈米</option>
          <option value="TLE">運管</option>
          <option value="CV">土木</option>
          <option value="EE">電子所</option>
          <option value="COM">院籃</option>
        </select>

        <select name="select4" id="round">
          <option value="season">例行賽</option>
          <option value="playoff">季後賽</option>
        </select>

      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .select-items{
    position: relative;
    width: 177px;
    height: 344px;
  } 

  .select-hide{
    display: none
  }
</style>