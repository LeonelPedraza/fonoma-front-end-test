import axios from 'axios'

const axiosFetch = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'apikey': process.env.NEXT_PUBLIC_API_KEY
    }
})

export default axiosFetch