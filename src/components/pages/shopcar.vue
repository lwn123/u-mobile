<template>
  <div class="content">
    <div class="head-wrap">
      <header>
        <div class="wrap">
          <img src="../../assets/images/public/arrow.jpg" alt @click="$router.back()" />
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
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-checkbox :name="index" v-for="(item,index) in carList" :key="item.id" @click="check">
         <van-card
          class="card"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgUrl+item.img">
          <template #footer>
            <van-stepper :value="item.num" async-change />
            <van-button type="danger" v-if="flag" class="del" @click="del(item.id,index)">删除</van-button>
          </template>
        </van-card>
        </van-checkbox>
        <van-empty v-if="carList==null" description="购物车空空如也，快去买买买...." />
       
      </van-checkbox-group>
      <!-- 结算 -->
      <van-submit-bar :price="priceAll" button-text="去结算" @submit="onSubmit">
        <van-checkbox v-model="checkall" @click="checkAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import {cartlist,getCartDelete } from "../../util/axios";

export default {
  data() {
    return {
      result:[],//多选组
      carList:[],//渲染商品列表
      checkall:false,//全选按钮
      flag:true//删除按钮
    };
  },
  mounted() {
    //调取接口
    this.getCarList();
  },
  computed:{
    //计算总价
      priceAll(){
        let all = 0;
        let onePriceList =this.result.map(item => {
                 return Number(this.carList[item].price)*Number(this.carList[item].num)
        })
        onePriceList.forEach(item => {
          all = all+item
        })
        
        return all*100
      }
  },
  methods: {
    getCarList() {
      cartlist({
        uid: JSON.parse(sessionStorage.getItem("userInfo")).uid
      }).then(res => {
        if (res.code == 200) {
          console.log(res, "返回值");
          this.carList = res.list;
          // this.carList.map(item => {
          //   item.status = item.status == 1 ? true : false;
          // });
        } else {
          Toast(res.msg);
        }
      });
    },
    //单选事件
    check(){
      if(this.result.length == this.carList.length ){
        this.checkall=true
      }else{
        this.checkall=false
      }
    },
    //全选事件
    checkAll() {
      if(this.checkall == true){
         this.$refs.checkboxGroup.toggleAll(true);
      }else{
        this.$refs.checkboxGroup.toggleAll();
      }
    },
    //去结算
    onSubmit(){
      if(this. priceAll != 0){
        sessionStorage.setItem('priceAll',JSON.stringify(this.priceAll));
        let checkPro = this.result.map(item=>{
          return this.carList[item]
        })
        sessionStorage.setItem('checkPro',JSON.stringify(checkPro));
        this.$router.push('/order');
      }else{
        Toast('您还未选择商品');
      }
     

    },
    //删除事件
    del(n,i){
      //  getCartDelete({id:n}).then(res => {
      //    this.carList=res.list;
      //  })
       this.carList.splice(i,1);
        
    }
  },
  //组件访问之前的钩子函数
  beforeRouteEnter(to, from, next) {
    if (sessionStorage.getItem("userInfo")) {
      next();
    } else {
      //组件创建之前没有this
      Toast("请先登录，再查看购物车");
      next("/login");
    }
  }
};
</script>
<style lang="" scoped>
@import "../../assets/css/shopCar.css";
.van-card{
  position: relative;
  width: 7rem;
  background: #fff;
  font-size: .35rem;
}
.del{
  position:absolute;
  top:.3rem;
  right: 0;
  width: .7rem;
  height: 1rem;
}
</style>