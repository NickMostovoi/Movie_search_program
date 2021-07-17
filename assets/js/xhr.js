
const siteUrl = 'http://www.omdbapi.com/';

const getData = (url) => fetch(url).then((res) => res.json()).then((json) => json.Search);

const search = 'Iron man';
// const search2 = 'Superman';
// const search3 = 'Batman';

// const ironman = getData(`http://www.omdbapi.com/?apikey=379c8492&s=${search}`)
// const superman = getData(`http://www.omdbapi.com/?apikey=379c8492&s=${search2}`)
// const batman = getData(`http://www.omdbapi.com/?apikey=379c8492&s=${search3}`)

// batman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));


getData(`${siteUrl}?apikey=379c8492&s=${search}`)
    .then((movies) => movies.forEach((movie) => addMovieToList(movie)));

