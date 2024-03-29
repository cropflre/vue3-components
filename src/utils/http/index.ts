import axios from 'axios';

const API = axios.create({
  baseUrl: 'http://localhost:3000', //请求后端数据的基本地址，自定义
  timeout: 2000, //请求超时设置，单位ms
});

export default API;
