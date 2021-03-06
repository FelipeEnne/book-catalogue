import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './bookscategories';

const allReducer = combineReducers({
  categories: categoriesReducer,
});

const middlewares = [thunk];

const store = createStore(allReducer, applyMiddleware(...middlewares));

export default store;