import request from '../../server/network';
import { imgUrl } from '../../server/config';
Page({
  data: {
    url: imgUrl + '/articleImg',
    articles: []
  },
  onLoad: function (options) {
    request({
      url: `/blog/search/${options.keyword}`
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
  }
})