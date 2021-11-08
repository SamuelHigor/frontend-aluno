import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://sixdevbackendsaluno.herokuapp.com'
})
 
export default api;