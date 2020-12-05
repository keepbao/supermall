<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
  /* 问题： */
  /* 1.出现x轴的滚动条，依靠网上设置的css样式也无法解决 */
  /* 2.pc端顶部导航栏和轮播图距离合适，转换为移动端出现导航栏遮挡轮播图一部分内容 */
</style>
