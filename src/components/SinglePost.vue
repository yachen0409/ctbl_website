<template>
  <div id="single-post">
      <div id="heading">
        <h3 id="title">{{ post.title }}</h3><hr id="line">
      </div>
      <div id="content" class="row">
          <img src="../assets/Start.png" v-show="img_flag" class="image col-6">
          <div class="body col-4 ms-4">
            <h5 v-show="sub_flag" class="subtitle mb-3">{{ post.subtitle }}</h5>    
            <article class="mt-2">{{ post.body }}</article>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            post: {},
            sub_flag: false,
            img_flag: false,
            announcements: [
            { id: 0, date: "2022/2/20", title: "因天候不佳，今日部分賽程延賽，延賽日期另行公佈。", subtitle: "賽程", img: "assets/logo.png",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro."},
            { id: 1, date: "2022/1/28", title: "第五季 CTBL 例行賽開打倒數一天！", subtitle: "", img: "",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro."},
            { id: 2, date: "2022/1/16", title: "第五季 CTBL 交大籃球聯賽正式開始報名囉，點我看報名表單。", subtitle: "", img: "",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro." },
            { id: 3, date: "2021/12/30", title: "第五屆 CTBL 交大籃球聯盟徵才，誠摯邀請對籃球有興趣的各位一同加入！", subtitle: "", img: "",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro." },
            { id: 4, date: "2021/12/26", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", subtitle: "", img: "",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro." },
            { id: 5, date: "2021/12/12", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", subtitle: "", img: "",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro." },
            { id: 6, date: "2021/11/29", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", subtitle: "", img: "",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro." },
            { id: 7, date: "2021/11/17", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", subtitle: "", img: "",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, corporis officiis consequatur facere nobis, nam, voluptatibus animi delectus nostrum id fugit rerum voluptates expedita repellat inventore vitae modi assumenda ducimus repudiandae accusantium aperiam! Eligendi ipsam, cum nisi reprehenderit libero quis optio recusandae accusamus eius molestias, impedit ad ducimus at porro." }
            ]
        }
    },
    created() {
        this.sub_flag = false;
        this.img_flag = false;
        for (let i = 0; i <= this.announcements.length; i++) {
            if (i == this.id) { 
                this.post = this.announcements[i];
            }
        }
        if (this.announcements[this.id].subtitle != "") { this.sub_flag = true; }
        if (this.announcements[this.id].img != "") { this.img_flag = true; }
    },
}
</script>

<style scoped>
#single-post {
    width: 100%;
    height: 1000px;
    background-color: #2c2c2c;
    color: white;
    text-align: center;
}
#heading {
    top: 18%;
    position: fixed;
    width: 100%;
}
#title {
    text-align: left;
    margin: 0% 0% 2% 8%;
}
#line {
    margin: 0% 7%;
    border-top: 2px solid #ffffff;
}
#content {
    top: 30%;
    margin: 2% 7%;
    position: fixed;
    width: 100%;
    text-align: left;
}
.image {
    height: 80%;
}
article {
    height: 60%;
    overflow-y: scroll;
}
</style>