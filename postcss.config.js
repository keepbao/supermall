module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewporthWidth: 375, //视图的宽度，对应的是我们设计稿的宽度
            viewportHeight: 667, //视图的高度，对应的是我们设计稿的高度
            unibPrecision: 5, //指定`px`转换为视图单位值的小数位数(很多时候无法整除)
            viewportUnit: 'vw', //指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['ignore','tab-bar','tab-bar-item'], //指定不需要转换的类
            //指定tab-bar但里面的图片会被转换，因此使用exclude直接指定TabBar的文件不进行转换
            // 并且在TabBar中使用的插槽，因此MainTabBar文件也需要转换
            // 使用正则匹配含有TabBar字符串的文件
            // exclude中存放的元素必须是正则表达式
            exclude: [/TabBar/], //指定不需要转换的文件
            minPixelValue: 1, //小于或等于`1px`不转换为视窗单位
            mediaQuery: false //允许在媒体查询中转换`px`
        },
    }
}

//1.在js中使用正则： /正则相关规则/
//2.按照排除的文件写对应的正则：
//3.正则的规则：
//1> ^abc:表示匹配的内容，必须以abc内容开头
//2> abc$:表示匹配的内容，必须以abc结尾


