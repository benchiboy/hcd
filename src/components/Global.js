/**
 * 定义全局变量
 */
export default {	
	URL_SIGNIN: 'http://localhost:8080/jc/api/signin',
	URL_SIGNOUT: 'http://localhost:8080/jc/api/signout',
	URL_DEVICELIST: 'http://localhost:8080/jc/api/devicelist',
	
	UID_TOKEN: 'uid_token',
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