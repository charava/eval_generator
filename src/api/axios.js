import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3000"

    // baseURL: 'http://something.vercel.app/api/' || "http://localhost:3000"
})