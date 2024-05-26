import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'be35402a1e184d56b01383945bf515ad'
    }
})