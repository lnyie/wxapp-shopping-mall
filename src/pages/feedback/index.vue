<template>
    <div class="feedback">
      <textarea id="fullArea" rows="10" auto-focus :value="feedbackVal"@input="changeVal" placeholder="欢迎提交反馈内容"></textarea>
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="small" @click.prevent="toSubmit">提交反馈</van-button>
      <van-toast id="van-toast" />
    </div>
</template>

<script>
  import Toast from '~/@vant/weapp/dist/toast/toast';

  export default {
    name: 'index',
    data() {
      return {
        feedbackVal: '',
      }
    },
    methods: {
      toSubmit() {
        this.feedbackVal = ''
        Toast({
          type: 'success',
          message: '感谢您的反馈',
          duration: '1500'
        })
      },
      changeVal(e) {
        this.feedbackVal = e.mp.detail.value
      }
    }
  }
</script>

<style lang="less" scoped>
.feedback {
  padding: 20rpx;
  #fullArea {
    width: 100%;
    border: 4px solid #f5f5f5;
    border-radius: 5px;
    margin-bottom: 20rpx;
  }
}
</style>
