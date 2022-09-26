import { imgUrl } from '../../../../server/config';
import { USER, LIKES } from '../../../../server/const';
import showToast from '../../../../util/showToast';
Component({
  properties: {
    articles: Array
  },
  data: {
    url: imgUrl + '/articleImg',
    likes: [],
    storageLikes: wx.getStorageSync(LIKES),
    like: false,
    content: '',
    commentArticle: '',
    focus: false
  },
  methods: {
    getArticleInfo(e) {
      this.triggerEvent('getArticleInfo', e.currentTarget.dataset.id);
    },
    handleLike(e) {
      let tempObj = {};
      let flag = false;
      tempObj.id = e.currentTarget.dataset.id;
      tempObj.like = e.currentTarget.dataset.like;
      if (this.data.storageLikes === undefined || this.data.storageLikes == '') {
        let tampArr = [];
        tampArr.push(tempObj);
        wx.setStorageSync(LIKES, tampArr);
        this.setData({
          storageLikes: tampArr
        })
        return this.triggerEvent('handleLike', tempObj);
      }
      this.data.storageLikes.forEach(item => {
        if (item.id === tempObj.id) {
          item.like = !item.like
          tempObj.like = item.like;
          flag = true;
        }
      });
      if (flag === false) this.data.storageLikes.push(tempObj);
      this.setData({
        storageLikes: this.data.storageLikes
      })
      wx.setStorageSync(LIKES, this.data.storageLikes);
      this.triggerEvent('handleLike', tempObj);
    },
    getReply(e) {
      this.setData({
        focus: !this.data.focus,
        commentArticle: e.currentTarget.dataset.id
      });
    },
    contentInput(e) {
      if (e.detail.value.trim().length === 0) return showToast('请输入内容');
      this.setData({
        content: e.detail.value
      });
    },
    sendComment() {
      this.setData({
        focus: !this.data.focus
      });
      this.triggerEvent('sendComment', {
        author: wx.getStorageSync(USER),
        content: this.data.content,
        article: this.data.commentArticle
      })
    }
  }
})
