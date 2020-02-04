import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pizza-delivery-65076.firebaseio.com/'
})

export default instance;