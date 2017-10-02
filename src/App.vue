<template>
  <div id="app">
    <div class="main">
      <img src="./assets/logo.png">
      <router-view></router-view>
    </div>
    <ul class="clearfix footer">
        <li><router-link to="/"  class="guide">首页</router-link></li>
        <li><router-link to="/manage" class="guide">人员管理</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
body{
  padding-bottom:50px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.clearfix:after
{
  content:'.';
  display: block;
  height:0;
  clear:both;
  visibility: hidden;
}
.clearfix
{
  zoom:1;
}
.guide{
  display: inline-block;
  width:50%;
  height:50px;
  float:left;
  background-color: #F1F1F1;
  line-height:50px;
  color: #000;
}
.router-link-exact-active{
   background-color: #d3dbcc;
   color: #42b983;
}
ul li {
  list-style: none;
}
a{
  text-decoration: none;
}
.footer{
  position:fixed;
  left:0;
  right:0;
  bottom:0;
}
</style>
