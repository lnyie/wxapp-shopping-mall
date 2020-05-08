<template>
  <div class="login">
    <van-popup
      custom-style="width: 70%;border-radius: 5rpx"
      :show="true"
      close-on-click-overlay="false"
    >
      <div class="content">
        <img class="avatar" src="https://dcdn.it120.cc/2020/04/27/a10886d6-d6d0-439b-83c8-fcb879af11ca.png" alt="">
        <i class="title">授权登录</i>
        <hr>
        <p>・请授权小程序登录</p>
        <p>・我们不会公布您的信息</p>
        <p>・只是为了给您提供更好的服务</p>
        <button
          type="primary"
          class="allowBtn"
          open-type="getUserInfo"
          @getuserinfo="getUserInfo">允许</button>
        <button type="default" @click="hideLogin">暂不登录</button>
      </div>
    </van-popup>
    <van-toast id="van-toast" />
    <view class="icon van-icon van-icon van-icon-upgrade van-icon-upgrade" style="font-size: 32rpx;"></view>
  </div>
</template>

<script>
  import Toast from '~/@vant/weapp/dist/toast/toast';
  const WXAPI = require('apifm-wxapi')
  WXAPI.init('lnyie')

  export default {
    name: 'index',
    data() {
      return {
        userInfo: {},
      }
    },
    onLoad() {

    },
    methods: {
      getUserInfo(e) {
        // 保存用户信息
        this.userInfo = e['mp']['detail']
        console.log(e)
        wx.setStorageSync("userInfo", e['mp']['detail']['rawData'])
        const that = this
        // 小程序登录
        wx.login({
          success: function (res) {
            const code = res.code; // 微信登录接口返回的 code 参数，下面登录接口需要用到
            // 开始注册用户
            const iv = res.iv;
            const encryptedData = res.encryptedData;
            // 下面开始调用注册接口
            WXAPI.register_complex({
              code: code,
              encryptedData: that.userInfo.encryptedData,
              iv: that.userInfo.iv
            }).then(function (res) {
              // 注册接口返回结果
              console.log(res)
              if(res.code == 0 || res.code == 10000) {
                // 注册成功
                that.doLogin()
              }else {
                Toast({
                  type: 'fail',
                  message: '获取用户信息出错，请重试',
                  duration: '500',
                  onClose: () => {
                    that.hideLogin()
                  }
                })
              }
              // 因为code只能被使用一次,所以这里获取的code不能再用来登录/{domain}/user/wxapp/login了
            })
          }
        })
      },
      doLogin() {
        const that = this
        // 开始登录
        wx.login({
          success: function (res) {
            const code = res.code; // 微信登录接口返回的 code 参数，下面登录接口需要用到
            WXAPI.login_wx(code).then(function (res) {
              // 登录接口返回结果
              if(res.code == 0) {
                console.log(res)
                let { openid, token } = res.data
                that.userInfo.openid = openid
                // 把token存再wxStorage中
                console.log(token)
                wx.setStorageSync("token", token)
                Toast({
                  type: 'success',
                  message: '登录成功',
                  duration: '500',
                  onClose: () => {
                    that.$emit('loginSuccess')
                    that.hideLogin()
                  }
                })
              }else {
                Toast({
                  type: 'fail',
                  message: '登录失败',
                  duration: '500'
                })
              }
            })
          }
        })
      },
      hideLogin() {
        this.$emit('hideLogin')
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    position: relative;
    z-index: 1000;
  }
.content {
  text-align: center;
  padding: 50rpx;
  color: #ccc;
  .avatar {
    width: 80rpx;
    height: 80rpx;
  }
  .title {
    font-size: 14px;
    color: #000;
  }
  hr {
    height: 1px;
    background-color: #ededed;
    margin: 10rpx 0 20rpx 0;
  }
  p {
    font-size: 12px;
    margin-bottom: 10rpx;
  }
  button {
    height: 60rpx;
    line-height: 60rpx;
    font-size: 14px;
  }
  .allowBtn {
    margin: 30rpx 0 15rpx 0;
  }
}
</style>
