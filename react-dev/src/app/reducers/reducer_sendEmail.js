import {SEND_EMAIL} from '../actions/types';

const INITIAL_STATE = {
    msg: '',
    success: false
};

export default (state, action) => {
    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case SEND_EMAIL:
            return {msg: action.msg, success: action.success};
    }

    return state
}
