var path = require("path");

module.exports = {
    entry: {
        'react-transition': './react-transition',
        'react-dom': './react-dom',
        react: './react',
        'react-addons-css-transition-group': './react-addons-css-transition-group'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    externals: [{
        'react-transition': {
            root: 'ReactTransition',
            commonjs2: 'react-transition',
            commonjs: 'react-transition',
            amd: 'react-transition'
        },
    }],
};