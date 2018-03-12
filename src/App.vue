// 1、模板：html结构
<template>
  <div id="app">
   <!-- <add-blog></add-blog>
   <show-blogs></show-blogs>   -->
   <blog-header></blog-header>
   <router-view></router-view>
  </div>
</template>

// 2、行为：处理逻辑
<script>
// 局部注册组件
import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/ShowBlogs";
import BlogHeader from "./components/BlogHeader";
import SingleBlog from "./components/SingleBlog";


  export default {
    name: 'app',
    data(){
      return {}
    },
    components:{
      AddBlog,
      ShowBlogs,
      BlogHeader,
      SingleBlog
    }
  }
</script>

// 3、样式：解决样式
<style scoped>

</style>
