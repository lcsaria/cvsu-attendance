import axios from "axios";

export default axios.create({
    baseURL: 'http://271d-2001-fd8-b2d0-7357-b9f1-8bb1-f7fd-b44b.ngrok.io/api/v1/users'
})