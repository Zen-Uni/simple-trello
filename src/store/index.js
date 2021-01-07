import { createStore } from 'redux';

import trelloReducer from './reducer';

const store = createStore(
    trelloReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;