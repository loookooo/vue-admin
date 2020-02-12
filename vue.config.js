const path = require("path");
module.exports = {
    publicPath: "/",
    outputDir: process.env.NODE_ENV === "development" ? "devdist" : "dist",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        }
    },
    configureWebpack: (config) =>  {  // 覆盖webpack默认配置的都在这里
        config.resolve = {
            // extensions: ['.js', '.json', '.vue'],  //自动给文件名添加后缀
            alias: {
                '@': path.resolve(__dirname, './src'),
                'public': path.resolve(__dirname, './public'),
                'components': path.resolve(__dirname, './src/components'),
                'common': path.resolve(__dirname, './src/common'),
                'api': path.resolve(__dirname, './src/api'),
                'views': path.resolve(__dirname, './src/views'),
                'data': path.resolve(__dirname, './src/data'),
            }
        }  
    }
};