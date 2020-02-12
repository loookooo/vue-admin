const path = require('path');
module.exports = {
    publicPath: '/',
    outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        }
    }
}