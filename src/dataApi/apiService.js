import axios from 'axios'


const apiService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
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