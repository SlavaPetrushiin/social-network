import {usersUPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 25},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

const profilePageReducer = (state = initialState, action) => { //принимет state и action
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                posts: [...state.posts, newPost], newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE :
            return {
                ...state, profile: action.profile
            }
    }

    return state
}

export const postActionCreator = () => ({type: 'ADD-POST'});

export const upDateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


//thunk
export const getProfileUser = (userId) => async (dispatch) => {
    const response = await usersUPI.getProfileUser(userId);
    const status = await usersUPI.getProfileUserStatus(userId);
    const profile = {
    	...status.data,
		...response.data
	};
    dispatch(setUserProfile(profile));
}

export const putProfileUserStatus = (newStatus) => (dispatch) => {
	usersUPI.putProfileUserStatus(newStatus).then(respone => {
		debugger
	});
}


export default profilePageReducer;

