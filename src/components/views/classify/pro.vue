<template>
<main>
    <ul class="left">
                <li class="first">
                    <a href="#">
                        施华蔻
                    </a>
                </li>
                <li>
                    <a href="#">
                        沙宣
                    </a>
                </li>
                <li>
                    <a href="#">
                        欧莱雅
                    </a>
                </li>
                <li>
                    <a href="#">
                        潘婷
                    </a>
                </li>
                <li>
                    <a href="#">
                        资生堂
                    </a>
                </li>
                <li>
                    <a href="#">
                        阿道夫
                    </a>
                </li>
                <li>
                    <a href="#">
                        卡诗
                    </a>
                </li>
                <li>
                    <a href="#">
                        海飞丝
                    </a>
                </li>
                <li>
                    <a href="#">
                        资生堂
                    </a>
                </li>

            </ul>
            <div class="right">
                <h2 class="clearfix">
                    洗发类
                    <a href="#">
                        更多
                        <img src="../../../assets/images/public/right.jpg" alt="">
                    </a>
                </h2>
                <div class="product">
                    <div>
                        <img src="../../../assets/images/classify/shop_1.jpg" alt="">
                        <p>护亮泽洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-12.jpg" alt="">
                        <p>滋养洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-13.jpg" alt="">
                        <p>柔顺洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-14.jpg" alt="">
                        <p>去屑洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-15.jpg" alt="">
                        <p>柔顺洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-16.jpg" alt="">
                        <p>焕彩洗发水</p>
                    </div>

                </div>
                <div class="product2">
                    <div>
                        <img src="../../../assets/images/classify/shop_2.jpg" alt="">
                        <p>施华蔻染色</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-22.jpg" alt="">
                        <p>施华蔻双氧乳</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-22.jpg" alt="">
                        <p>护亮泽洗发水</p>
                    </div>
                

                </div>
               
                <div class="product">
                    <div>
                        <img src="../../../assets/images/classify/shop_1.jpg" alt="">
                        <p>护亮泽洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-12.jpg" alt="">
                        <p>滋养洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-13.jpg" alt="">
                        <p>柔顺洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-14.jpg" alt="">
                        <p>去屑洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-15.jpg" alt="">
                        <p>柔顺洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-16.jpg" alt="">
                        <p>焕彩洗发水</p>
                    </div>

                </div>
                
                <div class="product2">
                    <div>
                        <img src="../../../assets/images/classify/shop_2.jpg" alt="">
                        <p>施华蔻染色</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-22.jpg" alt="">
                        <p>施华蔻双氧乳</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-22.jpg" alt="">
                        <p>护亮泽洗发水</p>
                    </div>
                

                </div>
                
                <div class="product">
                    <div>
                        <img src="../../../assets/images/classify/shop_1.jpg" alt="">
                        <p>护亮泽洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-12.jpg" alt="">
                        <p>滋养洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-13.jpg" alt="">
                        <p>柔顺洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-14.jpg" alt="">
                        <p>去屑洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-15.jpg" alt="">
                        <p>柔顺洗发水</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-16.jpg" alt="">
                        <p>焕彩洗发水</p>
                    </div>

                </div>
               
                <div class="product2">
                    <div>
                        <img src="../../../assets/images/classify/shop_2.jpg" alt="">
                        <p>施华蔻染色</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-22.jpg" alt="">
                        <p>施华蔻双氧乳</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/classify/images/shop-22.jpg" alt="">
                        <p>护亮泽洗发水</p>
                    </div>
                

                </div>

            </div>
</main>
</template>
<script>
import {
    getCate
} from '../../../util/axios';
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        getCate({istree:1}).then(res => {
            console.log(res);
        })
    }

}
</script>
<style lang="" scoped>
   main {
  position: relative;
  height: 15rem;
  margin-top: 0.9rem;
  display: flex;
}
main ul {
  position: fixed;
  top: 0.9rem;
  left: 50%;
  margin-left: -3.75rem;
  width: 1.63rem;
  height: 100%;
}
main ul li {
  width: 1.55rem;
  height: 0.52rem;
  line-height: 0.52rem;
  font-size: 0.26rem;
  text-align: center;
  border-left: 0.08rem solid transparent;
  margin-bottom: 0.52rem;
}
main ul li a {
  color: #656565;
}
main ul .first {
  border-color: #f26b11;
  margin-top: 0.42rem;
}
main ul .first a {
  color: #f26b11;
}
main .right {
  position: absolute;
  right: 0;
  width: calc(100% - 1.64rem);
  height: 100%;
  box-sizing: border-box;
  padding: 0.42rem 0.4rem 0 0;
  border-left: 1px solid #dfdbdb;
  overflow: auto;
}
main .right h2 {
  font-size: 0.24rem;
  line-height: 0.52rem;
  color: #454545;
  padding-left: 0.55rem;
}
main .right h2 a {
  float: right;
  color: #656565;
}
main .right h2 a img {
  width: 0.19rem;
  height: 0.26rem;
  vertical-align: -0.03rem;
}
main .right .product {
  width: 5.16rem;
  height: 5rem;
  padding-left: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}
main .right .product div {
  width: 1.54rem;
  height: 2rem;
  text-align: center;
}
main .right .product div img {
  width: 1.54rem;
  height: 1.52rem;
}
main .right .product div p {
  font-size: 0.23rem;
  color: #878787;
  margin-top: 0.2rem;
}
main .right .product2 {
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.3rem;
}
main .right .product2 div {
  width: 1.5rem;
  height: 2rem;
  text-align: center;
}
main .right .product2 div img {
  width: 0.82rem;
  height: 1.33rem;
}
main .right .product2 div p {
  font-size: 0.23rem;
  color: #878787;
  margin-top: 0.2rem;
}
 
</style>