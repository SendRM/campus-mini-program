import request from '../../server/network';
Page({
  data: {
    articles: []
  },
  onLoad: function (options) {
    request({
      url: '/blog'
    }).then(() => {
      request({
        url: '/blog'
      }).then(res => {
        res.data.articles.forEach(item => {
          item.createAt = item.createAt.slice(0, item.createAt.length - 3);
          if (item.relatedPictures.length) {
            for (let i = 0; i < item.relatedPictures.length; i++) {
              item.relatedPictures[i] = item.relatedPictures[i].split('articleImg')[1];
            }
          }
        })
        this.setData({
          articles: res.data.articles
        })
      })
    })
  },
  onShow: function () {
    this.onLoad();
    this.onLoad();
  },
  getArticleInfo(e) {
    wx.navigateTo({
      url: `/pages/articleInfo/articleInfo?id=${e.detail}`
    })
  },
  submitKeyword(e) {
    wx.navigateTo({
      url: `/pages/article/article?keyword=${e.detail}`
    })
  },
  handleLike(e) {
    request({
      url: `/blog/likes/${e.detail.id}`,
      method: e.detail.like === true ? 'put' : 'delete'
    }).then(res => {
      // let status = res.data.status;
      this.onLoad();
    })
  },
  sendComment(e) {
    request({
      url: '/blog/comment',
      method: 'post',
      data: e.detail
    }).then(res => {
      this.onLoad();
    })
  }
})