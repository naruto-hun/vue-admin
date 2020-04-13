module.exports = {
  devServer: {
    port: 8080, // 端口号
    host: 'localhost',
    open: true, //配置自动启动浏览器
    // 反向代理
    proxy: {
      "/api": {
        target: "http://localhost", // 域名
        ws: true,
        changeOrigin: true,//是否跨域
        secure:false, //是否使用https
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
}
