import wxRequest from '@/utils/wxRequest'

export function getNavItem (data) {
  return wxRequest({
    url: '/cms/category/list',
    method: 'GET',
    data
  })
}

export function getFashionGirl (data) {
  return wxRequest({
    url: '/shop/goods/category/all',
    method: 'GET',
    data
  })
}

export function getRecommend (data) {
  return wxRequest({
    url: '/shop/goods/list',
    method: 'GET',
    data
  })
}
