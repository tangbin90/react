//package json 中追加proxy配置，不可以配置多个代理
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        '/students', createProxyMiddleware({
            target:'http://localhost:5000',
            changeOrigin:true
        })
    );

    app.use(
        '/cars', createProxyMiddleware({
            target:'http://localhost:5001',
            changeOrigin:true
        })
    );


};