import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import streetReducer from './reducers/streets';
import houseReducer from './reducers/houses';
import flatReducer from './reducers/flats';

const reducer = combineReducers({ 
   streetReducer,
   houseReducer,
   flatReducer,
  });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;

