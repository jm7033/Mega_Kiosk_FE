// ... 웹팩 설정의 기존 import/require문과 객체

module.exports = {
    // ... 웹팩 설정의 기존 속성
    devtool:false,
    module: {
      rules: [
        // ... 기존 웹팩 설정의 다른 모듈 규칙들
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
          exclude: /node_modules[/\\]html5-qrcode/ // 이 줄을 추가해주세요
        },
      ],
    },
  };
  