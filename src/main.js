import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main', 
      '^pages/index/main',
      'pages/classify/main',
      'pages/search/main',
      'pages/rankList/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      position: "bottom",
      backgroundColor: "white",
      selectedColor: "#d81e06",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/main",
          iconPath: "@/../static/images/sj.png",
          selectedIconPath: "@/../static/images/sjred.png",
          text: "书架"
        },{
          pagePath: "pages/rankList/main",
          iconPath: "@/../static/images/jx.png",
          selectedIconPath: "@/../static/images/jxred.png",
          text: "排行榜"
        },{
          pagePath: "pages/classify/main",
          iconPath: "@/../static/images/fl.png",
          selectedIconPath: "@/../static/images/flred.png",
          text: "分类"
        },{
          pagePath: "pages/search/main",
          iconPath: "@/../static/images/ss.png",
          selectedIconPath: "@/../static/images/ssred.png",
          text: "搜索"
        },{
          pagePath: "pages/search/main",
          iconPath: "@/../static/images/sj.png",
          selectedIconPath: "@/../static/images/sjred.png",
          text: "我的"
        }
      ]
    }
  }
}
