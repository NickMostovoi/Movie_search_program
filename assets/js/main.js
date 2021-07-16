let movieList = null;

const createMarkup = () => {
    const movieWrapper = document.createElement('div');
    const movies = document.createElement('div');

    movieWrapper.classList.add('wrapper');

    movies.classList.add('movies');
    movieWrapper.appendChild(movies);

    document.body.appendChild(movieWrapper);

    movieList = document.querySelector('.movies');
};

const addMovieToList = (movie) => {
    const item = document.createElement('div');
    const img = document.createElement('img');
    
    img.src = movie.Poster;
    img.classList.add('movie__image');

    item.classList.add('movie');

    item.appendChild(img);

    movieList.appendChild(item);
};

createMarkup();