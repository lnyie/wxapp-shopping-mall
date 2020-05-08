<template>
  <div class="detail">
    <div>
      <swiper
        class="swiperBox"
        indicator-dots
        autoplay
        circular
      >
        <block v-for="(val, key) in goodsInfo.extJson" :key="key">
          <swiper-item class="imgbox">
            <img :src="val">
          </swiper-item>
        </block>
      </swiper>
    </div>

    <div class="goodsDetail">
      <div class="price">
        &yen;&nbsp;{{ goodsPrice }}
      </div>
      <div class="title">
        <div class="left">
          {{ title }}
        </div>
        <div class="right" @click="goodsFavPut">
          <i class="iconfont icon-icon-"></i>
          收藏
        </div>
      </div>
      <div class="express">
        快递：免运费
      </div>
    </div>

    <div class="comment floor">
      <div class="floor-title">
        <i class="title">商品评价</i>
      </div>
      <div class="noComment">
        <i class="iconfont icon-pinglun"></i>
        <span>暂无评论</span>
      </div>
    </div>

    <div class="goodsDetailImg floor">
      <div class="floor-title">
        <i class="title">商品详情</i>
      </div>
      <div v-for="(item, index) in pics" :key="index" class="picsBox">
        <img :src="item.pic">
      </div>
    </div>

    <div class="guessulike floor">
      <div class="floor-title">
        <i class="title">猜你喜欢</i>
      </div>
      <div class="recommended-goods-content">
          <a v-for="item in recommendedGoodsList" :key="item.id" :href="'/pages/detail/index?id=' + item.id" class="goodsbox clearfix">
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

    <div class="myunderline">
      ===== 我是有底线的 =====
    </div>

    <div class="bottomArea">
      <van-goods-action>

        <button open-type="share" class="shareBtn">
          <van-goods-action-icon
            icon="chat-o"
            text="转发"
          />
        </button>
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          @click="toCarPage"
        />
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          @click="addToShopcar"
        />
        <van-goods-action-button
          text="立即购买"
          @click="toBuy"
        />
      </van-goods-action>
    </div>
    <login v-if="showLogin" @hideLogin="hideLogin" @loginSuccess="loginSuccess"></login>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
  import { getGoodsDetail } from '@/api/detail'
  import { getRecommend } from '@/api/home'
  import Toast from '~/@vant/weapp/dist/toast/toast';
  import Login from '@/pages/login/index'
  const WXAPI = require('apifm-wxapi')

  export default {
    name: 'index',
    data() {
      return {
        goodsInfo: {},
        goodsPrice: '',
        title: '',
        pics: [],
        recommendedGoodsList: [],
        carList: {},
        showLogin: false,
        goodsId: ''
      }
    },
    methods: {
      async getGoodsDetail(params) {
        const res = await getGoodsDetail(params)
        let { code, data } = res
        if(code === 0) {
          this.goodsInfo = data
          let { minPrice, name } = data.basicInfo
          this.goodsPrice = minPrice
          this.title = name
          this.pics = data.pics
        }
      },
      async getRecommend() {
        const res = await getRecommend()
        let { code, data } = res
        if(code === 0) {
          this.recommendedGoodsList = data
        }
      },
      addToShopcar() {
        if(this.carList[this.goodsInfo.basicInfo.id]) {
          this.carList[this.goodsInfo.basicInfo.id].carNum++
        }else {
          this.carList[this.goodsInfo.basicInfo.id] = {
            ...this.goodsInfo.basicInfo,
            carNum: 1,
            checkStatus: true
          }
        }
        wx.setStorageSync('carlist', this.carList)
        wx.showToast({
          title: '加入购物车成功',
          icon: 'success',
          duration: 1000
        })
      },
      toCarPage() {
        this.$router.push({ path: '/pages/car/index', isTab: true })
      },
      hideLogin() {
        this.showLogin = false
      },
      goodsFavPut() {
        const that = this
        try {
          const token = wx.getStorageSync('token')
          if (!token) {
            this.showLogin = true
          }else {
            this.loginSuccess(token)
          }
        } catch (e) {
          wx.removeStorage({
            key: 'token',
            success () {
              that.showLogin = true
            }
          })
        }
      },
      loginSuccess(token) {
        WXAPI.goodsFavPut(token, this.goodsId).then(res => {
          console.log(res)
          if(res.code === 0) {
            Toast({
              type: 'success',
              message: '收藏成功',
              duration: '1000'
            })
          }
        })
      },
      toBuy() {
        Toast({
          type: 'success',
          message: '购买',
          duration: '1000'
        })
      }
    },
    components: {
      Login
    },
    onShareAppMessage: function(){
      return {
        title: this.title,
        path: 'pages/detail/index?goodsId=' + this.goodsId
      }
    },
    onLoad() {
      WXAPI.init('lnyie')
      this.goodsId = this.$root.$mp.query.id
      this.getGoodsDetail({id: this.goodsId})
      this.getRecommend()
      this.carList = wx.getStorageSync('carlist') || {}
    }
  }
</script>

<style lang="less">
  @import "../../utils/css/iconfont.css";
  page{
    background-color: #f4f4f4;
  }
.detail {
  padding-bottom: 140rpx;
  .swiperBox {
    width: 100%;
    height: 750rpx;
    .imgbox img{
      width: 100%;
      height: 100%;
    }
  }
  .goodsDetail {
    width: 100%;
    height: 300rpx;
    padding: 18rpx;
    background-color: #fff;
    .price {
      margin-top: 45rpx;
      margin-bottom: 40rpx;
      font-size: 36rpx;
      color: #eb4450;
    }
    .title {
      display: flex;
      .left {
        flex: 1;
        margin-right: 70rpx;
        font-size: 32rpx;
      }
      .right {
        border-left: 1px solid #ddd;
        width: 140rpx;
        text-align: center;
        font-size: 14px;
        color: #999;
      }
    }
    .express {
      color: #999;
      font-size: 28rpx;
      margin-top: 40rpx;
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

  .comment {
    width: 100%;
    background-color: #fff;
    margin-top: 20rpx;
    .noComment {
      padding: 20rpx;
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }

  .goodsDetailImg {
    width: 100%;
    background-color: #fff;
    margin-top: 20rpx;
    .picsBox {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }

  .guessulike {
    padding: 0 20rpx;
    .recommended-goods-content {
      width: 100%;
      margin-top: 20rpx;
      .goodsbox {
        float: left;
        width: 350rpx;
        height: 440rpx;
        background-color: #fff;
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
          height: 20rpx;
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

  .clearfix::after {
    content: '.';
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
  }

  .myunderline {
    float: bottom;
    font-size: 14px;
    text-align: center;
    color: #999;
  }
  .bottomArea {
    .shareBtn {
      padding: 0;
      background-color: #fff;
      &::after {
        border: none;
      }
    }
  }
}
</style>
