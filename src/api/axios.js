import axios from "axios";

export default axios.create({
    baseURL: 'http://617b-112-198-179-122.ngrok.io/api/v1/users/'
})