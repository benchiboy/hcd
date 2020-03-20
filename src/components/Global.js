1/**
 * 定义全局变量
 */
export default {	
	URL_SIGNIN: 	'/jc/api/signin',
	URL_SIGNOUT: 	'/jc/api/signout',
	URL_DEVICEINFO: '/jc/api/deviceinfo',
	URL_GETACTLIST: '/jc/api/getactlist',
	URL_DELACCOUNT: '/jc/api/delaccount',
	URL_SETACCOUNT: '/jc/api/setaccount',
	URL_ADDACCOUNT: '/jc/api/addaccount',
	URL_GETACCOUNT: '/jc/api/getaccount',
	/**/
	URL_GETGROUP_LIST: '/jc/api/getgrplist',
	URL_DELGROUP: '/jc/api/delgroup',
	URL_SETGROPP: '/jc/api/setgroup',
	URL_ADDGROUP: '/jc/api/addgroup',
	URL_GETGROUP: '/jc/api/getgroup',
	URL_CHKGROUP: '/jc/api/chkgroup',
	
	URL_MAPDATA: 				'/device/getOnlineDeviceMap',
	URL_DEVICELIST: 			'/device/getDeviceList',
	URL_DEVICE_BASEINFO: 		'/device/getDeviceBasicInfo',
	URL_DEVICE_CHIPLIST: 		'/device/getChipList',
	URL_DEVICE_LOGLIST: 		'/device/getLogList',
	URL_DEVICE_RESULTLIST: 		'/device/getResultList',
	URL_DEVICE_CONFIGINFO: 		'/device/getDeviceConfigInfo',
	URL_DEVICE_VERINFO: 		'/device/getDeviceVerInfo',
	
	UID_TOKEN: 'uid_token',
	LAST_USER: 'lastUser',
	CURR_INDEX:'curr_uindex',
	SUCC:'0000',
	RELOGIN:'8000',	
}
	
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content != 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/**
 * 删除localStorage
 */
export const getCurrDate = name => {
 	var now = new Date();
	 var year = now.getFullYear();       //年
	 var month = now.getMonth() + 1;     //月
	 var day = now.getDate();            //日
			
	 var clock = year + "-";
	 if(month < 10)
		clock += "0";
	 clock += month + "-";
	 if(day < 10)
		clock += "0";
	 clock += day;
	 return clock; 
}


/**
 * 
 */
export const getCurrDateTime = name => {
 	var now = new Date();
 	var year = now.getFullYear();       //年
 	var month = now.getMonth() + 1;     //月
 	var day = now.getDate();            //日
 	var hh = now.getHours();            //时
 	var mm = now.getMinutes();          //分
 	var ss = now.getSeconds();           //秒
 	var clock = year + "-";
 	if(month < 10)
 		clock += "0";
 	clock += month + "-";
 	if(day < 10)
 		clock += "0";
 	clock += day + " ";
 	if(hh < 10)
 		clock += "0";
 	clock += hh + ":";
 	if (mm < 10) clock += '0'; 
 	clock += mm + ":"; 
 	if (ss < 10) clock += '0'; 
 	clock += ss; 
 	return clock; 
}