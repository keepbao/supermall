<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeRecommendView",
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
     .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 20px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    height: 68px;
    width: 68px;
    margin-bottom: 5px;
  }
</style>

</style>