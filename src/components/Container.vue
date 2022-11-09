<template>
  <div v-if="step == 0">
    <Post :postData="post" v-for="(post, i) in postData" :key="i" />
  </div>

  <!-- :작명="postData" -->
  <!-- 
  <Post :postData="postData[0]" />
  <Post :postData="postData[1]" />
  <Post :postData="postData[2]" /> 
  -->
  <!-- 저번시간에 만든거 -->
  <!-- <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" /> -->

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div class="upload-image" :style="`background-image:url(${image})`"></div>
    <div class="filters">
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div class="upload-image" :style="`background-image:url(${image})`"></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('write', $event.target.value)">
write!</textarea
      >
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  components: { Post },
  name: "containerComponent",
  props: {
    postData: Array,
    step: Number,
    image: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>