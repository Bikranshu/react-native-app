import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import drawerReducer from './drawerReducer';


const rootReducer = combineReducers({
    auth : authReducer,
    drawer : drawerReducer,
    form: formReducer,  // ← redux-form
});

export default rootReducer;