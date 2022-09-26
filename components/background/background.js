import { NIGHT } from '../../server/const';

Component({
  options: {
    multipleSlots: true
  },
  data: {
    darkModel: wx.getStorageSync(NIGHT)
  }
})
