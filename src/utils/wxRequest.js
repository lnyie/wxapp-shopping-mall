const wxRequest = function (options) {
  if(!options.baseUrl) {
    options.baseUrl = 'https://api.it120.cc/lnyie'
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.baseUrl + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: options.header || {'Content-type' : 'x-www-form-urlencoded'},
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

export default wxRequest
