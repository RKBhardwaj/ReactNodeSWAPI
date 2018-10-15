import * as types from '../action/types';

const defaultState = {
    usersList: [],
    userDetails: {},
    validUser: false,
    user: {}
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_ALL_USERS:
            return { ...state, usersList: action.data };
        case types.GET_USER:
            return { ...state, userDetails: action.data };
        case types.FETCH_USER: 
            return { ...state, validUser: action.data.user.userValid, user: action.data.user };
        case types.LOGOUT_USER:
            return { ...state, validUser: false, user: {} };
        default:
            return { ...state };
    }
}

export default userReducer;