import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

var App = function () {

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search getYouTubeVideos={this.getYouTubeVideos} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
            videos={this.state.videos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
