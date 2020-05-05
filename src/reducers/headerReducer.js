import { createRef } from 'react';

import {
    CLOSE_ALL,
    CLOSE_POPPER,
    HEADER_INIT,
    TOGGLE_LINK
} from '../constants/headerConstants';

const headerReducer = (state, action) => {
    switch (action.type) {
        case (HEADER_INIT):
            return {
                ...state,
                anchorRefs: Array(state.arrLength).fill(null).map((_, i) => createRef()),
                open: Array(state.arrLength).fill(false),
                populating: false,
            };
        case (TOGGLE_LINK):
            return {
                ...state,
                open: state.open.map((el, i) => i === action.index ? !el : false),
            };
        case (CLOSE_POPPER):
            return {
                ...state,
                open: state.open.map((el, i) => i === action.index ? false : el),
            };
        case (CLOSE_ALL):
            return {
                ...state,
                open: Array(state.arrLength).fill(false)
            };
        default:
            throw new Error(`Unsupported header action ${action.type} in reducer`);
    }
};

export default headerReducer;