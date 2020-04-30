import { FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS } from '../constants/apiConstants';

const fetchReducer = (state, action) => {
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
                data: action.payload
            };
        case (FETCH_FAILURE):
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.error.errorMessage,
                errorCode: action.error.errorCode
            };
        default:
            throw new Error('Unknown error occurred during data retrieval');
    }
};

export default fetchReducer;