import {} from "../actions/index";

import FETCH_KEYWORD_RESULTS from '../actions/types';

const INITIAL_STATE = {results: ['hello']};

export default function (state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    console.log('keyword results:', action.type, action.payload)

    switch (action.type) {
        case FETCH_KEYWORD_RESULTS:
            console.log('updating state')
            return {
                ...state,
                results: action.payload.data.results
            };
        default:
            return state;
    }
}