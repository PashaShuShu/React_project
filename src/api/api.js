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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data });
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => { return response.data })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => { return response.data })
    },
    authMe() {
        return instance.get(`auth/me`).then(response => { return response.data })
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => { return response.data })
    },
    getUserStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    putUserStatus(text) {
        return instance.put(`profile/status`, { status: text });
    },
    putPhoto(photo) {
        var formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const loginAPI = {
    loginUser(login, password, rememberMe, captcha) {
        if (captcha !== "") {
            return instance.post(`auth/login`,
                {
                    email: login,
                    password: password,
                    rememberMe: rememberMe,
                    captcha: captcha
                }
            );
        }
        return instance.post(`auth/login`,
            {
                email: login,
                password: password,
                rememberMe: rememberMe,
            }
        );
    },
    logoutUser() {
        return instance.delete('auth/login');
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url');
    },
}