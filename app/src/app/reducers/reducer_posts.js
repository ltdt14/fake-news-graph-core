import {FETCH_POSTS} from "../actions/index";
import {FETCH_POST} from '../actions/index';

const INITIAL_STATE = {all: [], post: null, blogCurrPage: null, blogTotalPages: null, blogPreviousPage: false, blogNextPage: null, blogFirstPage: null, blogLastPage: null};

export default function (state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                all: action.payload.data.results,
                blogCurrPage: action.payload.data.currentPage,
                blogTotalPages: action.payload.data.totalPages,
                blogPreviousPage: action.payload.data.previous,
                blogNextPage: action.payload.data.next,
                blogFirstPage: action.payload.data.first,
                blogLastPage: action.payload.data.last
            };
        case FETCH_POST:
            console.log(action.payload.data)
            return {...state, post: action.payload.data};
        default:
            return state;
    }
}