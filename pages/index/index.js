//index.js
//获取应用实例
var imageData = "../../images/banner01.jpg";
var videoImage = [{
imageUrl:'http://tupian.lemon95.com:8088/Pictures/Vedios/2016-11-09/201611917663844994.jpg',
name:'魔玄传说'
},{
imageUrl:'http://tupian.lemon95.com:8088/Pictures/Vedios/2017-01-09/20171917182175263.jpg',
  name:'超级快递'
},{
imageUrl:'http://tupian.lemon95.com:8088/Pictures/Vedios/2016-12-27/2016122795238333244.jpg',
name:'三少爷的剑'
}];
var images =  [  'http://tupian.lemon95.com:8088/Pictures/ChannelAD/2017-01-13/2017113134217775015.jpg',      'http://tupian.lemon95.com:8088/Pictures/ChannelAD/2017-01-13/2017113114744460406.jpg',      'http://tupian.lemon95.com:8088/Pictures/ChannelAD/2016-12-20/2016122020386883068.jpg'
];
var app = getApp()
Page({
  data: {
    lists:videoImage,
    imgUrls:images,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  clickTap: function(e) {
     wx.navigateTo({
        url:'../video/video?url=' + e.currentTarget.id
     })
  }
  
})
