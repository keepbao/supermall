<template>
    <div class="wrapper">
        <ul class="content">
            <button @click="btnClick">按钮</button>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
            <li>曹卫锅</li>
        </ul>
    </div>
</template>
    
<script>
import BScroll from 'better-scroll'

export default {
    name: "Category",
    data() {
        return {
            scroll: null
        }
    },
    //组件创建完后调用
    mounted() {
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType: 1,
            pullUpLoad: true,
            // click: true
        })

        this.scroll.on('scroll',(position) => {
            console.log(position); 
        })

        this.scroll.on('pullingUp', () => {
            console.log('上拉加载更多');
            
        })
    },
    methods: {
        btnClick() {
            console.log('曹卫锅');            
        }
    }
}
</script>

<style scoped>
    .wrapper { 
        height: 150px;
        background-color: pink;
        overflow: hidden;
    }
</style>