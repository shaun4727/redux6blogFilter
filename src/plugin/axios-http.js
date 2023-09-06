import axios from 'axios';

const useRequest = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})


export default useRequest;