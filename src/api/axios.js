import axios from "axios";

export default axios.create({
    baseURL: 'http://a4b1-2001-fd8-b2d0-5962-71c7-aca7-d532-ec5c.ngrok.io/api/v1/users/'
})