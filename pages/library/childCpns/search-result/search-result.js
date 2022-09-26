import { imgUrl } from '../../../../server/config'

Component({

  properties: {
    searchArr: Array
  },
  data: {
    url: imgUrl + '/bookImg'
  },
  methods: {
    getInfo(e) {
      this.triggerEvent('getInfo',e.currentTarget.dataset.id)
    }
  }
})
