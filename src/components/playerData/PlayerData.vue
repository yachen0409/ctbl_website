<template>
  <div class="playerdata">
    <div id="playertable">
      <div id="year">
        <div class="left"></div>
        <div class="num">
          <h1>2021-2022</h1>
        </div>
        <div class="right"></div>
      </div>

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
          <option value="3pt-percent">三分命中率</option>
          <option value="rebound">籃板</option>
          <option value="assist">助攻</option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
