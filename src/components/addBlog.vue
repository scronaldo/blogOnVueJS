<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <p>Blog Categories:</p>
        <label>VueJS</label>
        <input type="checkbox" value="VueJS" v-model="blog.categories" />
        <label>ReactJS</label>
        <input type="checkbox" value="ReactJS" v-model="blog.categories" />
        <label>NodeJS</label>
        <input type="checkbox" value="NodeJS" v-model="blog.categories" />
        <label>Misc</label>
        <input type="checkbox" value="Misc" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <label>
        Location:
        <span class="city">{{ city }}</span>
      </label>

      <hr />
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
// Imports

export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: [
        "Elon Musk",
        "Pavel",
        "Anonymous",
        "My Cat",
        "Future You",
        "Neuronet",
        "Unknown"
      ],
      submitted: false,
      city: ""
    };
  },
  methods: {
    post: function() {
      this.$http
        .post(
          "https://vue-study-os.firebaseio.com/posts.json",
          // object we post to base
          this.blog
        )
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  },
  created() {
    this.$http
      .get("http://ipinfo.io")
      .then(data => data.json())
      .then(function(response) {
        this.city = response.region;
      });
  }
};
</script>

<style scoped>
button {
  padding: 10px 40px;
  text-transform: uppercase;
  text-align: center;
  margin: 26px auto 0px;
  font-weight: bolder;
  display: flex;
  background: lightseagreen;
}

button:hover {
  background: mediumseagreen;
}
.city {
  color: #0e0ebc;
  font-size: 17px;
}
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  box-shadow: 9px 10px 37px 57px rgba(106, 255, 0, 0.4);
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
</style>
