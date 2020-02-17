export const getUsers = (state) => {
	return state.usersPage.users;
};

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
