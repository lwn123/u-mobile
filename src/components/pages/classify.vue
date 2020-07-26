<template>
    <div class="content">
        <div class="head-wrap">
            <header>
                <div class="wrap">
                    <img src="../../assets/images/public/arrow.jpg" alt="">
                    <p>商品分类</p>
                    <div>
                        <span></span>
                        <span class="two"></span>
                        <span></span>
                    </div>
                </div>
            </header>

        </div>
      
       <my-main></my-main>
    </div>
</template>
<script>
import myMain from '../views/classify/pro';
export default {
    components:{
      myMain
    }
}
</script>
<style lang="" scpoed>
.content {
  width: 7.5rem;
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
  font-size: 0.34rem;
}
header .wrap span {
  display: inline-block;
  width: 0.12rem;
  height: 0.12rem;
  background-color: #fff;
  border-radius: 50%;
}
header .wrap .two {
  margin: 0 0.1rem;
}
</style>