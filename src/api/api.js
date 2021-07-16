import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9eb30f89-e9e4-4d8e-ace2-9693fb3d61df'
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data });
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {return response.data})
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {return response.data})
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {return response.data})
    }
}

