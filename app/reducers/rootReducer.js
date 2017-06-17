import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Import custom components
import navReducer from './navReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    nav : navReducer,
    auth : authReducer,
    form: formReducer,  // ← redux-form
});

export default rootReducer;