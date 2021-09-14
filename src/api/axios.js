import axios from "axios";

export default axios.create({
    baseURL: 'http://7c24-112-198-179-122.ngrok.io/api/v1/users/'
})