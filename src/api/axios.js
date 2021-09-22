import axios from "axios";

export default axios.create({
    baseURL: 'http://417e-180-191-241-142.ngrok.io/api/v1/users'
})