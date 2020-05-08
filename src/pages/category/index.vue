<template>
    <div class="category">
      <van-search
        input-align="center"
        placeholder="请输入搜索关键词"
        @click="toSearchPage"
      />

      <div class="category_container">
        <van-sidebar :active-key="activeKey" @change="sideBarChange" class="left">
          <van-sidebar-item title="裙子" />
          <van-sidebar-item title="衣服" />
          <van-sidebar-item title="裤子" />
        </van-sidebar>
        <div class="right">
          <div v-if="activeKey === 0" class="content">
            <div @click="toSearchListPage({searchVal: '连衣裙'})">
              <i class="iconfont icon-tubiaozhizuomoban- lianyiqun"></i>
              <span>连衣裙</span>
            </div>
            <div @click="toSearchListPage({searchVal: '长裙吊带'})">
              <i class="iconfont icon-changqundiaodai diaodai"></i>
              <span>长裙吊带</span>
            </div>
            <div @click="toSearchListPage({searchVal: '短裙'})">
              <i class="iconfont icon-duanqun duanqun"></i>
              <span>短裙</span>
            </div>
          </div>
          <div v-if="activeKey === 1" class="content">
            <div @click="toSearchListPage({searchVal: 'T恤'})">
              <i class="iconfont icon-icon-1 duanxiu"></i>
              <span>T恤</span>
            </div>
          </div>
          <div v-if="activeKey === 2" class="content">
            <div @click="toSearchListPage({searchVal: '牛仔裤'})">
              <i class="iconfont icon-icon-test niuzaiku"></i>
              <span>牛仔裤</span>
            </div>
            <div @click="toSearchListPage({searchVal: '短裤'})">
              <i class="iconfont icon-duanku- duanku"></i>
              <span>短裤</span>
            </div>
            <div @click="toSearchListPage({searchVal: '阔腿裤'})">
              <i class="iconfont icon-kuotuiku kuotuiku"></i>
              <span>阔腿裤</span>
            </div>
            <div @click="toSearchListPage({searchVal: '运动裤'})">
              <i class="iconfont icon-huabankaobei yundongku"></i>
              <span>运动裤</span>
            </div>
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
        activeKey: 0
      }
    },
    methods: {
      sideBarChange(e) {
        console.log(e.mp.detail)
        this.activeKey = e.mp.detail
      },
      toSearchPage() {
        this.$router.push({ path: '/pages/search/index'})
      },
      toSearchListPage(params) {
        this.$router.push({path: '/pages/searchList/index', query: params})
      }
    },
    onShareAppMessage: function(){
      return {
        title: '夏日清凉商城-分类',
        path: 'pages/category/index'
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../utils/css/iconfont.css";
  .category_container {
    display: flex;
    .right {
      flex: 1;
      text-align: center;
      .content {
        div {
          width: 33.33%;
          float: left;
          .lianyiqun {
            color: #e2a6d9;
          }
          .diaodai {
            color: #e2c7ff;
          }
          .duanqun {
            color: #f4a9bf;
          }
          .duanxiu {
            color: #2bac9a;
          }
          .niuzaiku {
            color: #a7c6d1;
          }
          .duanku {
            color: #f7c4c0;
          }
          .kuotuiku {
            color: #e3bbce;
          }
          .yundongku {
            color: #25d2fe;
          }
          i {
            font-size: 100rpx;
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
  }

</style>
