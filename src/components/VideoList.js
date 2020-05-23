import React from 'react';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, handleVideoListEntryTitleClick, handleSearchChange}) => (
  <div className="video-list">
    <div id="paginate">
      <h5 className="click" onClick={() => handleSearchChange('', 'CAUQAA')}>2</h5>
    </div>
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
