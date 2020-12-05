<template>
  <div id="name">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"/>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <home-recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
    
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureViews";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/Goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { getHomeMultidata, getHomeGoods } from "network/home";
//防抖
import { debounce } from "common/utils";
//混入，点击返回功能
import {backTopMixin} from "common/mixin"
export default {
  name: "home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()    
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // this.parent.showNav = true;
  },
  mounted() {
    //1.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    //在created中使用this.$refs和doucument.quer值可能为空,下面使用回调会得到值，但会得到bug
    this.$bus.$on("itemImageLoad", () => {
      //此时 打印时出现报错信息，主要原因时refresh函数与better-scroll
      // console.log(this.$refs.scroll.refresh);
      refresh();
    });
  },
  methods: {
    //事件监听相关的方法
    tabClick(index) {
      // switch (index) {
      //   case 0:
      //     this.currentType = 'pop'
      //     break
      //   case 1:
      //     this.currentType = 'new'
      //     break
      //   case 2:
      //     this.currentType = 'sell'
      //     break
      // }
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      //1.判断BackTop是否显示
      this.isShowBackTop = Math.abs(position.y) > 1000;

      //2.决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop;
    },
    //上拉加载更多的完成
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      //获取tabControl的offsetTop
      //所有组件都有一个属性$el: 用于获取组件中的元素
      //通过监听轮播图的加载完成，获取高度
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    //网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#name {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

/* 在使用浏览器原生滚动时，为了不让导航跟随一起滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}

/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
}  */
</style>