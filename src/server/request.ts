import axios, { AxiosRequestConfig } from "axios";
import router from '@/router/index'

import { TIMEOUT } from "./config";

import { message } from 'ant-design-vue';
axios.defaults.timeout = TIMEOUT;

/**
 * http request 拦截器
 */

axios.interceptors.request.use(
    (config: any) => {
        const token: string | null = localStorage.getItem("token");
        let headers: any = {
            'Content-Type': 'application/json',
            ...config.headers,
            rPath: 'sectran_front/upload/admin/file.pdf'
        }
        if (token) {
            headers['authorization'] = `${token}`
        }
        config.headers = headers
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response: any) => {
        return response
    },
    (error: string) => {
        console.log("请求出错：", error);
    }
);
/**
 * 封装请求
 * @param url 请求地址
 * @param param 请求参数
 * @param fecth 请求方法
 * @returns {Promise}
 */

//统一接口处理，返回数据
const requests: Function = (url: string, param: AxiosRequestConfig<string>, fecth = "post", ismessage = true, headers: any = {}): Promise<any> => {
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case "get":
                axios.get(url, {params:param}).then((response: any) => {
                    console.log("请求数据：", response);
                    if(url = '/file/download') {
                        resolve(response);
                    }
                    
                    if (response.data.code === 0) {
                        let { data } = response;
                        data.msg && message.success(data.msg);
                        resolve(data);
                    } else { landing(response?.data); }
                }).catch((error: any) => {
                    msag(error)
                    reject(error);
                });
                break;
            case "post":
                axios.post(url, param, {headers:headers}).then(
                    (response: any) => {
                        if (response.data.code === 0 || response.data.base?.code === 0) {
                            let { data } = response;
                            (data.msg && ismessage) && message.success(data.msg);
                            resolve(data);
                        } else {
                            landing(response.data);
                            reject(response.data)
                        }
                    },
                    (error: any) => {
                        msag(error)
                        reject(error);
                    }
                );
                break;
            default:
                break;
        }
    });
}

//失败提示
function msag(err: { response: { status: number; data: { error: { details: string; }; }; }; }) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                alert(err.response.data.error.details);
                break;
            case 401:
                alert("未授权，请登录");
                break;
            case 403:
                alert("拒绝访问");
                break;
            case 404:
                alert("请求地址出错");
                break;

            case 408:
                alert("请求超时");
                break;

            case 500:
                alert("服务器内部错误");
                break;

            case 501:
                alert("服务未实现");
                break;

            case 502:
                alert("网关错误");
                break;

            case 503:
                alert("服务不可用");
                break;

            case 504:
                alert("网关超时");
                break;

            case 505:
                alert("HTTP版本不受支持");
                break;
            default:
        }
    }
}

/**
 * 查看返回的数据
 * @param data
 */
function landing(data: { code: number, status: number | string; msg: string }) {
    let { code, msg } = data
    message.error(msg);
    if (code === 20004) {
        router.push('/')
    }
}


export default requests

