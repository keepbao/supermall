<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

//使用line-height（行高）时，如果没有内容行高显示不出来
<style scoped>
    .nav-bar {
        display: flex;
        height: 44px;  
        line-height: 44px;
        text-align: center;    
        box-shadow: 0 1px 1px rgba(100,100,100, .1);    
    }

    .left,.right {
        flex-shrink: 0;
        width: 60px;
        /* background-color: aqua; */
    }

    .center {
        flex: 1;
        /* background-color: pink; */
    }
</style>