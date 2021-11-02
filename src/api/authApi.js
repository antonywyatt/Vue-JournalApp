import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyA_YHsb9MSDghebgksjoXGDSh080tGck5A'
    }
})

export default authApi