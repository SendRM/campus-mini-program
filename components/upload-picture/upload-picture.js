Component({
  properties: {

  },
  data: {
    images: []
  },
  methods: {
    chooseImage(e) {
      wx.chooseImage({
        count: 3,
        success: res => {
          const images = this.data.images.concat(res.tempFilePaths);
          this.setData({ images });
          this.triggerEvent('getImages', this.data.images, {});
        }
      })
    },
    removeImage(e) {
      var images = this.data.images;
      const idx = e.currentTarget.dataset.idx;
      images.splice(idx, 1);
      this.setData({ images });
      this.triggerEvent('getImages', this.data.images, {});
    },
    handleImagePreview(e) {
      const idx = e.target.dataset.idx;
      const images = this.data.images;
      wx.previewImage({
        current: images[idx],
        urls: images,
      })
    }
  }
})
