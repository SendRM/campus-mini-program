import { NIGHT } from '../../server/const';

Component({
  options: {
    styleIsolation: "apply-shared"
  },
  data: {
    darkModel: wx.getStorageSync(NIGHT)
  }
})
