import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    signInError: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return {...state, auth: true};
        case types.SIGN_IN_ERROR:
            return {...state, auth: false, signInError: action.error};
        case types.SIGN_OUT:
            return {...state, auth: false};
        default:
            return state;
    }
}