// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };
// var nextPageToken;
// if (window.nextPageToken === undefined) {
//   window.nextPageToken = '';
// }
var searchYouTube = ({key, query, max = 5, nextPage}, callback) => {
  const url = 'https://www.googleapis.com/youtube/v3/search/?';
  fetch(url + new URLSearchParams({
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    pageToken: nextPage ? nextPage : '',
    videoEmbeddable: 'true'
  }))
    .then( response => response.json())
    .then( data => {
      window.nextPageToken = data.nextPageToken;
      console.log('Success:', data.items);
      console.log('nextPageToken:', nextPageToken);
      if (callback) {
        callback(data.items);
      }
    })
    .catch((error) => console.error(error));

};

// $('#demo').pagination({
//   dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
//   locator: 'items',
//   totalNumber: 120,
//   pageSize: 20,
//   ajax: {
//       beforeSend: function() {
//           dataContainer.html('Loading data from flickr.com ...');
//       }
//   },
//   callback: function(data, pagination) {
//       // template method of yourself
//       var html = template(data);
//       dataContainer.html(html);
//   }
// })


export default searchYouTube;


/*
.catch((error) => {
      console.error('Error:', error);
    });
*/



