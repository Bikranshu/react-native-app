import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Import custom components
import navReducer from './navReducer';
import authReducer from './authReducer';
import drawerReducer from './drawerReducer';


const rootReducer = combineReducers({
    nav : navReducer,
    auth : authReducer,
    drawer : drawerReducer,
    form: formReducer,  // ← redux-form
});

export default rootReducer;