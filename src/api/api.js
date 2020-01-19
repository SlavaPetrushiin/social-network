import * as axios from 'axios';

const instance = axios.create({
	withCredentials : true,
	baseURL : 'https://social-network.samuraijs.com/api/1.0/',
	headers : {
		'API-KEY' : 'c42da93b-73d1-47c9-9b91-cb5950b4c7d5'
	}
});


export const usersUPI = {
	getUsers(page = 1, pageSize = 10) {
		return instance.get(`users?count=${pageSize}&page=${page}`)
			.then(response => response.data)
	},

	getAuthMe() { //авторизация
		return instance.get(`auth/me`)
			.then(response => response.data)
	},

	unFollow(userId){
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},

	follow(userId){
		return instance.post(`follow/${userId}`)
			.then(response => {
				return response.data})
	},
	getProfileUser(userId){
		return instance.get(`profile/${userId}`)
	}
}





