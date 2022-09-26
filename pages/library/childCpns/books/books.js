import { imgUrl } from '../../../../server/config'
Component({
  properties: {
    bookArr: Object
  },
  data: {
    url: imgUrl + '/bookImg'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getInfo(e) {
      this.triggerEvent('getInfo',e.currentTarget.dataset.id)
    }
  }
})
