import { combineReducers } from 'redux';

import list from './list';

const trelloReducer = combineReducers({
    list,
})

export default trelloReducer;
