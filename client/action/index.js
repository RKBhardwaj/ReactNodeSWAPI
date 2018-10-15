import axios from 'axios';
import * as types from './types';

export const loginHandler = (payload, callBack) => (dispatch) => {
    axios.post('/api/login', payload).then(res => {
        dispatch({
            type: types.FETCH_USER,
            data: res.data
        });
        callBack(res);
    }).catch(error => {
        callBack(error);
    });
};

export const processLogout = () => (dispatch) => {
    dispatch({
        type: types.LOGOUT_USER,
        data: {}
    });
};

export const fetchUsers = () => (dispatch) => {
    axios.get('/api/users').then(res => {
        dispatch({
            type: types.GET_ALL_USERS,
            data: res.data.results
        });
    }).catch(error => {
        dispatch({
            type: types.GET_ALL_USERS,
            data: []
        });
    });
};

export const fetchUserDetails = (userId, callBack) => (dispatch) => {
    axios.get(`/api/user/${userId}`).then(res => {
        dispatch({
            type: types.GET_USER,
            data: res.data
        });
        callBack(res);
    }).catch(error => {
        callBack(error);
    });
};