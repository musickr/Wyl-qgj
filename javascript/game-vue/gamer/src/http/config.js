const versions = 'v1'
import Cookies from "js-cookie";

export default {
    method: 'get',
    // 基础url前缀
    baseURL: 'http://www.project.com/game/public/index.php/player/'+versions,
    // 请求头信息
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'accessToken' : Cookies.get('markToken'),
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: true,
    // 返回数据类型
    responseType: 'json'
  }