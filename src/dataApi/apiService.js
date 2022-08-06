import axios from 'axios'
import { BASE_URL } from './config'


const apiService = axios.create({
    baseURL: 'http://localhost:5000',
})

apiService.interceptors.request.use((request)=>{
    console.log('Start request', request)
    return request
},
    function (error){
        console.log("REQUEST ERROR", error)
    }
)
apiService.interceptors.response.use((response)=>{
    console.log('Start response', response)
    return response
},
    function (error){
        console.log("response ERROR", error)
    }
)


export default apiService