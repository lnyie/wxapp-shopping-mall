<template>
    <div class="newcomerZone">
      <div class="topImg">
        <img src="../../../static/img/newcomerZone.png" v-if="navName === '新人专区'">
        <img src="../../../static/img/xiarixinpin.png" v-else-if="navName === '夏日新品'">
        <img src="../../../static/img/tejiazhuanqu.jpg" v-else-if="navName === '特价专区'">
        <img src="../../../static/img/huiyuanzhuanqu.jpg" v-else-if="navName === '会员专区'">
      </div>

      <div class="container">
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
  import { getRecommend } from '@/api/home'

  export default {
    name: 'index',
    data() {
      return {
        recommendedGoodsList: [],
        navName: ''
      }
    },
    onLoad() {
      this.getRecommend()
    },
    onShow() {
      this.navName = this.$root.$mp.query.navName
      const that = this
      wx.setNavigationBarTitle({
        title: that.navName
      })
    },
    methods: {
      async getRecommend() {
        const res = await getRecommend()
        let { code, data } = res
        if(code === 0) {
          this.recommendedGoodsList = data
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .newcomerZone {
    .topImg {
      img {
        width: 100%;
        height: 340rpx;
      }
    }

    .container {
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
  }
</style>
