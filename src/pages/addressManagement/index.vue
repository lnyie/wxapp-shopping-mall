<template>
    <div class="addressManagement">
      <van-panel class="addressBox" v-for="(item, index) in addressArr" :key="index" :title="'收货人：'+item.nickName" :desc="'联系电话：'+item.phoneNum">
        <view class="address">收货地址：{{ item.province + item.city + item.county + item.detailAddress }}</view>
      </van-panel>

      <div class="bottomArea">
        <van-button block type="primary" size="small" @click="toAddPage">新增地址</van-button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        addressArr: []
      }
    },
    methods: {
      toAddPage() {
        this.$router.push({path: '/pages/addressManagement/add'})
      }
    },
    onLoad() {
      this.addressArr = wx.getStorageSync('addressArr') || []

    }
  }
</script>

<style lang="less" scoped>
.addressManagement {
  .addressBox {
    display: block;
    margin-bottom: 40rpx;
    .address {
      font-size: 24rpx;
      color: #969799;
      text-indent: 30rpx;
    }
  }
  
  .bottomArea {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
