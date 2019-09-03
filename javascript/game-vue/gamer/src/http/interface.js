import axios from './api'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
const query = () => {
    return axios({
        url: '/query',
        method: 'get'
    })
}
  
const list = (id) => {
    return axios({
        url: `/list${id}`,
        method: 'get'
    })
}

const upload = data => {
    return axios({
        url: '/upload',
        method: 'post',
        data
    })
}

const token = (code)=>
{
    return axios({
        url:'/getToken',
        method:'post'
    })
}
const game = ()=>{
    return axios({
        url:'/index',
        method:'get'
    })
}
const getCode = ()=>{
    return axios ({
        url:'/getCode',
        method:'post'
    })
}
// 默认全部导出
export default {
    query,
    list,
    upload,
    token,
    game,
    getCode
}