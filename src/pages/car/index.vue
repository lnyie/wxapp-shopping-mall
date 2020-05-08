<template>
    <div class="shopcar">
      <div class="address">
        <div @click="getAddress" v-if="!address.userName" class="no-add">
          <span>没有地址</span>
          <i class="iconfont icon-iconfontjiantou6"></i>
        </div>
        <div @click="getAddress" v-else class="has-add">
          <div class="msg">
            <span>收货人： {{ address.userName }}</span>
            <span>{{ address.telNumber }}</span>
            <i class="iconfont icon-iconfontjiantou6"></i>
          </div>
          <div class="addmsg">
            {{ detailAddress }}
          </div>
        </div>
        <img src="../../../static/img/tiaowen.png">
      </div>

      <div class="goodsList">
        <div class="item" v-for="(val, key) in carList" :key="key">
          <van-checkbox class="singleCheck" :value="val.checkStatus" @change="singleCheckChange(val)"></van-checkbox>
          <van-card
            :price="val.minPrice"
            :title="val.name"
            :thumb="val.pic"
          >
            <view slot="num" class="numStepper">
              <div class="count">
                <span @click="subOne(val)">-</span>
                <input type="text" v-model="val.carNum" @change="countChange">
                <span @click="plusOne(val)">+</span>
              </div>
            </view>
          </van-card>
        </div>
      </div>

      <div class="nogoodsList" v-if="carListKey.length === 0">
        <img src="../../../static/img/kong.png">
        <p>空空如也</p>
      </div>

      <van-submit-bar
        class="submitBar"
        :price="totalPrice"
        button-text="结算"
        @submit="settleAccounts"
      >
        <van-checkbox :value="isAll" @change="checkAllChange"></van-checkbox>
      </van-submit-bar>

      <login v-if="showLogin" @hideLogin="hideLogin" @loginSuccess="loginSuccess"></login>
      <van-toast id="van-toast" />
    </div>
</template>

