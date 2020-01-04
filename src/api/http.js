import axios from 'axios';
import {BaseUrl} from "../constants";
export default axios.create({
    baseURL: BaseUrl,
    headers:{
        'Accept': 'application/json'
    }
})
