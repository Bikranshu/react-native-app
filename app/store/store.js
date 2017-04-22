import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

// Import custom components
import rootReducer from '../reducers/rootReducer';

/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(rootReducer, compose(
    applyMiddleware(thunkMiddleware, logger)
));

export default store;