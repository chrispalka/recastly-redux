var requestPage = (page) => ({
  type: 'REQUEST_PAGE',
  payload: {
    page
  }
});

var receivePage = (page, videos) => ({
  type: 'REQUEST_PAGE',
  payload: {
    page,
    videos
  }
});