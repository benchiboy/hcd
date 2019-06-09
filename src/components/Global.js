/**
 * 定义全局变量
 */
export default {	
	URL_SIGNIN: 	'/jc/api/signin',
	URL_SIGNOUT: 	'/jc/api/signout',
	URL_DEVICELIST: '/jc/api/devicelist',
	URL_GETACTLIST: '/jc/api/getactlist',
	URL_DELACCOUNT: '/jc/api/delaccount',
	URL_SETACCOUNT: '/jc/api/setaccount',
	URL_ADDACCOUNT: '/jc/api/addaccount',
	URL_GETACCOUNT: '/jc/api/getaccount',
	
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