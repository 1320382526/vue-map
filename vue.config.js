module.exports = {
    devServer: {
        // 设置主机地址
        host: '192.168.43.27',
        // 设置默认端口
        port: 8080,
        // 设置代理
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://adv.gdxllcn.com:5008',
                // 如果要代理 websockets
                ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: false
            }
        }
    }
}