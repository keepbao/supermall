<template>
    <div @click="itemClick">
        <h1>点击跳转登录界面</h1>
    </div>
</template>
    
<script>
export default {
    name: "home",
    methods: {
      itemClick() {
            this.$router.push('/login')
      }
    },
    created() {
        // this.$parent.showNav = true;
    }
}
</script>

<style scoped>

</style>