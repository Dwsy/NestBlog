"use strict";

import axios from "axios";
import store from 'store2';
// import { Message } from 'element-ui'
import router from '../router/index';

// Full config:  https://github.com/axios/axios#request-config


let instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '~~',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})


// http request 拦截器
instance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
instance.interceptors.response.use(
  response => {
    //拦截响应，做统一处理 
    if (response.data.code) {
      switch (response.data.code) {
        case 1002:
          store.state.isLogin = false
          router.replace({
            path: 'login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
      }
    }
    return response
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
  })
export default instance


export const $ajax = async (methods = 'get', ...args) => {
  const res = [null, null];
  try {
    res[1] = await instance[methods](...args);
  } catch (error) {
    res[0] = error;
  }
  return res;
}

export const $get = (url, config = {}) => {
  return $ajax('get', url, config);
}

export const $post = (url, data = {}, config = {}) => {
  return $ajax('post', url, data, config);
}
export const $put = (url, data = {}, config = {}) => {
  return $ajax('put', url, data, config);
}

export const $del = (url, data = {}, config = {}) => {
  return $ajax('delete', url, data, config);
}

// export default _axios;
