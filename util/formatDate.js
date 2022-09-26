function supplement(nn){
	return nn = nn < 10 ? '0' + nn : nn;
}

export default function format(Date,str){
	var obj = {
		Y: Date.getFullYear(),
		M: Date.getMonth() + 1,
		D: Date.getDate(),
		H: Date.getHours(),
		Mi: Date.getMinutes(),
		S: Date.getSeconds()
	}
	var time = ' ' +supplement(obj.H) + ':' + supplement(obj.Mi) + ':' + supplement(obj.S);
	if(str.indexOf('-') > -1){
		return obj.Y + '-' + supplement(obj.M) + '-' + supplement(obj.D) + time;
	}
	if(str.indexOf('/') > -1){
		return obj.Y + '/' + supplement(obj.M) + '/' + supplement(obj.D) + time;
	}
}
 