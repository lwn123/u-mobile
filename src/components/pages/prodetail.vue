<template>
        <div class="content">
        <div class="head-wrap">
            <header>
                <div class="wrap">
                    <img src="../../assets/images/public/arrow.jpg" alt="" @click="$router.back()">
                    <p>商品详情</p>
                    <div>
                        <span></span>
                        <span class="two"></span>
                        <span></span>
                    </div>
                </div>
            </header>

        </div>
       
        <!-- 商品图片 -->
        <div class="product">
            <img src="../../assets/images/detail_images/pic_1.jpg" alt="" class="pic1">
            <img src="../../assets/images/detail_images/pic_2.jpg" alt="" class="pic2">   
              
        </div>
        <!-- 商品信息 -->
        <div class="message">
            <div class="detial">
                <div  class="wrap">
                    <p class="p1">{{detailInfo.goodsname}}</p>
                    <p class="p2">￥ {{detailInfo.price}}
                        <span>(此价格不与套装优惠同时享用)</span>
                    </p>
                </div>
            </div>
            <div class="buy">
                <div class="wrap">
                    <div class="row">
                        <p>促销：
                            <span class="manjian">
                                满减
                            </span>
                            满2件9折；3件8折
                        </p>
                        <img src="../../assets/images/detail_images/arrow.jpg" alt="">

                    </div>
                    <div class="row">
                        <p>购买数量
                        </p>
                        <input type="text" class="number">
                        <a href="#" class="btn-reduce btn">-</a>
                        <a href="#" class="btn-add btn">+</a>

                    </div>
                    <div class="row  row3">
                        <p>商品属性
                        </p>
                        <img src="../../assets/images/detail_images/arrow.jpg" alt="">

                    </div>
                    <div class="row4">
                        <p>
                            规格
                            <span class="s1">30g</span>
                            <span class="s2">5g</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="pro-detial">
                <div class="wrap">
                    <p>商品详情</p>
                </div>
            </div>
        </div>
        <!-- 详细图片 -->
        <div class="image-box">
            <img src="../../assets/images/detail_images/pic_3.jpg" alt="" class="pic3">
            <img src="../../assets/images/detail_images/pic_4.jpg" alt="" class="pic4">
            <img src="../../assets/images/detail_images/pic_5.jpg" alt="" class="pic5">
            <img src="../../assets/images/detail_images/pic_6.jpg" alt="" class="pic6">
            <img src="../../assets/images/detail_images/pic_7.jpg" alt="" class="pic7">
        </div>
        <div class="bg"></div>
        <!-- 商品详情 -->
        <div class="evaluate">
            <div class="wrap">
                <p class="head">商品评价</p>
                <div class="main">
                    <p class="p1">1235668fg</p>
                    <p class="p2">效果很好，物流到位，下次继续来!</p>
                    <div class="img-box">
                        <img src="../../assets/images/detail_images/pic_8.jpg" alt="" class="pic8">
                        <img src="../../assets/images/detail_images/pic_9.jpg" alt="" class="pic9">
                        <img src="../../assets/images/detail_images/pic_10.jpg" alt="" class="pic10">

                    </div>
                    <p class="p3">2020-01-03</p>
                    
                </div>
                <div class="foot">
                    <div class="wrap">
                        <span>共1000+条评论</span>
                        <a href="#">
                            查看更多
                            <img src="../../assets/images/public/right.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
            <div class="footer">
                <div class="con">
                    <a class="box1">
                        <img src="../../assets/images/public/icon_7.jpg" alt="">
                        <p>购物车</p>
                        <i>2</i>
                
                    </a>
                    <a href="#" class="box2" @click="toCar">
                        加入购物车
                    </a>
                    <a href="#" class="box3">
                        立即购买
                    </a>
                </div>

            </div>
                
            
     

    </div>
</template>
<script>
import {Toast} from 'vant'
import {getGoodsInfo, getCartAdd} from '../../util/axios'
export default {
    data(){
        return{
            detailInfo:[]

        }
    },
    mounted(){
        this.getGoodsInfo();
        

    },
    methods:{
        getGoodsInfo(){
        getGoodsInfo({
                id: this.$route.query.id,
            }).then((res) => {
                console.log(res, '详情')
                if (res.code == 200) {
                    this.detailInfo = res.list[0]
                }
            })
        },
        toCar(){
            //判断用户是否已经登陆
            let isLogin = JSON.parse(sessionStorage.getItem('userInfo')) ? true :false;
            if(isLogin){
                //用户已经登录，调用添加接口
                getCartAdd({
                    uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
                    goodsid : this.$route.query.id,
                    num:1
                }).then(res=>{
                    //添加成功
                    if(res.code==200){
                         Toast(res.msg)
                         //跳转到购物车页面
                         this.$router.push('/shopCar')
                    }else{
                        Toast(res.msg)
                    }
                })

            }else{
                //没有登录
                Toast('请先登录');

            }
            
        }

    }

}
</script>
<style lang="" scoped>
@import '../../assets/css/prodetail.css';
</style>