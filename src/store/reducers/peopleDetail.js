const defaultState = { 
    loading: false,
    error: false,
    people: {
        name: '',
        height: '',
        mass: '',
        birth_year: '',
        gender: '',
        homeworld: [],
        species: [],
        vehicles: []
    }
};

export default function(state=defaultState, action) {
    switch (action.type) {
        case 'FETCH_DETAIL_LOADING': 
            return {
                ...state,
                loading: true
            }
        case 'FETCH_DETAIL_SUCCESS':
            return {
                ...state,
                loading: false,
                people: {
                    ...action.payload
                }
            }
        case 'FETCH_DETAIL_ERROR':
            return {
                ...state,
                error: true,
                loading: false
            }
        default:
            return state;
    }
};