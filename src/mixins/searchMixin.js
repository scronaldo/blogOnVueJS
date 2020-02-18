export default {
  // search blogs by exact title
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(`${this.search}`);
      });
    }
  }
};