<script>
  import Toast from '~/@vant/weapp/dist/toast/toast';
  import Login from '@/pages/login/index'
  const WXAPI = require('apifm-wxapi')

  export default {
    name: 'index',
    data() {
      return {
        showLogin: false,
        carList: {},
        address: {},
        token: ''
      }
    },
    computed: {
      detailAddress: function() {
        if (this.address.userName) {
          return this.address.provinceName + this.address.cityName + this.address.countyName + this.address.detailInfo
        } else {
          return ''
        }
      },
      // 商品的总价
      totalPrice: function() {
        // 总价格
        let price = 0
        Object.keys(this.carList).forEach(item => {
          if (this.carList[item].checkStatus === true) {
            price += this.carList[item].minPrice * this.carList[item].carNum * 100
          }
        })
        return price;
      },
      totalCount() {
        let count = 0
        Object.keys(this.carList).forEach(item => {
          if(this.carList[item].checkStatus === true) {
            count += this.carList[item].carNum
          }
        })
        return count
      },
      // 是否全选
      isAll() {
        let isAll = true
        Object.keys(this.carList).forEach(item => {
          if (this.carList[item].checkStatus === false) {
            isAll = false
          }
        })
        return isAll
      },
      carListKey() {
        return Object.keys(this.carList)
      }
    },
    onLoad() {
      WXAPI.init('lnyie')
      this.carList = wx.getStorageSync('carlist') || {}
      this.address = wx.getStorageSync('address') || {}
    },
    onShow() {
      this.carList = wx.getStorageSync('carlist') || {}
      this.token = wx.getStorageSync('token') || null
    },
    methods: {
      hideLogin() {
        this.showLogin = false
      },
      checkAllChange(event) {
        let isAll = event.mp.detail

        Object.keys(this.carList).forEach(item => {
          this.carList[item].checkStatus = isAll
        })
        wx.setStorageSync('carlist', this.carList)
        this.showOnce()
      },
      singleCheckChange(val) {
        val.checkStatus = !val.checkStatus
        wx.setStorageSync('carlist', this.carList)
        this.showOnce()
      },
      getAddress() {
        wx.chooseAddress({
          success: (res) => {
            this.address = res
            wx.setStorageSync('address', res)
          }
        })
      },
      showOnce() {
        if (getCurrentPages().length != 0) {
          getCurrentPages()[getCurrentPages().length - 1].onShow();
        }
      },
      countChange() {
        wx.setStorageSync('carlist', this.carList)
      },
      plusOne(val) {
        val.carNum++
        wx.setStorageSync('carlist', this.carList)
        this.showOnce()
      },
      subOne(val) {
        val.carNum--
        if (val.carNum <= 0) {
          wx.showModal({
            title: '提示',
            content: '确定删除当前商品？',
            success: res => {
              if (res.confirm) {
                delete this.carList[val.id]
                this.carList = { ...this.carList }
              } else if (res.cancel) {
                val.carNum = 1
              }
              wx.setStorageSync('carlist', this.carList)
              this.showOnce()
            }
          })
        }else {
          wx.setStorageSync('carlist', this.carList)
          this.showOnce()
        }

      },
      // 结算
      settleAccounts() {
        const that = this
        try {
          const token = wx.getStorageSync('token')
          if (!token) {
            this.showLogin = true
          }else {
            this.loginSuccess()
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
      loginSuccess() {
        this.showOnce()
        if(this.token) {
          if(this.totalCount <= 0) {
            Toast({
              type: 'fail',
              message: '商品数量为0',
              duration: '1000'
            })
            return
          }
          if(Object.keys(this.address).length === 0) {
            Toast({
              type: 'fail',
              message: '请选择收货地址',
              duration: '1000'
            })
            return
          }
          let goodsJsonStr = []
          Object.keys(this.carList).forEach(item => {
            if(this.carList[item].checkStatus === true) {
              goodsJsonStr.push({
                goodsId: this.carList[item].id,
                number: this.carList[item].carNum,
                goodsPrice: this.carList[item].minPrice
              })
            }
          })
          WXAPI.orderCreate({
            token: this.token,
            goodsJsonStr: JSON.stringify(goodsJsonStr),
            address: JSON.stringify(this.address)
          }).then(res => {
            if(res.code === 0) {
              // 删除购物车中已提交的商品
              Object.keys(this.carList).forEach(item => {
                if(this.carList[item].checkStatus === true) {
                  delete this.carList[item]
                }
              })
              wx.setStorageSync('carlist', this.carList)
              // this.showOnce()
              // 跳转到订单详情
              this.$router.push({ path: '/pages/order/index' })
            }
          })
        }
      }
    },
    components: {
      Login
    }
  }
</script>

<style lang="less" scoped>
  @import "../../utils/css/iconfont.css";
  .address {
    .no-add {
      padding: 0 15rpx;
      display: flex;
      justify-content: space-between;
      line-height: 88rpx;
    }
    .has-add {
      padding: 0 15rpx;
      line-height: 88rpx;
      .msg{
        display: flex;
        justify-content: space-between;
      }
    }
    img {
      width: 100%;
      height: 14rpx;
      display: block;
    }
    border-bottom: 20rpx solid #f4f4f4;
  }

  .goodsList {
    margin-bottom: 120rpx;
    .item {
      padding-left: 35rpx;
      display: flex;
      align-items: center;
      background-color: #fafafa;
      .numStepper {
        float: right;
        .count {
          display: flex;
          font-size: 30rpx;
          span {
            width: 56rpx;
            height: 56rpx;
            background-color: #f2f3f5;
            text-align: center;
            line-height: 56rpx;

          }
          input {
            width: 56rpx;
            height: 56rpx;
            text-align: center;
            margin: 0 5rpx;
          }
        }
      }
    }
  }
  .nogoodsList {
    text-align: center;
    color: #cdcdcd;
    img {
      width: 200rpx;
      height: 200rpx;
    }
  }
</style>
