let movieList = null;

const createStyle = () => {
  const headStyle = document.createElement('style');

  headStyle.innerHTML = `
      *           { box-sizing: border-box; }
      body        { margin: 0; }
      .wrapper    { padding: 20px; }
      .movies {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
      }
      
      .movie {
          display: flex;
          align-content: center;
          justify-content: center;
      }
      
      .movie__image {
          width: 100%;
          object-fit: cover
      }
    `;

  document.head.appendChild(headStyle);
};

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
createStyle();