<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search by exact title" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2>{{ blog.title }}</h2>
      </router-link>
      <article>{{ blog.content }}</article>
    </div>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("https://vue-study-os.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(data => {
        // create id and blogs array out of received object
        const blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        // uncomment reverse to show new firest
        // blogsArray.reverse();
        this.blogs = blogsArray;
      });
  },
  // array of mixins (in particular search filter comp property)
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

#show-blogs a {
  color: #444;
  text-decoration: none;
}

article {
  font-size: 17px;
}

input {
  padding: 3px;
}
</style>
