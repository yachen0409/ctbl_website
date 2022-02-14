<template>
  <div class="announcement">
    <div id="title">
      <h1>Announcements</h1>
    </div>

    <div id="overview" class="col">
      <div v-for="i in announcements" class="single-announcement row p-2 shadow-sm align-items-center" :key="i.id" 
        @mouseover="highlight" @mouseleave="resume">
        <h5 class="col-2 text-center">{{ i.date }}</h5>
        <article class="col text-start">{{ i.title }}</article>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      announcements: [
        { id: 1, date: "2022/2/20", title: "因天候不佳，今日部分賽程延賽，延賽日期另行公佈。" },
        { id: 2, date: "2022/1/28", title: "第五季 CTBL 例行賽開打倒數一天！" },
        { id: 3, date: "2022/1/16", title: "第五季 CTBL 交大籃球聯賽正式開始報名囉，點我看報名表單。" },
        { id: 4, date: "2021/12/30", title: "第五屆 CTBL 交大籃球聯盟徵才，誠摯邀請對籃球有興趣的各位一同加入！" },
        { id: 5, date: "2021/12/26", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus inventore in nemo odio sapiente." },
        { id: 6, date: "2021/12/12", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus inventore in nemo odio sapiente." },
        { id: 7, date: "2021/11/29", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus inventore in nemo odio sapiente." },
        { id: 8, date: "2021/11/17", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus inventore in nemo odio sapiente." }
      ]
    }
  },
  methods: {
    highlight(event) {
      event.target.classList.add("highlighted");
    },
    resume(event) {
      event.target.classList.remove("highlighted");
    }
  }
}
</script>

<style scoped>
.announcement {
  width: 100%;
  height: 1000px;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}
#title {
  position: fixed;
  top: 10%;
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
#overview {
  position: fixed;
  top: 25%;
  width: 100%;
  height: 600px;
  overflow-y: scroll;
}
.single-announcement {
  background: #414141;
  height: 70px;
  border-radius: 8px;
  margin: 0px 5% 20px 10%;
}
.single-announcement h5 {
  font-family: 'Bai Jamjuree';
  margin: 0;
  pointer-events: none;
}
article {
  pointer-events: none;
}
.highlighted {
  background: rgba(159, 137, 80, 0.46);
  border-bottom: 2px solid #e4d2bb;
  border-right: 2px solid #e4d2bb;
}
</style>