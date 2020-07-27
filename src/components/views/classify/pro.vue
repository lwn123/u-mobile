<template>
<main>
    <van-sidebar v-model="activeKey"  @change="onChange">
        <van-sidebar-item  v-for="item in leftList " :key="item.id" :title="item.catename" />
    </van-sidebar>
    <van-grid v-if="rightList==undefined" class="notext right">
        暂无数据
    </van-grid>
    <van-grid :column-num="3" :border="false" center v-else class="right" >
        <van-grid-item v-for="item in rightList" :key="item.id" :to='"/proList?id="+item.id'>
            <van-image :src="$imgUrl+item.img"  />
                {{item.catename}}
        </van-grid-item>
    </van-grid>
   
</main>
</template>
<script>
import {
    getCate,getcatetree
} from '../../../util/axios';
export default {
    data(){
        return{
            activeKey:0,
            leftList:[],
            rightList:[],
        }
    },
    mounted(){
        
        getcatetree().then(res => {
            this.leftList = res.list;
            this.rightList = res.list[this.activeKey].children;

        })
    },
    methods:{
         onChange(){
             this.rightList = this.leftList[this.activeKey].children;
         }
    }

}
</script>
<style lang="" scoped>
 main {
  position: relative;
  height: 10rem;
  margin-top: 0.9rem;
}
main .van-sidebar {
  position: fixed;
  top: 0.9rem;
  left: 50%;
  margin-left: -3.75rem;
  width: 1.63rem;
  height: 100%;
}
.van-grid{
    display: flex;
}
.van-image{
    width: 1.4rem;
    height: 1.5rem;
    margin-bottom: .2rem;
}
.notext{
    flex: 1;
    align-content: center;
    justify-content: center;
    font-size: .5rem;
    font-weight: bold;
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

</style>