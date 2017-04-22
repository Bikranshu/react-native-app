import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';


const rootReducer = combineReducers({
    auth : authReducer,
    form: formReducer,  // ← redux-form
});

export default rootReducer;