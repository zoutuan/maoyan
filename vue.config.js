module.exports = {
    // 关闭eslint检查
    lintOnSave: false,
    devServer: {
      proxy: {
        "/ajax": {
          target: "http://m.maoyan.com/",
          // 改变header中的origin
          changeOrigin: true
        },
        "/dianying": {
          target: "http://m.maoyan.com/",
          changeOrigin: true
        }
      }
    }
  };
  