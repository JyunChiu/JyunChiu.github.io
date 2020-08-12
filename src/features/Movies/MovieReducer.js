import { handleActions } from 'redux-actions';
import { actionTypes } from './MovieActions';

const initialState = {
  movies: [],
  term: '',
  data: {},
  numOfmovie: '',
  pageNumber: 1
};

export default handleActions({
  [actionTypes.MOVIE___GET_MOVIES]: (state, payload) => {
    const { movies, numOfmovie } = payload;
    return {
      ...state,
      movies,
      numOfmovie
    };
  },
  [actionTypes.MOVIE___SEARCHING_FOR]: (state, payload) => {
    const { movies, searchTerm } = payload;
    return {
      ...state,
      movies,
      term: searchTerm,
    };
  },
  [actionTypes.MOVIE___ADD_MOVIES]: (state, payload) => {
    const { data } = payload;
    return {
      ...state,
      data,
      // movies: [...state.movies, data],
    };
  },
  [actionTypes.MOVIE___DELETE_MOVIES]: (state, payload) => {
    const { actionId } = payload;
    // console.log('>>>>>>>>state', state.movies);
    // console.log('>>>>>>>>actionId', actionId);
    const movieList = state.movies.filter(movie => movie.id !== actionId);
    let num = movieList.length;
    console.log('刪除之後的電影總數', num);
    return {
      ...state,
      movies: movieList,
      numOfmovie: num
    };
  },
  [actionTypes.MOVIE___EDIT_MOVIE]: (state, payload) => {
    const { updatedata } = payload;
    // console.log('>>>>>>>>state.movies', state.movies);
    const updateList = state.movies.map(movie => {
      if (movie.id === updatedata.id) {
        return {
          ...movie,
          ...updatedata };
      } return movie;
    }
    );
    return {
      ...state,
      movies: updateList
    };
  },
  [actionTypes.MOVIE___PAGINATE]: (state, payload) => {
    const { movies, totalItems, pageNumber } = payload;
    // console.log('pagination到reducer了');
    // console.log('pagination到reducer了movies', state.movies);
    return {
      ...state,
      movies,
      numOfmovie: totalItems,
      pageNumber
    };
  },
  [actionTypes.MOVIE___NEWPAGE]: (state) => {
    return {
      ...state,
    };
  },
  [actionTypes.MOVIE___GET_SINGLE_MOVIE]: (state, payload) => {
    const { movie } = payload;
    return {
      ...state,
      movies: movie
    };
  },
}, initialState);
