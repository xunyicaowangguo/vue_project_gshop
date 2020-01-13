import axios from 'axios'
import qs from 'querystring'
import router from '../router'

//生成Axios的伪实例，instance不是真正的 new Axios,但是拥有axios实例的所有属性和方法
const instance = axios.create({
    baseURL:'/api'
})

//添加请求拦截器
instance.interceptors.request.use(config => {
    //config包含当前请求的所有请求信息：method,url,data

    //修改请求参数格式
    config.data = qs.stringify(config.data)

    //让请求携带token  1.cookie 2.请求参数 3.请求头[authorization]
    let token = localStorage.getItem('token_key')

    //判断当前请求是否需要携带token
    if(config.headers.needToken){
        if(token){//如果有token就在请求头设置token,实现自动登录
            config.headers.authorization = token
        }else{//没有token就没有必要自动登录
            throw Error('请先登录')
        }
    }
    
    return config
})

//设置响应拦截器
instance.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (error)=>{
        console.log(error.message)
        if(!error.response){//请求没有真正发出去，在请求拦截器出错
            alert(error.message)//弹出错误
            //如果不在登录页面就跳转至登录页面
            //router.currentRoute 当前路由对象
            if(router.currentRoute.path !== '/login'){
                router.replace('/login')
            }

        }else{//请求发出去后获取到错误信息的对象
            if(error.response.status === 401){
                alert('token过期，请重新登录')
                //如果不在登录页面就跳转至登录页面
                if(router.currentRoute.path !== '/login'){
                    router.replace('/login')
                }
            }else if(error.response.status === 404){
                alert('请求资源未找到')
            }else{
                alert('请求错误')
            }
        }
        // 手动返回一个初始化状态的promise实例
        return new Promise(()=>{})
    }
)

export default instance
