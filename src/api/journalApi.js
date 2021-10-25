import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-bff4a-default-rtdb.firebaseio.com'
})

export default journalApi