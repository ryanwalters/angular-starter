'use strict';

const internals = {
    rootDir: __dirname,
    srcDir: './app',
    distDir: './dist'
};

module.exports = {
    context: internals.rootDir,
    entry: `${internals.srcDir}/app.js`,
    output: {
        path: internals.distDir,
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
};