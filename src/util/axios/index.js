import http from './axios';

//接口轮播图封装
export function getBanner(){
     return  http.get('/api/getbanner');
 }
//分类信息接口
export function getCate(){
    return  http.get('/api/getcate');
}
//获取二级分类信息
export function  getcatetree(){
    return http.get('/api/getcatetree');
}
//限时秒杀接口
export function getSeckill(){
    return  http.get('/api/getseckill');
}
//商品信息信息接口
export function getIndexGoods(){
   return  http.get('/api/getindexgoods');
}
//获取分类商品
export function getGoods(params){
    return http.get('/api/getgoods',{
        params
    })   
}
//获取一个商品信息
export function getGoodsInfo(params){
    return http.get('/api/getgoodsinfo',{
        params
    })   
}
//会员注册
export function getRegister(data){
    return http.post('/api/register',data);
}
//会员登录
export function getLogin(data){
    return http.post('/api/login',data);
}
//购物车列表
export function cartlist(params) {
    return http.get('/api/cartlist', {
      params
    })
  }
// 购物车添加 
export function getCartAdd(data){
    return http.post('/api/cartadd',data);
}
//购物车修改
export function getCartEdit(data){
    return http.post('/api/cartedit',data);
}
//购物车删除
export function getCartDelete(data){
    return http.post('/api/cartdelete',data);
}