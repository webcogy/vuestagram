<template>
  <div>
    <Post :postData="post" v-for="(post, i) in postData" :key="i" />
  </div>

  <!-- :작명="postData" -->
  <!-- 
  <Post :postData="postData[0]" />
  <Post :postData="postData[1]" />
  <Post :postData="postData[2]" /> 
  -->
</template>

<script>
import Post from "./Post.vue";
export default {
  components: { Post },
  name: "containerComponent",
  props: {
    postData: Array,
  },
};
</script>

<style>
</style>