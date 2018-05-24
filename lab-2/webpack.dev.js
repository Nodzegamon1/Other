module: {

    rules: [
        {
            test: /\.js$/, // можно еще записать вот так test: (path)=>path.endswith('./js)
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'strage-2']
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }
    ],

},
