import * as actionTypes from './actionTypes';


export const addRegister = ( name ) => {
    return {
        type: actionTypes.ADD_REGISTER,
        registerName: name
    };
};

export const removeRegister = ( name ) => {
    return {
        type: actionTypes.REMOVE_REGISTER,
        registerName: name
    };
};

export const setRegister = ( register ) => {
    return {
        type: actionTypes.SET_REGISTER,
        register: register
    };
};

export const fetchDataFailed = () => {
    return {
        type: actionTypes.FETCH_DATA_FAILED
    };
};

export const initRegister = () => {
    return {
        type: actionTypes.INIT_REGISTER
    };
};