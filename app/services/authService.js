// Import custom actionType
import * as AuthAction from '../actions/authAction';
import * as ApiAction from '../actions/apiAction';
import {API_URL} from '../constants/app';

export function login({email, password}) {

    return function (dispatch) {
        dispatch(ApiAction.apiRequest());
        return fetch(`${API_URL}/movies.json`)
            .then(response => response.json())
            .then(data => dispatch(AuthAction.loginSuccess(data)))
            .catch(error => dispatch(AuthAction.loginFailure(error)));
    };
}


export function logout() {
    return function (dispatch) {
        dispatch(AuthAction.logoutSuccess());
    };
}