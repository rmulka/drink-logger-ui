import { SET_FILTER, RESET_FILTER_DATA, SET_FILTER_DATA } from '../constants/filterConstants';

const filterReducer = (state, action) => {
    switch (action.type) {
        case (RESET_FILTER_DATA):
            return { filters: {}, filteredData: action.payload };
        case (SET_FILTER):
            return {
                ...state,
                filters: { ...state.filters, [action.filter]: action.value }
            };
        case (SET_FILTER_DATA):
            return {
                ...state,
                filteredData: action.payload,
            };
        default:
            throw new Error('Unsupported filter action');
    }
};

export default filterReducer;