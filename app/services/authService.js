import {NavigationActions} from 'react-navigation';
import {Toast} from 'native-base';

// Import custom actionType
import * as AuthAction from '../actions/authAction';
import * as ApiAction from '../actions/apiAction';
import firebase from '../constants/firebase';

export function login({email, password}) {

    return function (dispatch) {
        dispatch(ApiAction.apiRequest());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(data => {
                dispatch(AuthAction.loginSuccess(data));
                dispatch(NavigationActions.navigate({routeName: 'Dashboard'}));
            })
            .catch(error => {
                dispatch(AuthAction.loginFailure(error));
                Toast.show({
                    text: 'Invalid username and password!',
                    position: 'bottom',
                    buttonText: 'OK',
                    type: 'danger',
                    duration: 2000
                })
            });
    };
}


export function logout() {
    return function (dispatch) {
        dispatch(AuthAction.logoutSuccess());
        firebase.auth().signOut();
        dispatch(NavigationActions.navigate({routeName: 'Login'}));
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
                        dispatch(AuthAction.signupSuccess(data));
                        dispatch(NavigationActions.navigate({routeName: 'Login'}));
                    });
            })
            .catch(error => {
                dispatch(AuthAction.signupFailure(error));
                Toast.show({
                    text: error.message,
                    position: 'bottom',
                    buttonText: 'OK',
                    type: 'danger',
                    duration: 2000
                })
            });
    };
}