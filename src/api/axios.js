import axios from "axios";

export default axios.create({
    baseURL: ' http://50e6-112-198-179-122.ngrok.io/api/v1/users/'
})