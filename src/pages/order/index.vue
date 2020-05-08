<template>
  <div class="order">
    <div class="topTab">
      <van-tabs :active="activeIdx" @change="activeIdxChange" color="#25d2fe" class="mytab">
        <van-tab title="全部"></van-tab>
        <van-tab title="待付款"></van-tab>
        <van-tab title="已付款"></van-tab>
        <van-tab title="退款/退货"></van-tab>
      </van-tabs>
    </div>

    <div class="orderList">
      <div class="singleOrder" v-for="(order, index) in orderList" :key="index">
        <van-card
          v-for="(goods, goodsIdx) in goodsMap[order.id]"
          :key="goodsIdx"
          :num="goods.number"
          :price="goods.amountSingle"
          :title="goods.goodsName"
          :thumb="goods.pic"
        >
        </van-card>
        <div class="totalPrice">
          共{{ order.goodsNumber }}件商品 总计：&yen;{{ order.amount }} (含运费0.00)
        </div>
        <div class="orderInfo">
          <div class="orderNum">
            订单号：{{ order.orderNumber }}
          </div>
          <van-button color="#25d2fe" plain size="mini" @click="toPay">支付</van-button>
        </div>
      </div>
    </div>

    <div class="noOrder" v-if="orderList.length === 0">
      暂无订单信息
    </div>

  </div>
</template>

<script>
  const WXAPI = require('apifm-wxapi')

  export default {
    name: 'index',
    data() {
      return {
        activeIdx: 0,
        orderList: [],
        goodsMap: {},
        token: '',
        status: ''
      }
    },
    onLoad() {
      WXAPI.init('lnyie')
    },
    onShow() {
      this.activeIdx = parseInt(this.$root.$mp.query.activeIdx)
      if(this.activeIdx) {
        this.activeIdxMappingStatus(this.activeIdx)
      }else {
        this.activeIdx = 0
        this.status = ''
      }
      this.token = wx.getStorageSync('token') || null
      if(this.token) {
        this.getOrderList(this.status)
      }
    },
    methods: {
      getOrderList(status) {
        WXAPI.orderList({
          token: this.token,
          status: status
        }).then(res => {
          console.log(res)
          let { code, data } = res
          if(code === 0) {
            this.orderList = data.orderList
            this.goodsMap = data.goodsMap
          }else {
            this.orderList = []
            console.log(this.orderList)
            this.goodsMap = {}
          }
        })
      },
      activeIdxChange(e) {
        this.activeIdx = e.mp.detail.name
        this.activeIdxMappingStatus(this.activeIdx)
        this.getOrderList(this.status)
      },
      activeIdxMappingStatus(activeIdx) {
        let mapping = {
          0: '',
          1: 0,
          2: 1,
          3: -1
        }
        this.status = mapping[activeIdx]
      }
    }
  }
</script>

<style lang="less" scoped>
  .order {
    overflow:hidden;
    .topTab {
      .mytab {
        width: 100%;
        position: fixed;
        z-index: 1000;
      }
    }
    .orderList {
      margin-top: 100rpx;
      .singleOrder {
        margin-bottom: 20rpx;
        background-color: #fafafa;
        .totalPrice {
          padding: 30rpx 20rpx;
          text-align: right;
          font-size: 24rpx;
          color: #9d9d9d;
          border-top: 1px solid #f2f2f2;
          border-bottom: 1px solid #f2f2f2;
        }
        .orderInfo {
          padding: 30rpx 20rpx;
          display: flex;
          justify-content: space-between;
          font-size: 24rpx;
          color: #9d9d9d;
        }
      }
    }
    .noOrder {
      padding: 50rpx;
      text-align: center;
    }
  }

</style>
