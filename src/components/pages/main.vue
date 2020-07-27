<template>

   <div class="content">
        <header>
            <div class="wrap">
                <img src="../../assets/images/public/arrow.jpg" alt="">
                <p>我的订单</p>
                <div>
                    <span></span>
                    <span class="two"></span>
                    <span></span>
                </div>
            </div>
        </header>
        <div class="head">
            <div class="wrap">
                <div class="left">
                    <a href="#"></a>
                    <p>{{userInfo.nickname}}<br>
                        <span>{{userInfo.phone}}</span></p>
                </div>
                <div class="right" @click="quit">
                    退出登录
                </div>
            </div>
        </div>
        <div class="main">
            <!-- <van-cell is-link title="全部订单" class="box" /> -->
            <div class="head">
                <div class="box">
                    <img src="../../assets/images/mine_images/icon_1.jpg" alt="">
                    <p>全部订单</p>
                </div>
                <div class="box">
                    <img src="../../assets/images/mine_images/icon_2.jpg" alt="">
                    <p>待付款</p>
                </div>
                <div class="box">
                    <img src="../../assets/images/mine_images/icon_3.jpg" alt="">
                    <p>待收货</p>
                </div>
            </div>
            <ul>
                <li>
                    <div class="left">
                     <img src="../../assets/images/mine_images/icon_4.jpg" alt="" class="icon4">
                     <p>地址管理</p>
                    </div>
                     
                    <div class="right">
                        <img src="../../assets/images/public/right.jpg" alt="">
                    </div>
                </li>
                <li>
                    <div class="left">
                     <img src="../../assets/images/mine_images/icon_5.jpg" alt="" class="icon5">
                     <p>我的钱包</p>
                    </div>
                     
                    <div class="right">
                        <span>200余额</span>
                        <img src="../../assets/images/public/right.jpg" alt="">
                    </div>
                </li>
                <li>
                    <div class="left">
                     <img src="../../assets/images/mine_images/icon_6.jpg" alt="" class="icon6">
                     <p>我的优惠卷</p>
                    </div>
                     
                    <div class="right">
                        <img src="../../assets/images/public/right.jpg" alt="">
                    </div>
                </li>
                <li>
                    <div class="left">
                     <img src="../../assets/images/mine_images/icon_7.jpg" alt="" class="icon7">
                     <p>我的二维码</p>
                    </div>
                     
                    <div class="right">
                        <img src="../../assets/images/public/right.jpg" alt="">
                    </div>
                </li>
                <li>
                    <div class="left">
                     <img src="../../assets/images/mine_images/icon_8.jpg" alt="" class="icon8">
                     <p>我的小伙伴</p>
                    </div>
                     
                    <div class="right">
                        <img src="../../assets/images/public/right.jpg" alt="">
                    </div>
                </li>
            </ul>
        </div>
       
       
    </div>
   
</template>
<script>

export default {
    data(){
        return{
            userInfo:{},

        }
    },
    mounted(){
        //组件一加载 就获取登录信息
        this.userInfo= sessionStorage.getItem('userInfo')? JSON.parse(sessionStorage.getItem('userInfo')):{}; 
        

    },
    methods:{
        quit(){
            //退出登录，清楚登录信息
            sessionStorage.removeItem('userInfo');
            this.userInfo={};
            this.$router.push('/login');
            
        }
    }
    
}
</script>
<style lang="" scoped>
@import '../../assets/css/main.css';
</style>