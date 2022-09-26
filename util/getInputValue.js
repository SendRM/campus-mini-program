export default (e, that, obj,) => {
  if (obj) {
    obj[e.currentTarget.dataset.input] = e.detail.value;
  } else {
    let inputName = e.currentTarget.dataset.input;
    let inputValue = e.detail.value;
    that.setData({
      [inputName]: inputValue
    })
  }
}
