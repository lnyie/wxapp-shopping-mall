<template>
    <div class="search">
      <van-search
        input-align="center"
        placeholder="请输入搜索关键词"
        :value="searchValue"
        @search="toSearch"
      />

      <div class="nav">
        <div @click="changeIndex(index)" class="item" :class="{ active: selectedIndex === index }" v-for="(item, index) in navList" :key="index">
          {{ item }}
        </div>
      </div>

      <a :href="'/pages/detail/index?id=' + item.id" v-for="item in GoodsByCategoryList" :key="item.id">
        <van-card
          :price="item.minPrice"
          :title="item.name"
          :thumb="item.pic"
          lazy-load
        >
          <div slot="num" class="saleCount">
            销量：{{ item.numberSells }}
          </div>
        </van-card>
      </a>
      <div class="noData" v-if="GoodsByCategoryList.length === 0">
        暂无数据
      </div>

    </div>
</template>

<script>
  const WXAPI = require('apifm-wxapi')

  export default {
    name: 'index',
    data() {
      return {
        GoodsByCategoryList: [],
        noSortGoodsList: [],
        categoryId: '',
        searchValue: '',
        navList: ['综合', '销量', '价格'],
        selectedIndex: 0,
      }
    },
    methods: {
      getGoodsBy(params) {
        WXAPI.goods(params).then(res => {
          let { code, data } = res
          if(code === 0) {
            this.GoodsByCategoryList = data
            this.noSortGoodsList = [...data]
          }else if(code === 700) {
            this.GoodsByCategoryList = []
            this.noSortGoodsList = []
          }
        })
      },
      toSearch(e) {
        this.searchValue = e.mp.detail
        this.getGoodsBy({ k: this.searchValue })
      },
      changeIndex(index) {
        this.selectedIndex = index
        if(index === 0) {
          this.GoodsByCategoryList = [...this.noSortGoodsList]
        }
        if (index === 1) {
          this.GoodsByCategoryList.sort((a, b) => {
            return a.numberSells - b.numberSells // 升序
          })
        }
        if (index === 2) {
          this.GoodsByCategoryList.sort((a, b) => {
            return a.minPrice - b.minPrice // 升序
          })
        }
      },
    },
    onLoad() {
      WXAPI.init('lnyie')
      const { categoryId, categoryName, searchVal } = this.$root.$mp.query
      if(categoryId && categoryName) {
        this.categoryId = categoryId
        this.searchValue = categoryName
        this.getGoodsBy({categoryId: this.categoryId})
      }else {
        this.searchValue = searchVal
        this.getGoodsBy({k: this.searchValue})
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav {
    width: 100%;
    height: 100rpx;
    border-bottom: 1px solid #aaa;
    display: flex;
    background-color: #fff;
    .item {
      flex: 1;
      text-align: center;
      line-height: 100rpx;
      &.active {
        color: #25d2fe;
      }
    }
  }
  .saleCount {
    float: right;
  }
.noData {
  padding: 30rpx;
  text-align: center;
  font-size: 16px;
  color: #969799;
}
</style>
