// import { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
//
// import apiConfig from '../../config/apiConfig';
// import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from '../../constants/apiConstants';
// import useDefaultHeaders from './useDefaultHeaders';
// import ApiDataContext from '../../context/ApiDataContext';
//
// const useFetch = (initialResource) => {
//     const [url] = useState(apiConfig.api.url.base);
//     const [defaultHeaders] = useState(useDefaultHeaders());
//
//     const { dispatch } = useContext(ApiDataContext);
//
//     console.log('fetch');
//     useEffect(() => {
//         let didCancel = false;
//
//         const fetchData = async () => {
//             dispatch({ type: FETCH_INIT });
//
//             try {
//                 const response = await axios.get(`${url}/${initialResource}`, defaultHeaders);
//                 if (!didCancel) {
//                     dispatch({ type: FETCH_SUCCESS, payload: response.data })
//                 }
//             } catch (error) {
//                 if (!didCancel) {
//                     dispatch({ type: FETCH_FAILURE, error })
//                 }
//             }
//         };
//
//         fetchData();
//
//         return () => { didCancel = true };
//     }, [initialResource, url, defaultHeaders, dispatch]);
// };
//
// export default useFetch;