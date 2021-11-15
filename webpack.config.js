const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpack-number.js',
        path: path.resolve(__dirname, 'dist'),
        /**
         * output.library 配置项暴露从入口导出的内容
         * 请注意，library 设置与 entry 配置项绑定
         */
        // library: 'webpackNumbers',
        library: {
            name: 'webpackNumbers',
            /**
             * 兼容不同的环境
             * 既可被 script 标签引用，也可运行在 CommonJS、AMD、Node.js 等环境中
             */
            type: 'umd',
        },
    },
    /**
     * 放弃控制此外部 library ，而是将控制权让给使用 library 的 consumer。
     */
    externals: {
        /**
         * 这意味着你的 library 需要一个名为 lodash 的依赖，
         * 这个依赖在 consumer 环境中必须存在且可用
         */
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '-',
        }
    },
    optimization: {
        runtimeChunk: true,
    }
}