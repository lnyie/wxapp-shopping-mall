<template>
    <div class="favGoods">
      <a v-for="(item, index) in favGoodsList" :href="'/pages/detail/index?id=' + item.goodsId" :key="index">
        <van-card
          :title="item.goodsName"
          :thumb="item.pic"
        />
      </a>
    </div>
</template>

<script>
  const WXAPI = require('apifm-wxapi')

  export default {
    name: 'index',
    data() {
      return {
        favName: '',
        token: '',
        favGoodsList: []
      }
    },
    onLoad() {
      WXAPI.init('lnyie')
      this.favName = this.$root.$mp.query.favName
      const that = this
      wx.setNavigationBarTitle({
        title: that.favName
      })
    },
    onShow() {
      this.token = wx.getStorageSync('token')
      this.getFavGoods()
    },
    methods: {
      getFavGoods() {
        WXAPI.goodsFavList({token: this.token}).then(res => {
          let { code, data } = res
          if(code === 0) {
            this.favGoodsList = data
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
