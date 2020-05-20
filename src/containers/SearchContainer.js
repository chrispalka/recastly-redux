import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = (state) => {
  return {
    state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    handleSearchInputChange: (q) => { dispatch(handleSearchChange(q)); },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.


