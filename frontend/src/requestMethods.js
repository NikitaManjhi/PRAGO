import axios from "axios"
const  BASE_URL="http://localhost:3000/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ4NTg2MDliNGQxNThhOWU3OTE0ZjgiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjY1MTczNDh9.oLM_WYhE_Vu95z7kwrKB19cDXHjk9RGDzTrbbEnm_sg"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})