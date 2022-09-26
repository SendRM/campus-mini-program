import request from '../../server/network';
Page({
  data: {
    index: true,
    search: false,
    bookInfo: false,
    bookArr: [],
    searchArr: [],
    book: {},
    inputValue: '',
    focusIco: '',
    focus: '',
    hidden: ''
  },
  onLoad: function (options) {
    request({
      url: '/library'
    }).then(res => {
      res.data = this.getImgPath(res.data);
      this.setData({
        bookArr: res.data
      })
    })
  },
  getValue(e) {
    this.setData({
      inputValue: e.detail,
      focusIco: 'focus-ico',
      focus: 'focus'
    })
    if (!this.data.inputValue.length) {
      this.setData({
        hidden: ''
      })
    }
  },
  getBlur() {
    this.setData({
      focusIco: '',
      focus: ''
    })
    if (this.data.inputValue.length) {
      this.setData({
        hidden: 'hidden'
      })
    }
  },
  submitKeyword() {
    request({
      url: `/library/search/${this.data.inputValue}`,
    }).then(res => {
      res.data = this.getImgPath(res.data);
      this.setData({
        searchArr: res.data.bookArr,
        search: true,
        index: false
      })
    })
  },
  getInfo(e) {
    request({
      url: `/library/book/${e.detail}`
    }).then(res => {
      res.data.book.bookImg = res.data.book.bookImg.split('bookImg')[1];
      this.setData({
        index: false,
        search: false,
        bookInfo: true,
        book: res.data.book
      })
    })
    this.onLoad();
  },
  returnIndex() {
    this.setData({
      index: true,
      search: false,
      bookInfo: false,
    })
  },
  getImgPath(data) {
    let temp = data;
    if (typeof temp === 'object') {
      for (let k in temp) {
        for (let i = 0; i < temp[k].length; i++) {
          temp[k][i].bookImg = temp[k][i].bookImg.split('bookImg')[1];
        }
      }
      return temp;
    }

  }
})