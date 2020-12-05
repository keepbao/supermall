<template>
    <div class="detail-swiper">
        <!-- class名改成swiper666是因为swiper插件中有class="swiper" -->
        <swiper class="swiper666">
            <swiper-item v-for="(item,index) in topImages" :key="index" >
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name: "DetailSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    /* .swiper666 {
        height: 300px;
        overflow: hidden;
    } */
</style>