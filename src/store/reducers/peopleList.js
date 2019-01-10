const defaultState = {
    loading: false,
    error: false,
    errorMsg: '',
    nextPage: '',
    people: [],
    defaultPeople: []
};

export default function (state=defaultState, action) {
    switch(action.type) {
        case 'FETCH_PEOPLE_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_PEOPLE_SUCCESS':
            return {
                ...state,
                loading: false,
                people: [...action.payload],
                defaultPeople: [...action.payload]
            }
        case 'FETCH_PEOPLE_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        case 'SET_PEOPLE':
            return {
                ...state,
                loading: false,
                people: [...action.payload]
            }
        case 'SET_PEOPLE_DEFAULT':
            return {
                ...state,
                loading: false,
                people: [...state.defaultPeople]
            }
        default:
            return state;
    }
};