import { baseURL } from '../server/config';
import Multipart from './Multipart.min';
export default (data, filterStr, imgs, url) => {
  let fields = Object.keys(data).filter(key => key != filterStr).map(key => ({
    name: key,
    value: data[key],
  }));
  let files = Object.keys(imgs).map(key => ({
    name: 'img',
    filePath: imgs[key],
  }));;
  new Multipart({
    files,
    fields
  }).submit(baseURL + url);
}