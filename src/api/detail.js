import wxRequest from '@/utils/wxRequest'

export function getGoodsDetail (data) {
  return wxRequest({
    url: '/shop/goods/detail',
    methdod: 'GET',
    data
  })
}
