import axios from "axios"
import qs from "querystring"

/**
 * 处理失败的方法
 *     status:状态
 *     info:错误信息
 */
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log("表示请求报文中存在语法错误");
            break;
        case 401:
            console.log("未经许可，需要通过HTTP认证");
            break;
        case 403:
            console.log("服务器拒绝该次访问（访问权限出现问题）");
            break;
        case 404:
            console.log("表示服务器上无法找到请求的资源");
            break;
        case 500:
            console.log("表示服务器在执行请求时发生了错误");
            break;
        case 503:
            console.log("表示服务器暂时处于超负载或正在进行停机维护");
            break;
        default:
            console.log(info);
            break;
    }
}


/**
 * 创建axios实例对象
 */

const instance = axios.create({
    // 全局配置
    // baseURL: "http://iwenwiki.com",
    timeout: 5000
})

/**
 * 配置拦截器
 */
instance.interceptors.request.use(
    config => {
        if (config.method === "post") {
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => Promise.reject(error)
);


instance.interceptors.response.use(
    // 完成了
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    // 未完成
    error => {
        const { response } = error;
        errorHandle(response.status, response.info)
    }
);

export default instance