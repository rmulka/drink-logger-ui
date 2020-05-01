import { FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS } from '../constants/apiConstants';
import { RESET_FILTER_DATA, SET_FILTER_DATA, SET_FILTER } from '../constants/filterConstants';

const dataReducer = (state, action) => {
    switch (action.type) {
        case (FETCH_INIT):
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMessage: null,
                errorCode: null
            };
        case (FETCH_SUCCESS):
            return {
                ...state,
                isLoading: false,
                isError: false,
                errorMessage: null,
                errorCode: null,
                data: action.payload,
                filteredData: action.payload
            };
        case (FETCH_FAILURE):
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.error.errorMessage,
                errorCode: action.error.errorCode
            };
        case (RESET_FILTER_DATA):
            return { ...state, filters: {}, filteredData: action.payload };
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
            throw new Error(`Unsupported action ${action.type} in data reducer`);
    }
};

export default dataReducer;