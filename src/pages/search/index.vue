<template>
    <div class="search">
      <van-search
        input-align="center"
        placeholder="请输入搜索关键词"
        @search="toSearchListPage"
        :value="queryVal"
      />

      <div class="his" v-if="queryList.length !== 0">
        <div class="title">
          <span>历史搜索</span>
          <icon type="clear" size="14" @click="clearHis"/>
        </div>
        <div class="list">
          <div class="item" v-for="(item, index) in queryList" :key="index" @click="clickSearch(item)">
            {{ item }}
          </div>
        </div>
      </div>

      <div class="hot" v-if="queryList.length === 0">
        <div class="title">
          <span>搜索推荐</span>
        </div>
        <div class="list">
          <div class="item" v-for="(item, index) in hotSearch" :key="index" @click="clickSearch(item)" >
            {{ item }}
          </div>
        </div>
      </div>


    </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        queryList: [],
        queryVal: '',
        hotSearch: ['牛仔裤', '连衣裙', '女装']
      }
    },
    onLoad() {
      let res = wx.getStorageSync('query')
      this.queryList = res ? JSON.parse(res) : []
    },
    methods: {
      toSearchListPage(e) {
        this.queryVal = e.mp.detail
        if(this.queryVal) {
          this.queryList.unshift(this.queryVal)
          this.queryList = [...new Set(this.queryList)]
          wx.setStorageSync('query', JSON.stringify(this.queryList))
        }
        this.$router.push({ path: '/pages/searchList/index', query: { searchVal: this.queryVal }})
      },
      clickSearch(item) {
        this.queryVal = item
        this.queryList.unshift(this.queryVal)
        this.queryList = [...new Set(this.queryList)]
        wx.setStorageSync('query', JSON.stringify(this.queryList))
        this.$router.push({ path: '/pages/searchList/index', query: { searchVal: this.queryVal }})
      },
      clearHis() {
        this.queryList = []
        wx.clearStorageSync()
      }
    }
  }
</script>

<style lang="less" scoped>
.his,.hot {
  width: 100%;
  padding: 0 30rpx;
  box-sizing: border-box;

  .title {
    display: flex;
    justify-content: space-between;
    line-height: 88rpx;
    height: 88rpx;
    font-size: 20px;
    icon {
      margin-top: 15rpx;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 20rpx 25rpx;
      background-color: #f7f8fa;
      margin-right: 30rpx;
      margin-bottom: 18rpx;
      font-size: 16px;
    }
  }

}
</style>
