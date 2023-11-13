import request from '@/utils/request'

// 登录方法
export function testController(data) {
  console.log(321)
  return request({
    url: 'localhost:9201/order/placeOrder',
    method: 'post',
    data: data,
  })
}