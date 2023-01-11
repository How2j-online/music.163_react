import axios from "axios";
import { BASE_URL, TIME_OUT} from './config'
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
});

// 响应拦截器
instance.interceptors.response.use(res => {
    return res.data;
})


export default instance;