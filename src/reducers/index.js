import { combineReducers } from 'redux';
import { addReducer } from './addReducer';
import { stateReducer } from './stateReducer';
import { removeReducer } from './removeReducer';

export const reducers = combineReducers({
    state: stateReducer,
    remove: removeReducer
    }
);

export const addNote = combineReducers({
        noteList: addReducer
    }
);

export default reducers