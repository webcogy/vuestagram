<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :image="image"
    :postData="postData"
    :step="step"
    @write="myWrite = $event"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        type="file"
        id="file"
        class="inputfile"
        multiple
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
  <!-- 
  <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  -->
  <button @click="activeTab(0)">버튼0</button>
  <button @click="activeTab(1)">버튼1</button>
  <button @click="activeTab(2)">버튼2</button>
  <div style="margin-top: 500px">asfsd</div>
</template>


<script>
import Container from "./components/Container.vue";
import postData from "./assets/postData";
import axios from "axios";

export default {
  name: "App",
  components: { Container },
  data() {
    return {
      postData: postData,
      step: 0,
      image: "",
      myWrite: "",
    };
  },
  methods: {
    more() {
      /* axios.post('url', {name:'kim'}).then().catch(err => {
        console.log(err)
      } */
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((result) => {
          // console.log(result.data);
          this.postData.push(result.data);
        });
    },
    activeTab(idx) {
      this.step = idx;
    },
    upload(e) {
      let a = e.target.files;
      console.log(a[0]);
      let url = URL.createObjectURL(a[0]); // blob:http://localhost:8080/3ec9e722-54dc-4dc4-9a8b-f148b1499c0e  => 브라우저끄면 사라지는 임시 URL
      console.log(url);
      this.step++;
      this.image = url;
    },
    publish() {
      let myPost = {
        name: "kim1222222222",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: "오늘발행 !!",
        filter: "perpetua",
      };
      this.postData.unshift(myPost);
      this.step = 0;
    },
  },
};
</script>

<style>
@import "style.css";

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
.tabContent {
  display: none;
}
.tabContent.active {
  display: block;
}
</style>
