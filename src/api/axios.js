import axios from "axios";

export default axios.create({
    baseURL: 'http://c351-112-198-179-122.ngrok.io/api/v1/users/'
})