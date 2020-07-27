<template>
  <div>
      <div class="content">
        <div class="head-wrap">
            <header>
                <div class="wrap">
                     <img src="../../assets/images/public/arrow.jpg" alt="" @click="$router.back()">
                    <p v-if="isLogin">登陆</p>
                    <p v-else>注册</p>
                    <div class="zc" v-if="isLogin" @click="toRegist"> 注册</div>
                    <div class="zc" v-else @click="toLogin">登录</div>
                </div>
            </header>

        </div>
      </div>
      <div v-if="isLogin" class="temp">
        <label for="phone">手机号:</label><br>
        <input type="text" id="phone" v-model="loginInfo.phone"><br>
        <label for="pass">密码:</label><br>
        <input type="text" id="pass" v-model="loginInfo.password"><br>
        <p class="text" @click="toRegist">忘记密码？</p>
        <button class="btn" @click="loginbtn">登录</button>
      </div>
      <div v-else class="temp">
        <label for="nick">昵称:</label><br>
        <input type="text" id="nick" v-model="registInfo.nickname"><br>
        <label for="phone">手机号:</label><br>
        <input type="text" id="phone" v-model="registInfo.phone"><br>
        <label for="pass">密码:</label><br>
        <input type="text" id="pass" v-model="registInfo.password"><br>
        <p class="text" @click="toLogin">已有帐号，去登陆</p>
        <button class="btn" @click="registbtn">下一步</button>
        
         <!-- <input type="checkbox" class="privacy">
         我已阅读并同意使用条款和隐私 -->
     
        
        
      </div>

      
  </div>
</template>

<script>
import {getRegister,getLogin} from '../../util/axios';
export default {
  data(){
    return{
      isLogin:false,
      loginInfo:{
        phone:'',
        password:''
      },
      registInfo:{
         nickname:'',
         phone:'',
         password:'',
      },

    }
  },
  methods:{
    toRegist(){
      this.isLogin=false;
    },
    toLogin(){
      this.isLogin = true;
    },
    registbtn(){
      if(this.registInfo.nickname != '' && this.registInfo.phone !='' && this.registInfo.password != ''){
        getRegister(this.registInfo).then(res =>{
        if(res.code == 200){
           this.isLogin = true;
        }else{
          this.$toast(res.msg);
        }
      })
      }else{
        this.$toast('请输入所有内容')
      }
    },
    loginbtn(){
      if(this.loginInfo.phone !='' && this.loginInfo.password != ''){
        getLogin(this.loginInfo).then(res =>{
        if(res.code == 200){
          this.$toast.success('登录成功');
          //把登录信息储存到本地存储
          sessionStorage.setItem('userInfo',JSON.stringify(res.list));
          //登录成功之后就要跳转到首页
           this.$router.push("/main");
        }else{
          this.$toast(res.msg);
        }
      })
      }else{
        this.$toast('请输入所有内容')
      }
    }

  }

}
</script>

<style scpoed>
.content {
  width: 7.5rem;
  height: 0.9rem;
  margin: 0 auto;
}
.head-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.9rem;
  z-index: 1;
}
header {
  background-color: #f26b11;
  width: 7.5rem;
  height: 0.9rem;
  margin: 0 auto;
}
header .wrap {
  width: 7.1rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .wrap img {
  width: 0.17rem;
  height: 0.29rem;
}
header .wrap p {
  color: #fff;
  font-size: 0.4rem;
}
.zc{
    font-size: 0.34rem;
    color: beige;
}
.temp{
  width: 6rem;
  margin: 3rem auto;
}
label{
  font-size: .4rem;
}
input{
  width: 6rem;
  height: .4rem;
  margin: .2rem 0;
  border-bottom: 1px solid #6666;
}
.btn{
  width: 6rem;
  margin-top: .2rem;
  margin-bottom: .2rem;
  font-size: .4rem;
  color:#fff;
  line-height: .8rem;
  border-color: #f26b11;
  background-color: #f26b11;
}
.text{
  text-align: right;
  line-height: .5rem;
}
.privacy{
  width: .3rem;
  height: .3rem;
  vertical-align: middle;
  border: 1px solid #666;
}
  
</style>