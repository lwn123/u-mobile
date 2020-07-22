<template>
    <div class="content">
        <div class="head-wrap">
            <header>
                <div class="wrap">
                    <img src="../../assets/images/public/arrow.jpg" alt="">
                    <p>商品详情</p>
                    <div>
                        <span></span>
                        <span class="two"></span>
                        <span></span>
                    </div>
                </div>
            </header>
        </div>
        
        <div class="main">
            <!-- 客户信息 -->
            <div class="costmer-information">
                <div class="wrap">
                    <div class="text">
                        <p class="p1"><span>收货人：Yousu</span> <span>10000000000</span> </p>
                    <p class="p2">
                        <span class="medial-s1">收货地址：</span>
                        <span class="s2">北京市海淀区隐泉路清林院6号楼中公优就业总部3层</span></p>
                    </div>
                    <div class="img-box">
                        <img src="../../assets/images/order/arrow.jpg" alt="">
                    </div>
                    
                </div>
            </div>
            <!-- 商品信息 -->
            <div class="pro-information">
                <div class="wrap">
                    <div class="pro">
                        <div class="left">
                            <img src="../../assets/images/order/images/shop.jpg" alt="">
                            <div class="text">
                                <p class="p1">雅诗兰黛护肤霜</p>
                                <p class="p2">规格：50g</p>
                            </div>
                        </div>
                        <div class="right">
                            <span>$</span>120.00
                        </div>
                    </div>
                    <div class="count">
                        <p>购买数量：</p>
                        <p>
                            <span>-</span>
                            <span class="num">1</span>
                            <span>+</span>
                        </p>
                    </div>
                    <div class="post">
                        <div class="wrap">
                            <div class="left">
                                配送方式
                            </div>
                            <div class="right">
                                XX快递
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <!-- 优惠卷 -->
            <div class="youhui">
                <div class="box1">
                    <div class="left">
                        优惠券
                    </div>
                    <div class="right">
                        无可用
                    </div>

                </div>
                <div class="box2">
                    <div class="left">
                        使用积分
                    </div>
                    <div class="right">
                        <input type="text" placeholder="输入积分">
                        <a href="">使用</a>
                        <p>可用<span>50</span>积分</p>
                    </div>

                </div>
            </div>
            <ul>
                <li>
                    <span>商品金额</span>
                    <i>￥68.00</i>
                </li>
                <li>
                    <span>运费</span>
                    <i>+￥0.00</i>
                </li>
                <li>
                    <span>优惠券</span>
                    <i>-￥0.00</i>
                </li>
                <li>
                    <span>会员优惠</span>
                    <i>-￥0.00</i>
                </li>
                <li>
                    <span>积分抵扣</span>
                    <i>-￥0.00</i>
                </li>
                
            </ul>
            <div class="submit">
                <p class="money">
                    实付金额：<span>￥68.00</span>
                </p>
                <a href="#">提交订单</a>

            </div>
            
        </div>
       <my-footer></my-footer>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="" scoped>
@import '../../assets/css/pro-order.css';
</style>