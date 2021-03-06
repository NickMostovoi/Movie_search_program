export let movieList = null;
export let inputSearch = null;
export let triggerMode = false;

export const createStyle = () => {
  const headStyle = document.createElement('style');

  headStyle.innerHTML = `    
    * {
    box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: "Comfortaa";
      background: linear-gradient(
        135deg,
        rgb(149, 149, 149) 0%,
        rgb(13, 13, 13) 46%,
        rgb(1, 1, 1) 50%,
        rgb(10, 10, 10) 53%,
        rgb(78, 78, 78) 76%,
        rgb(56, 56, 56) 87%,
        rgb(27, 27, 27) 100%
      );
      background-size: 100% 100vh;
      background-attachment: fixed;
    }
    .container {
      padding: 20px;
      max-width: 1280px;
      margin: auto;
    }
    h1 {
      font-size: 33px;
      color: #0bb4c0;
      text-align: center;
    }
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
      object-fit: cover;
    }
    .search {
      margin-bottom: 30px;
    }
    .search__input {
      padding: 10px 15px;
      width: 60%;
      display: block;
      border: 2px solid #0bb4c0;
      border-radius: 5px;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
    }
    .search__label-input {
      display: block;
      margin-bottom: 7px;
    }
    .search__checkbox {
      margin-left: 26%;
    }
    .search__label-checkbox {
      font-size: 12px;
      display: block;
      margin-top: -17px;
      margin-left: 28%;
      color: #ffffff;
      text-shadow: 0 0 0.8em #ffffff;
    }
    @media (max-width: 786px) {
      .search__checkbox {
        margin-left: 20%;
      }
      .search__label-checkbox {
        margin-left: 24%;
      }
    }
    @media (max-width: 456px) {
      .search__checkbox {
        margin-left: 22%;
      }
      .search__label-checkbox {
        margin-left: 28%;
      }
    }  
  `;

  document.head.appendChild(headStyle);
};

const createElement = ({
  type,
  attrs,
  container = null,
  position = 'append',
  evt = null,
  handler = null
}) => {

  const el = document.createElement(type);

  for (let key in attrs) {
    if (key !== 'innerText') {
      el.setAttribute(key, attrs[key]);
    } else {
      el.innerHTML = attrs[key];
    }
  }

  if (container && position === 'append') container.append(el);
  if (container && position === 'prepend') container.append(el);
  if (evt && handler) el.addEventListener(evt, handler);

  return el;
};

export const createMarkup = () => {
  const container = createElement({
    type: 'div',
    attrs: { class: 'container' },
    container: document.body,
    position: 'prepend'
  });

  createElement({
    type: 'h1',
    attrs: { innerText: '???????????????????? ?????? ???????????? ??????????????' },
    container
  });

  const searchBox = createElement({
    type: 'div',
    attrs: { class: 'search' },
    container
  });

  createElement('label', {
    class: 'search__label-input',
    for: 'search',
    innerText: '?????????? ??????????????'
  }, searchBox);

  inputSearch = createElement({
    type: 'input',
    attrs: {
      class: 'search__input',
      id: 'search',
      placeholder: '?????????????? ?????????????? ??????????...',
      type: 'text'
    },
    container: searchBox
  });

  createElement({
    type: 'input',
    attrs: {
      class: 'search__checkbox',
      id: 'checkbox',
      type: 'checkbox',
    },
    container: searchBox,
    evt: 'click',
    handler: () => triggerMode = !triggerMode
  });

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label-checkbox',
      for: 'checkbox',
      innerText: '?????????????????? ???????????? ?? ????????????'
    },
    container: searchBox,
  });

  movieList = createElement({
    type: 'div',
    attrs: { class: 'movies' },
    container
  });
};

export const clearMoviesMarkup = (el) => el && (el.innerHTML = '');

export const addMovieToList = (movie) => {
  const item = createElement({
    type: 'div',
    attrs: { class: 'movie' },
    container: movieList
  });

  createElement({
    type: 'img',
    attrs: {
      class: 'movie__image',
      src: /^(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'assets/img/no-image.jpg'
    },
    container: item
  });
};