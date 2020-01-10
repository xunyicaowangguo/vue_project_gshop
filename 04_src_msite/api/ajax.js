import axios from 'axios'
import qs from 'querystring'

const instance = axios.create({
    baseURL:'/api'
})

instance.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    return config
})

instance.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (error)=>{
        alert(error.msg)
        console.log(error)
        return new Promise(()=>{})
    }
)

export default instance
