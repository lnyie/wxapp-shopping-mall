<template>
    <div class="personal">
      <div class="avatar">
        <div class="avatarArea" v-if="hasUserInfo">
          <img :src="userInfo.avatarUrl">
          <p>{{ userInfo.nickName }}</p>
        </div>
        <div class="avatarArea" v-else @click="doLogin">
          <img src="https://dcdn.it120.cc/2020/04/27/a10886d6-d6d0-439b-83c8-fcb879af11ca.png" >
          <p>请登录</p>
        </div>
      </div>

      <div class="content-area">
        <div class="fav-floor">
          <div @click="toFavGoodsPage('收藏的店铺')">
            <p>0</p>
            <p>收藏的店铺</p>
          </div>
          <div @click="toFavGoodsPage('收藏的商品')">
            <p>0</p>
            <p>收藏的商品</p>
          </div>
          <div @click="toFavGoodsPage('关注的商品')">
            <p>0</p>
            <p>关注的商品</p>
          </div>
          <div @click="toFavGoodsPage('我的足迹')">
            <p>0</p>
            <p>我的足迹</p>
          </div>
        </div>

        <div class="my-orders">
          <div class="my-orders__title">
            我的订单
          </div>
          <div class="my-orders__action">
            <div @click="toOrderPage(1)">
              <i class="iconfont icon-daifukuan"></i>
              <p>待付款</p>
            </div>
            <div @click="toOrderPage(2)">
              <i class="iconfont icon-daishouhuo"></i>
              <p>待收货</p>
            </div>
            <div @click="toOrderPage(3)">
              <i class="iconfont icon-refund"></i>
              <p>退款/退货</p>
            </div>
            <div @click="toOrderPage(0)">
              <i class="iconfont icon-dingdan"></i>
              <p>全部订单</p>
            </div>
          </div>
        </div>

        <div class="address" @click="toAddressManagementPage">
          <span>收货地址管理</span>
          <i class="iconfont icon-iconfontjiantou6"></i>
        </div>

        <div class="after-sale-service">
          <div class="contact" @click="callMe">
            <span>联系客服</span>
            <i>15523322110</i>
          </div>
          <div class="feedback" @click="toFeedBack">
            <span>意见反馈</span>
          </div>
          <div class="aboutus" @click="toAboutUSPage">
            <span>关于我们</span>
          </div>
        </div>
      </div>

      <login v-if="showLogin" @hideLogin="hideLogin" @loginSuccess="loginSuccess" ></login>
    </div>
</template>

<script>
  import Login from '@/pages/login/index'
  const WXAPI = require('apifm-wxapi')
  WXAPI.init('lnyie')

  export default {
    name: 'index',
    data() {
      return {
        userInfo: {},
        showLogin: false,
        hasUserInfo: false
      }
    },
    onShow() {
      const that = this
      try {
        const token = wx.getStorageSync('token')
        const userInfo = wx.getStorageSync('userInfo')
        if (token && userInfo) {
          // Do something with return value
          this.userInfo = JSON.parse(userInfo)
          this.hasUserInfo = true
        }else {
          this.hasUserInfo = false
          // no token, get token
          wx.removeStorageSync('userInfo')
          wx.removeStorage({
            key: 'token',
            success () {
              that.showLogin = true
            }
          })
        }
      } catch (e) {
        wx.removeStorageSync('userInfo')
        wx.removeStorage({
          key: 'token',
          success () {
            that.showLogin = true
          }
        })
        // Do something when catch error
      }
    },
    methods: {
      hideLogin() {
        this.showLogin = false
      },
      doLogin() {
        this.showLogin = true
      },
      loginSuccess() {
        if (getCurrentPages().length != 0) {
          //刷新当前页面的数据
          getCurrentPages()[getCurrentPages().length - 1].onShow();
        }
      },
      toOrderPage(activeIdx) {
        const token = wx.getStorageSync('token')
        if(!token) {
          this.doLogin()
          return
        }
        this.$router.push({ path: '/pages/order/index', query: { activeIdx: activeIdx } })
      },
      toFavGoodsPage(favName) {
        const token = wx.getStorageSync('token')
        if(!token) {
          this.doLogin()
          return
        }
        this.$router.push({path: '/pages/favGoods/index', query: {favName: favName}})
      },
      toAddressManagementPage() {
        this.$router.push({path: '/pages/addressManagement/index'})
      },
      callMe() {
        wx.makePhoneCall({
          phoneNumber: '15523322110'
        })
      },
      toFeedBack() {
        this.$router.push({path: '/pages/feedback/index'})
      },
      toAboutUSPage() {
        this.$router.push({path: '/pages/aboutus/index'})
      },

    },
    components: {
      Login
    }
  }
</script>

<style lang="less" scoped>
  @import "../../utils/css/iconfont.css";
.personal {
  position: relative;
  width: 100%;
  .avatar {
    /*z-index: -1000;*/
    position: relative;
    width: 100%;
    height: 400rpx;
    background-color: #25d2fe;
    .avatarArea {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 140rpx;
      height: 140rpx;
      background-color: #fff;
      border-radius: 50%;
      text-align: center;
      img {
        margin-top: 5rpx;
        width: 130rpx;
        height: 130rpx;
        border-radius: 50%;
      }
      p {
        margin-top: 20rpx;
        color: #fff;
      }
    }
  }

  .content-area {
    position: relative;
    z-index: 500;
    width: 100%;
    padding: 0 16rpx 16rpx 16rpx;
    box-sizing: border-box;
    .fav-floor {
      margin: -35rpx 0 20rpx 0;
      width: 100%;
      height: 120rpx;
      background: #f5f5f5;
      display: flex;
      div {
        flex: 1;
        text-align: center;
        height: 120rpx;
        padding: 10rpx 0;
        p {
          margin-top: 10rpx;
          font-size: 14px;
        }
      }
    }
    .my-orders {
      width: 100%;
      background: #f5f5f5;
      &__title {
        width: 100%;
        height: 88rpx;
        line-height: 88rpx;
        border-bottom: 2rpx solid #ddd;
        padding-left: 30rpx;
        box-sizing: border-box;
      }
      &__action {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 25rpx 0;
        div {
          flex: 1;
          text-align: center;
          .iconfont {
            font-size: 70rpx;
            color: #25d2fe;
          }
          p {
            font-size: 16px;
          }
        }
      }
    }

    .address {
      width: 100%;
      background: #f5f5f5;
      margin-top: 20rpx;
      padding: 20rpx;
      box-sizing: border-box;
      line-height: 100%;
      i {
        float: right;
      }
    }

    .after-sale-service {
      width: 100%;
      background-color: #f5f5f5;
      margin-top: 20rpx;
      padding: 20rpx;
      box-sizing: border-box;
      line-height: 100%;
      div {
        height: 85rpx;
        line-height: 85rpx;
        border-bottom: 2rpx solid #ddd;
        &:last-child {
          border-bottom: none;
        }
      }
      .contact {
        i {
          float: right;
          color: dodgerblue;
        }
      }
    }
  }
}
</style>
