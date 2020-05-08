<template>
    <div class="add">
      <van-cell-group>
        <van-field
          :value="nickName"
          @input="nickNameChange"
          required
          clearable
          label="收货人姓名"
          placeholder="请输入收货人姓名"
        />
        <van-field
          clearable
          :value="phoneNum"
          @input="phoneNumChange"
          label="联系电话"
          placeholder="请输入联系电话"
          required
          :border="true"
        />
        <van-field
          readonly
          clearable
          :value="areaStr"
          label="所在地区"
          placeholder="北京市-北京市-东城区"
          required
          :border="true"
          @click="selectArea"
        />
        <van-field
          clearable
          :value="detailAddress"
          @input="detailAddressChange"
          label="详细地址"
          placeholder="请输入详细地址"
          required
          :border="true"
        />
      </van-cell-group>
      <van-popup
        :show="isShow"
        position="bottom"
        custom-style="height: 30%;"
        @close="popupClose"
      >
      <van-area :area-list="areaList" value="110101" @confirm="completeFn" @cancel="closeFn"/>
      </van-popup>
      <van-button block type="primary" size="small" @click="addToStorage">完成</van-button>
    </div>
</template>

<script>
import areaList from '../../../static/js/area'

  export default {
    name: 'add',
    data() {
      return {
        nickName: '',
        phoneNum: '',
        area: '',
        detailAddress: '',
        isShow: false,
        areaList: {},
        selectedArea: [{code: "110000", name: "北京市"},{code: "110100", name: "北京市"},{code: "110101", name: "东城区"}]
      }
    },
    methods: {
      nickNameChange(e) {
        this.nickName = e.mp.detail
      },
      phoneNumChange(e) {
        this.phoneNum = e.mp.detail
      },
      detailAddressChange(e) {
        this.detailAddress = e.mp.detail
      },
      selectArea () {
        this.isShow = true
      },
      completeFn(e) {
        console.log(this.selectedArea)
        this.selectedArea = e.mp.detail.values
        this.isShow = false
      },
      closeFn() {
        this.isShow = false
      },
      addToStorage() {
        let addressArr = wx.getStorageSync('addressArr') || []
        addressArr.push({nickName: this.nickName, province: this.selectedArea[0]['name'],city:this.selectedArea[1]['name'],county:this.selectedArea[2]['name'],phoneNum: this.phoneNum,detailAddress: this.detailAddress})
        wx.setStorageSync('addressArr', addressArr)
        this.$router.replace({path: '/pages/addressManagement/index'})
      }
    },
    computed: {
      areaStr() {
        return this.selectedArea[0]['name'] + '-' + this.selectedArea[1]['name'] + '-' + this.selectedArea[2]['name']
      }
    },
    onLoad() {
      this.areaList = areaList
    }
  }
</script>

<style scoped>

</style>
