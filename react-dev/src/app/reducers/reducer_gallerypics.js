import {FETCH_GALLERYPICS} from "../actions/index";

const INITIAL_STATE = {galleryPics: []};

export default function (state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case FETCH_GALLERYPICS:
            return {
                ...state,
                all: action.payload.data.results,
            };
        default:
            return state;
    }
}