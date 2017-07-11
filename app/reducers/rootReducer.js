import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Import custom components
import navReducer from './navReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';


const rootReducer = combineReducers({
    nav : navReducer,
    auth : authReducer,
    form: formReducer,  // ← redux-form
    search:searchReducer,
});

export default rootReducer;