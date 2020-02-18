import {createSelector} from "reselect";

export const getUsers = (state) => {
	return state.usersPage.users;
};

export const getUsersSuper = createSelector(getUsers, (users) => {
	return users.filter(user => true);
});

console.log(getUsersSuper)

export const getTotalCount = (state) => {
	return state.usersPage.totalCount;
};

export const getPageSize = (state) => {
	return state.usersPage.sizePage;
};

export const getPage = (state) => {
	return state.usersPage.page;
};

export const getPreloader = (state) => {
	return state.usersPage.isPreloader;
};
