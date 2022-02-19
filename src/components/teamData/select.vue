<template>
    <div class = "container">
      <div class="row">
        
        <div class="col-md-6 col-lg-3">
            <select>
              <option value="EE">電機</option>
              <option value="CS">資工</option>
            </select>
        </div>

        <div class="col-md-6 col-lg-3">
          <select>
            <option value="team">球隊</option>
            <option value="GP">出賽次數</option>
            <option value="MIN">時間(分)</option>
            <option value="team">球隊</option>
            <option value="2PM">兩分命中</option>
            <option value="2PA">兩分出手</option>
            <option value="2P%">兩分命中率</option>
            <option value="3PM">三分命中</option>
            <option value="3PA">三分出手</option>
            <option value="3P%">三分命中率</option>
            <option value="FTM">罰球命中</option>
            <option value="FTA">罰球出手</option>
            <option value="FT%">罰球命中率</option>
            <option value="PTS">得分</option>
            <option value="OR">進攻籃板</option>
            <option value="DR">防守籃板</option>
            <option value="REB">籃板</option>
            <option value="AST">助攻</option>
            <option value="STL">抄截</option>
            <option value="BLK">阻攻</option>
            <option value="TO">失誤</option>
            <option value="PF">犯規</option>
          </select>
        </div>

        <div class="col-md-6 col-lg-3">
          <select>
            <option value="average">平均</option>
            <option value="sum">累計</option> 
          </select>
        </div>

        <div class="col-md-6 col-lg-3">
          <select>
            <option value="regular season">例行賽</option>
            <option value="playoff">季後賽</option>
          </select>
        </div>

      </div>
   </div>

</template>

<script>
export default {

}
</script>

<style>
select{
  background-color: #4E4D45;
  margin-top: 20px;
  color: #FFFFFF;
  width: 150px;
  text-align: center;
  font-weight: bolder;
}
.data{
  width: 100%;
  height: 1000px;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}
</style>