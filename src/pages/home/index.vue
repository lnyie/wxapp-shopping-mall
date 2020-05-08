<template>
    <div class="home">
      <van-search
        input-align="center"
        placeholder="请输入搜索关键词"
        @click="toSearchPage"
      />

      <div>
        <swiper
          class="swiperBox"
          indicator-dots
          autoplay
          circular
        >
          <block v-for="(item,index) in swiperImgList" :key="index">
            <swiper-item class="imgbox">
              <a href="">
                <img :src="item.picUrl">
              </a>
            </swiper-item>
          </block>
        </swiper>
      </div>

      <div class="nav-floor">
        <ul>
          <li v-for="item in navImgList" :key="item.id" @click="toNavPage(item.name)">
              <img :src="item.icon">
              <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>

      <div class="fashion-girl-floor floor">
        <div class="floor-title">
          <i class="title">时尚女装</i>
        </div>
        <div v-for="item in fashionGirlList" :key="item.id" class="fashion-girl-content" @click="toSearchListPage({categoryId: item.id, categoryName: item.name, searchVal: item.name})">
          <img :src="item.icon">
          <p>{{ item.name }}</p>
        </div>
      </div>

      <div class="recommended-goods-floor floor">
        <div class="floor-title">
          <i class="title">推荐商品</i>
        </div>
        <div class="recommended-goods-content">
          <a v-for="item in recommendedGoodsList" :key="item.id" :href="'/pages/detail/index?id=' + item.id" class="goodsbox">
            <image lazy-load :src="item.pic" class="goodsImg"></image>
            <div class="goodsinfo">
              <p>{{ item.name }}</p>
              <i class="dis_price">&yen;{{ item.minPrice }}</i>
              <i class="old_price">&yen;{{ item.originalPrice }}</i>
              <i class="salecount">销量{{ item.numberSells }}件</i>
            </div>

          </a>
        </div>
      </div>
    </div>
</template>

<script>
  import { getNavItem, getFashionGirl, getRecommend } from '@/api/home'
  const WXAPI = require('apifm-wxapi')

  export default {
    name: 'index',
    data () {
      return {
        swiperImgList: [],
        navImgList: [],
        fashionGirlList: [],
        recommendedGoodsList: []
      }
    },
    methods: {
      async getNavItem() {
        const res = await getNavItem()
        let { code, data } = res
        if(code === 0) {
          this.navImgList = data
        }
      },
      async getFashionGirl() {
        const res = await getFashionGirl()
        let { code, data } = res
        if(code === 0) {
          this.fashionGirlList = data
        }
      },
      async getRecommend() {
        const res = await getRecommend()
        let { code, data } = res
        if(code === 0) {
          this.recommendedGoodsList = data
        }
      },
      toSearchPage() {
        this.$router.push({path: '/pages/search/index'})
      },
      toSearchListPage(params) {
        this.$router.push({path: '/pages/searchList/index', query: params})
      },
      toNavPage(navName) {
        this.$router.push({path: '/pages/newcomerZone/index', query: {navName: navName}})
      }
    },
    onShareAppMessage: function(){
      return {
        title: '清凉夏日商城',
        path: 'pages/home/index'
      }
    },
    onLoad() {
      WXAPI.init('lnyie')
      this.getNavItem()
      this.getFashionGirl()
      this.getRecommend()
      // 获取轮播图
      WXAPI.banners().then(res => {
        if(res.code == 0) {
          this.swiperImgList = res.data
        }
      })
    },

  }
</script>

<style lang="less" scoped>
  .swiperBox {
    width: 100%;
    height: 340rpx;
    .imgbox a {
      width: 100%;
      height: 340rpx;
    }
    .imgbox a img {
      width: 100%;
      height: 340rpx;
    }
  }

  .nav-floor ul{
    width: 100%;
    height: 190rpx;
    display: flex;
    li {
      margin-top: 24rpx;
      flex: 1;
      text-align: center;
      img {
        width: 85rpx;
        height: 85rpx;
      }
      span {
        display: block;
        font-size: 12px;
      }
    }
  }

  .floor {
    .floor-title {
      width: 100%;
      height: 88rpx;
      line-height: 88rpx;
      i {
        font-size: 16px;
      }
      &:before {
        float: left;
        content: '';
        width: 10rpx;
        height: 50rpx;
        margin: 19rpx 20rpx 0 0;
        background-color: #ff4444;
      }
    }
  }

  .fashion-girl-floor {
    .fashion-girl-content {
      width: 100%;
      height: 380rpx;
      padding: 20rpx 20rpx;
      margin-bottom: 40rpx;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 340rpx;
      }
      p {
        font-size: 12px;
        text-indent: 10px;
      }
    }
  }

  .recommended-goods-floor {
    padding: 0 20rpx;
    .recommended-goods-content {
      width: 100%;
      margin-top: 20rpx;
      .goodsbox {
        float: left;
        width: 350rpx;
        height: 440rpx;
        background-color: #f5f5f5;
        margin-bottom: 20rpx;
        font-size: 12px;
        &:nth-child(odd) {
          margin-right: 10rpx;
        }
        .goodsImg {
          width: 100%;
          height: 350rpx;
        }
        .goodsinfo {
          padding: 0 10rpx;
          p {
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-bottom: 5rpx;
          }
          .dis_price {
            float: left;
            color: #ff4444;
            font-weight: bold;
            font-size: 14px;
            margin: 0 20rpx 0 10rpx;
          }
          .old_price {
            float: left;
            font-size: 12px;
            text-decoration: line-through;
            margin-top: 5rpx;
          }
          .salecount {
            float: right;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
