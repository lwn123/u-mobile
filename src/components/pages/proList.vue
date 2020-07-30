<template>
 <div class="content">
        <div class="header-fixed">
            <div class="header-wrap">
                <div class="head">
                    <img src="../../assets/images/list_images/arrow.jpg" alt="" class="arrow" @click="$router.back()">
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
        <van-list class="pro-list">
        <van-card v-for='item in prolist' :key="item.id"
            num="1"
            :price="item.price"
            :title="item.goodsname"
            :thumb="$imgUrl+item.img"
            :origin-price="item.market_price"
            @click='goDetail(item.id)'
        />
        <van-loading size="24px" vertical>加载中...</van-loading>
        <van-empty v-if="prolist==null" description="当前没有商品数据" />
        </van-list>
        
</div>
</template>
<script>
import {getGoods} from '../../util/axios'
export default {
    data(){
        return{
            prolist:[],
        }
    },
    mounted(){
        this.getGoods();
    },
    methods:{
        getGoods(){
            getGoods({
                fid:this.$route.query.id
            }).then(res=>{
                this.prolist=res.list
                console.log(res);
            })
        },
        goDetail(id){
            this.$router.push({
                            path:'/prodetail',
                            query:{
                                id
                            }
                        })
        
        }
    }
}
</script>
<style lang="" scoped>
@import '../../assets/css/prolist.css';
.header-fixed{
    z-index: 2;
}
.van-list{
    margin-bottom: 1.5rem;
}
.van-card{
    font-size:.3rem;
    background-color:#fff;
}
</style>