<template>
  <div>
    <router-view/>
    <footer>
            <div class="con">
                <div class="wrap">
                    <router-link to='/indexCon' tag="div" active-class="first">
                        <p class="iconfont icon-shouye"></p>
                        <p>首页</p>
                    </router-link>
                    <router-link to='/shopCar' tag="div" active-class="first">
                        <p class="iconfont icon-gouwuche"></p>
                        <p>购物车</p>
                    </router-link>
                    
                    <router-link to='/main' tag="div" active-class="first">
                        <p class="iconfont icon-wode"></p>
                        <p>我的</p>
                    </router-link>
                </div>
            </div>

        </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
@import '../../assets/iconfont/iconfont.css';
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: transparent;
}
footer .con {
  width: 7.5rem;
  height: 1.2rem;
  margin: 0 auto;
  background-color: #fff;
}
footer .con .wrap {
  width: 7.1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer .con .wrap div {
  width: 0.9rem;
  text-align: center;
  color: #7d7d7d;
}
footer .con .wrap div .iconfont {
  font-size: 0.5rem;
  margin-bottom: 0.05rem;
}
footer .con .wrap div p {
  font-size: 0.22rem;
}
footer .con .wrap .first {
  color: #f26b11;
}
</style>