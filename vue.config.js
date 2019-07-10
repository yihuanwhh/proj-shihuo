module.exports = {
  devServer: {
    proxy: {
      '/': {
        ws:false,
        target: 'http://m.shihuo.cn',
        changeOrigin: true
      }
    }
  }
}