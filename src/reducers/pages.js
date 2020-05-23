import Redux from 'redux';

var pageReducer = (state = null, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case 'REQUEST_PAGE':
    return action.page || null;
  default:
    return state;
  }
};

export default pageReducer;
