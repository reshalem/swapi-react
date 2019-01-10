import axios from 'axios';

export function fetchPeopleList() {
    return (dispatch) => {
        dispatch({type: 'FETCH_PEOPLE_LOADING'});
        axios({
            method: 'GET',
            url: 'https://swapi.co/api/people'
        })
            .then(({ data }) => {
                console.log(data);
                const result = {
                    nextPage: data.next,
                    people: data.results
                };
                dispatch({type: 'FETCH_PEOPLE_SUCCESS', payload: data.results});
            })
            .catch((err) => {
                console.log('Fetch people error:', err);
                dispatch({type: 'FETCH_PEOPLE_ERROR'});
            });
    };
};

export function setPeople(filteredPeople) {
    return {type: 'SET_PEOPLE', payload: filteredPeople};
};

export function setPeopleToDefault() {
    return {type: 'SET_PEOPLE_DEFAULT'};
};