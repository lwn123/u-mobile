<template>
  <div class="container">
    <header class="header">
      <div class="wrap">
        <h1>
          <a href="#">
            <img :src="headerLogoImg" alt />
          </a>
        </h1>
        <input type="text" placeholder="寻找商品" @keyup.13="runProList" @click="runProList" />
        <div class="points">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
    <nav class="nav">
      <div class="wrap">
        <ul id="navList">
          <li
            v-for="(item,index) in navList"
            :key="item.id"
            :class="[flag == index? 'first':'']"
            @click="getIdx(index)"
          >
            <a href="#">{{item.name}}</a>
          </li>
        </ul>
        <div class="arrow">
          <img :src="arrowImg" alt />
        </div>
      </div>
    </nav>
    <div class="banner">
      <a href="#" v-for="item in bannerList" :key="item.id">
        <img :src="item.img" alt />
      </a>
    </div>
    <div class="icon-nav">
      <div class="item" v-for="item in iconNavList" :key="item.id">
        <a href="#">
          <img :src="item.img" alt />
          <p>{{item.name}}</p>
        </a>
      </div>
    </div>
    <div class="sale">
      <div class="left">
        <a href="#">
          <h3>
            <img :src="titleImg" alt />
            {{title}}
          </h3>
          <p class="des">{{des}}</p>
          <p class="time">
            <span>19</span>:
            <span>16</span>:
            <span>45</span>
            <i>秒杀</i>
          </p>
          <img :src="pic" alt class="pic" />
          <div class="price">
            <span class="span1">￥</span>
            <span class="span2">{{picPrice}}</span>
          </div>
        </a>
      </div>
      <div class="right">
        <div class="update clearfix">
          <a href="#">
            <h3>
              {{rightList[0].title}}
              <i>折</i>
            </h3>
            <p class="detail">{{rightList[0].detail}}</p>
            <img :src="rightList[0].img1" alt class="logo" />
            <img :src="rightList[0].img2" alt class="shop1" />
          </a>
        </div>
        <ul>
          <li class="first">
            <a href="#">
              <h3>{{rightList[1].title}}</h3>
              <p class="detail">{{rightList[1].detail}}</p>
              <img :src="rightList[1].img" alt />
            </a>
          </li>
          <li class="second">
            <a href="#">
              <h3>{{rightList[2].title}}</h3>
              <p class="detail">{{rightList[2].detail}}</p>
              <img :src="rightList[2].img" alt />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <img :src="bar" alt class="bar" />
    <div class="pro-list">
      <div id="app" class="wrap">
        <ul class="pro-nav">
          <li
            v-for="(item,index) in prodect"
            :class="[index==idx? 'first':'']"
            @click="change(index)"
            :key="item.id"
          >
            <a href="javascript:;">{{item.title}}</a>
          </li>
        </ul>
        <ul class="pro-detail">
          <li v-for="(detail,i) in prodect[idx].list" :key="i">
            <img :src="detail.img" alt />
            <div class="right">
              <p class="p1">{{detail.name}}</p>
              <p class="p2">
                <span>￥</span>
                {{detail.price}}
              </p>
              <p class="p3">{{detail.saleNum}}</p>
              <a href="#">{{detail.remark}}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 0,
      headerLogoImg: require("../../../assets/images/index_images/logo.jpg"),
      navList: [
        {
          id: 1,
          name: "推荐"
        },
        {
          id: 2,
          name: "女装"
        },
        {
          id: 3,
          name: "鞋包"
        },
        {
          id: 4,
          name: "居家"
        },
        {
          id: 5,
          name: "母婴儿童"
        },
        {
          id: 6,
          name: "美食"
        }
      ],
      arrowImg: require("../../../assets/images/index_images/arrow.jpg"),
      bannerList: [
        {
          id: 1,
          img: require("../../../assets/images/index_images/banner.jpg")
        },
        {
          id: 2,
          img: require("../../../assets/images/index_images/banner.jpg")
        }
      ],
      iconNavList: [
        {
          id: 1,
          img: require("../../../assets/images/index_images/icon_1.jpg"),
          name: "限时抢购"
        },
        {
          id: 2,
          img: require("../../../assets/images/index_images/icon_2.jpg"),
          name: "积分商城"
        },
        {
          id: 3,
          img: require("../../../assets/images/index_images/icon_3.jpg"),
          name: "联系我们"
        },
        {
          id: 4,
          img: require("../../../assets/images/index_images/icon_4.jpg"),
          name: "商品分类"
        }
      ],
      title: "限时秒杀",
      des: "每天零点场 好货秒不停",
      titleImg: require("../../../assets/images/index_images/timer.jpg"),
      pic: require("../../../assets/images/index_images/shop_5.jpg"),
      picPrice: "14.8",
      bar: require("../../../assets/images/index_images/bar.jpg"),
      rightList: [
        {
          id: 1,
          title: "品牌上新",
          detial: "每日9点 抢大牌",
          img1: require("../../../assets/images/index_images/brand.jpg"),
          img2: require("../../../assets/images/index_images/shop_1.jpg")
        },
        {
          id: 2,
          title: "每日十件",
          detial: "只为你挑选好货",
          img: require("../../../assets/images/index_images/shop_2.jpg")
        },
        {
          id: 3,
          title: "拼啊",
          detial: "超级好货拼团",
          img: require("../../../assets/images/index_images/shop_3.jpg")
        }
      ],
      idx: 0,
      prodect: [
        {
          title: "热门推荐",
          list: [
            {
              img: require("../../../assets/images/index_images/shop_4.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "立即抢购"
            },
            {
              img: require("../../../assets/images/index_images/shop_4.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "立即抢购"
            },
            {
              img: require("../../../assets/images/index_images/shop_4.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "立即抢购"
            }
          ]
        },
        {
          title: "发现好货",
          list: [
            {
              img: require("../../../assets/images/index_images/shop-6.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "加入购物车"
            },
            {
              img: require("../../../assets/images/index_images/shop-6.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "加入购物车"
            },
            {
              img: require("../../../assets/images/index_images/shop-6.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "加入购物车"
            }
          ]
        },
        {
          title: "只看专场",
          list: [
            {
              img: require("../../../assets/images/index_images/shop-7.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "点我购买"
            },
            {
              img: require("../../../assets/images/index_images/shop-7.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "点我购买"
            },
            {
              img: require("../../../assets/images/index_images/shop-7.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "点我购买"
            }
          ]
        },
        {
          title: "只看商品",
          list: [
            {
              img: require("../../../assets/images/index_images/shop-6.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "限时特价"
            },
            {
              img: require("../../../assets/images/index_images/shop-6.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "限时特价"
            },
            {
              img: require("../../../assets/images/index_images/shop-6.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              saleNum: "已售800件",
              remark: "限时特价"
            }
          ]
        }
      ]
    };
  },
  methods: {
    runProList() {
      this.$router.push({
        path: "/prolist"
      });
    },
    getIdx(i) {
      this.flag = i;
    },
    change(i) {
      this.idx = i;
    }
  }
};
</script>

<style scoped>
@import "../../../assets/css/index.css";
</style>