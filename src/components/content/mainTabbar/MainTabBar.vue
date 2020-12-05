<template>
  <tabBar>
    <TabBarItem link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </TabBarItem>
    <TabBarItem link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">分类</div>
    </TabBarItem>
    <TabBarItem link="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="text">购物车</div>
    </TabBarItem>
    <TabBarItem link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="text">我的</div>
    </TabBarItem>
  </tabBar>
</template>

  <script>
    import TabBar from 'components/common/tabBar/TabBar';
    import TabBarItem from 'components/common/tabBar/TabBarItem';
    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>
