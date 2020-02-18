import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import singleBlog from "./components/singleBlog.vue";

export default [
  { path: "/", component: showBlogs },
  { path: "/add", component: addBlog },
  // takes last url part as id param
  { path: "/blog/:id", component: singleBlog }
];
