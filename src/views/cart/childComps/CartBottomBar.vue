<template>
    <div class="bottom-bar">
        <div class="check-content">
            <check-button 
            :is-checked="isSelectAll" 
            class="check-all" 
            @click.native="checkClick"/>
            <span>全选</span>
        </div>

        <div class="price">
            合计：{{totalPrice}}
        </div>

        <div class="calculate" @click="calcClick">
            去计算({{checkLength}})
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'      

export default {
    name: 'CartBottomBar',
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters(['cartList']),
        totalPrice() {
            return '￥' + this.cartList.filter(item => {
                return item.checked
            }).reduce((preValue, item) => {
                return preValue + item.price * item.count
            },0).toFixed(2)     //保留小数toFixed
        },
        checkLength() {
            return this.cartList.filter(item => item.checked).length
        },
        isSelectAll() {
            //return !(this.cartList.filter(item => !item.checked).length)
            // return !this.cartList.find(item => !item.checked)
            // return this.cartList.every(item => item.checked)
            return !!this.cartList.length && this.cartList.length == this.checkLength
        }
    },
    methods: {
        checkClick() {
            // if (this.isSelectAll) {     //全部选中
            //     this.cartList.forEach(item => item.checked = false)
            // }else {     //有部分没选中或全部不选中
            //     this.cartList.forEach(item => item.checked = true)
            // }

            this.cartList.forEach(item => item.checked = !this.isSelectAll)

        },
        calcClick() {
            if (!this.checkLength) {
                this.$toast.show('请选择购买的商品',2000)
            }
        }
    }    
}
</script>

<style scoped>
/* 使用  display: flex;  align-items: center; 来让底部汇总栏中的内容垂直居中*/
    .bottom-bar {
        position: relative;
        display: flex;

        height: 40px;
        line-height: 40px;
        font-size: 14px;

        background-color: #eee;
    }

    .check-content {
        display: flex;
        align-items: center;
        width: 90px;
        margin-left: 10px;
    }

    .check-all {
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-right: 5px;
    }

    .price {
        flex: 1;
        margin-left: 30px;
    }

    .calculate {
        margin-left: 30px; 
        width: 90px;
        background-color: pink;
        text-align: center;
    }
</style>