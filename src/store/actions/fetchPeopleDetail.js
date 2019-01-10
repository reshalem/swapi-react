import axios from 'axios';

export function fetchPeopleDetail(url) {
    return (dispatch) => {
        dispatch({typpe: 'FETCH_DETAIL_LOADING'});
        axios({
            method: 'GET',
            url: `${url}`
        })
            .then(({ data }) => {
                console.log(data);
                dispatch({type: 'FETCH_DETAIL_SUCCESS', payload: data});
            })
            .catch((err) => {
                console.log('Fetch detail error:', err);
                dispatch({type: 'FETCH_DETAIL_ERROR'});
            });
    };
};