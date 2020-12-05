<template>
    <div class="cart-list">
        <scroll class="content" ref="scroll">
            <!-- <li v-for="(item,index) in cartList" :key="index">{{item}}</li> -->
            <cart-list-item 
            v-for="(item,index) in cartList" 
            :key="index" 
            :item-info="item"/>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

export default {
    name: 'CartList',
    components: {
        Scroll,
        CartListItem
    },
    computed: {
        ...mapGetters(['cartList'])
    },
    activated() {
        this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>

    .content {
        height: calc(100vh - 44px - 49px - 40px);
        overflow: hidden;
    }
</style>