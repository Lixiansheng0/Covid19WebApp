module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost',
                changeOrigin: true,
                pathRewrite: { // pathRewrite 重写路径
                    "^/api": ""
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/example/covid19/' : '/'
}