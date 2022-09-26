import request from '../../server/network';
import { imgUrl } from '../../server/config';
import { USER } from '../.././server/const';
import showToast from '../../util/showToast';
Page({
  data: {
    url: imgUrl + '/articleImg',
    article: {},
    comments: [],
    content: '',
    commentArticle: ''
  },
  onLoad: function (options) {
    this.setData({
      commentArticle: options.id
    })
    request({
      url: `/blog/${options.id}`,
    }).then(res => {
      this.handleData(res);
    })
  },
  onShow: function () {
    request({
      url: `/blog/${this.data.commentArticle}`,
    }).then(res => {
      this.handleData(res);
    })
  },
  contentInput(e) {
    if (e.detail.value.trim().length === 0) return showToast('请输入内容');
    this.setData({
      content: e.detail.value
    });
  },
  sendComment() {
    request({
      url: '/blog/comment',
      method: 'post',
      data: {
        author: wx.getStorageSync(USER),
        content: this.data.content,
        article: this.data.commentArticle
      }
    }).then(res => {
      this.setData({
        content: ''
      })
      this.onShow();
    })
  },
  handleData(res) {
    res.data.article.createAt = res.data.article.createAt.slice(0, res.data.article.createAt.length - 3);
    if (res.data.article.relatedPictures.length) {
      for (let i = 0; i < res.data.article.relatedPictures.length; i++) {
        res.data.article.relatedPictures[i] = res.data.article.relatedPictures[i].split('articleImg')[1];
      }
    }
    if (res.data.comments.length) {
      res.data.comments.forEach(item => {
        item.createAt = item.createAt.slice(0, item.createAt.length - 3);
      })
    }
    this.setData({
      article: res.data.article,
      comments: res.data.comments,
    })
  }
})