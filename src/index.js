import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import handleSearchChange from './actions/search.js';
import VideoListContainer from './containers/VideoListContainer';
// import Root from './components/Root.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App API_KEY={YOUTUBE_API_KEY} searchYouTube={handleSearchChange} />
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/home" component={App} API_KEY={YOUTUBE_API_KEY} searchYouTube={handleSearchChange} />
      <Route path="/videolist" component={VideoListContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);