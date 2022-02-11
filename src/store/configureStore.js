import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';


const reducer = combineReducers({ 
   streetsReducer,
  //  housessReducer,
  //  flatssReducer,
  //  inhabitantsReducer
  });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;

