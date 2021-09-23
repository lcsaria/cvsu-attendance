import axios from "axios";

export default axios.create({
    baseURL: 'http://e478-2001-fd8-b2d0-6d19-1996-4328-9e36-5033.ngrok.io/api/v1/users'
})