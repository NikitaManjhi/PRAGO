import axios from "axios"
const  BASE_URL="http://localhost:3000/api/"
const TOKEN="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ4NTg2MDliNGQxNThhOWU3OTE0ZjgiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjU0NTQ0MzIsImV4cCI6MTcyNTcxMzYzMn0.ytOYB6zWJn67sGbzl0BYeyuMxLAdI4m5fGwz_kQbIM4"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})