import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    handleVideoListEntryTitleClick: (video) => { dispatch(changeVideo(video)); },
  };
};
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(VideoList);



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.