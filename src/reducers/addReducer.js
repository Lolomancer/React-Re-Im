import React from 'react';

export let addReducer = (state=[], action) => {
    if (action.type === 'ADD') {
        return state.concat([action.payload])
    }
    return state;
};

export default addReducer