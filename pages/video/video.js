var playURl = ['http://pl.youku.com/partner/m3u8?vid=CODMxODIyOA==&type=hd2&ep=CJ5SdhEGxbtIH0rF6wjco0a0VnHYmDy0nfesSKlkt1jWOKyFeVhdtA%3D%3D&sid=748455878053586351832&token=9528&ctype=86&ev=1&oip=2018272572','http://pl.youku.com/partner/m3u8?vid=CMTAxODkyODQ=&type=hd2&ep=CZ5SdhEGxb9HHk7B7wjc9EC0WnTbmDy2jfusSKlGt1jTVKyFc1xftA%3D%3D&sid=648455837117186d31461&token=3108&ctype=86&ev=1&oip=2018272572','http://pl.youku.com/partner/m3u8?vid=CMTA1MjEyNTY=&type=hd2&ep=D55SdhEGxb5HGk3E7AjcoxGxW3fTmDy2jfvlSodot1nDXKyFdl1XtQ%3D%3D&sid=0484558275222863b4559&token=6089&ctype=86&ev=1&oip=2018272572'];
Page({
  onLoad: function (options) {
    this.setData({
        src: playURl[options.url]
    })
  }
})