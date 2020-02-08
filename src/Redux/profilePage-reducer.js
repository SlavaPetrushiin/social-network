import {profileUPI} from "../api/api";

const ADD_POST = 'ProfilePage/ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 25},
    ],
    profile: null,
    status: ""
}

const profilePageReducer = (state = initialState, action) => { //принимет state и action
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_USER_PROFILE :
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS :
            return {
                ...state, status: action.status
            }
    }

    return state
}

export const postActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});


//thunk
export const getProfileUser = (userId) => (dispatch) => {
    profileUPI.getProfileUser(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileUPI.getProfileUserStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
}

export const putProfileUserStatus = (newStatus) => (dispatch) => {
    profileUPI.putProfileUserStatus(newStatus).then(response => {
	    debugger
        dispatch(setUserStatus(newStatus));
	});
}


export default profilePageReducer;

