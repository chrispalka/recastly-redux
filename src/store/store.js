import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';


// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const initialState = {
  videoList: [],
  currentVideo: null
};

var store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;

// store.subscribe( () => {
//   console.log('state\n', store.getState());
//   debugger;
// });