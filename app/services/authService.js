// Import custom actionType
import * as AuthAction from '../actions/authAction';
import * as ApiAction from '../actions/apiAction';
import firebase from '../constants/firebase';

export function login({email, password}) {

    return function (dispatch) {
        dispatch(ApiAction.apiRequest());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(data => dispatch(AuthAction.loginSuccess(data)))
            .catch(error => dispatch(AuthAction.loginFailure(error)));
    };
}


export function logout() {
    return function (dispatch) {
        dispatch(AuthAction.logoutSuccess());
        firebase.auth().signOut();
    };
}

export function signup({firstname, lastname, email, password}) {

    return function (dispatch) {
        dispatch(ApiAction.apiRequest());
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(data => {
                firebase.database().ref('users').child(data.uid)
                    .set({firstname, lastname})
                    .then(() => {
                        dispatch(AuthAction.signupSuccess(data))
                    });
            })
            .catch(error => dispatch(AuthAction.signupFailure(error)));
    };
}