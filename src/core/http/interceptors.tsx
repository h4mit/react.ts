import axios from 'axios';

axios.create({
    baseURL: './',
    responseType: 'json'
});

axios.interceptors.response.use((res) => {
    
    console.log(`Success  ${res.status} : ` , res.data);
    return res;
},
    (errors) => {
        switch (errors.response.status) {
            case 500:
                console.log(`Error 500 : Internal server Error!`);
                break;
            default:
                console.log(`Error  ${errors.response.status} : ${errors.response.data}`);
        }
        return Promise.reject(errors);
    });