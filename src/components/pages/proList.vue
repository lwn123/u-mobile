<template>
 <div class="content">
        <div class="header-fixed">
            <div class="header-wrap">
                <div class="head">
                    <img src="../../assets/images/list_images/arrow.jpg" alt="" class="arrow">
                    <img src="../../assets/images/list_images/logo.jpg" alt="" class="logo">
                    <div>
                        <span></span>
                        <span class="two"></span>
                        <span></span>
                    </div>
        
                </div>
                <div class="search">
                    <img src="../../assets/images/list_images/search.jpg" alt="">
                    <input type="text" placeholder="搜索商品">
        
                </div>

            </div>
        </div>
        <ul class="pro-list">
            <li v-for='item in prolist' :key='item.id'>
                <a href="#">
                    <img :src="item.img" alt="">
                    <div>
                    <p class="p1">{{item.proName}}</p>
                    <p class="p2">
                        <i>￥</i>{{item.price}}
                    </p>
                    <p class="p3">{{item.commentNum}}条评论</p>
                    </div>
                </a>
            </li>
        </ul>
</div>
</template>
<script>
export default {
    data(){
        return{
            prolist:[{
                id:1,
                img:require('../../assets/images/list_images/pic.jpg'),
                proName:'阿道夫修复滋养洗发香乳 洗发水 持久留香 500ml*2瓶 旗舰店正品换新升级款',
                price:123.00,
                commentNum:3625

            },{
                id:2,
                img:require('../../assets/images/list_images/pic.jpg'),
                proName:'阿道夫修复滋养洗发香乳 洗发水 持久留香 500ml*2瓶 旗舰店正品换新升级款',
                price:123.00,
                commentNum:3625

            },{
                id:3,
                img:require('../../assets/images/list_images/pic.jpg'),
                proName:'阿道夫修复滋养洗发香乳 洗发水 持久留香 500ml*2瓶 旗舰店正品换新升级款',
                price:123.00,
                commentNum:3625

            },{
                id:4,
                img:require('../../assets/images/list_images/pic.jpg'),
                proName:'阿道夫修复滋养洗发香乳 洗发水 持久留香 500ml*2瓶 旗舰店正品换新升级款',
                price:123.00,
                commentNum:3625

            }]
        }
    },
    components:{
        
    }
}
</script>
<style lang="" scoped>
@import '../../assets/css/prolist.css';
    
</style>