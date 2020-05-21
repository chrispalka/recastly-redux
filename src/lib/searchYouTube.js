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


var searchYouTube = ({key, query, max = 5}, callback) => {
  const url = 'https://www.googleapis.com/youtube/v3/search/?';
  fetch(url + new URLSearchParams({
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }))
    .then( response => response.json())
    .then( data => {
      console.log('Success:', data);
      if (callback) {
        callback(data.items);
      }
    })
    .catch((error) => console.error(error));
};


export default searchYouTube;


/*
.catch((error) => {
      console.error('Error:', error);
    });
*/



