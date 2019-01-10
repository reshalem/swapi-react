import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// REDUCERS
import peopleList from './reducers/peopleList';
import peopleDetail from './reducers/peopleDetail';

const rootReducer = combineReducers({
    peopleList,
    peopleDetail
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;