<template>
  <div class="app">
    <div class="index-left">
      <nav-container></nav-container>
    </div>
    <div class="index-right">
      <transition name="blog">
            <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import navContainer from './page/nav/nav'
export default {
  components:{
    navContainer
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin:0;
  padding: 0;
}
.index-left{
    position: absolute;
    width:200px;
    border-right: 1px solid #d2d2d2;
    top:0;
    left: 0;
    bottom: 0;
    background: #2aa88f;
    color: #fff;
}
.index-right{
  position:absolute;
  left: 210px;
  top:0;
  right:0;
  bottom: 0;
  overflow: hidden;
}
.blog-enter-active, .blog-leave-active {
  transition: opacity .5s
}
.blog-enter, .blog-leave-to {
  opacity: 0
}
</style>
