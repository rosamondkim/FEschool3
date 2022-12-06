const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module :{
        rules: [ // 여기서 로더를 추가할 수 있습니다.
        {
                            // 로더가 처리해야할 파일의 패턴(정규표현식)입니다. 
                            // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
                            // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미합니다.
            test: /\.js$/, 
            use: [
                // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
                path.resolve('./myLoader.js')
            ]
        }, 
        {
            test : /\.css$/,
            use: [
                'css-loader',
                'style-loader'
            ]
        }
    ]
    },
    
}