<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <p>
      Category:
      <span v-for="category in blog.categories">{{category}}&nbsp;</span>
    </p>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("https://vue-study-os.firebaseio.com/posts/" + this.id + ".json")
      // get post by router's id
      .then(function(data) {
        // console.log(data);
        return data.json();
      })
      .then(data => {
        this.blog = data;
      });
  }
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
