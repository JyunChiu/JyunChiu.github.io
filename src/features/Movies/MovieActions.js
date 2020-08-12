import { push } from 'react-router-redux';
import Resource from '~~apis/resource';
import AppConfig from '~~config';


export const actionTypes = {
  MOVIE___GET_MOVIES: 'MOVIE___GET_MOVIES',
  MOVIE___SEARCHING_FOR: 'MOVIE___SEARCHING_FOR',
  MOVIE___ADD_MOVIES: ' MOVIE___ADD_MOVIES',
  MOVIE___DELETE_MOVIES: 'MOVIE___DELETE_MOVIES',
  MOVIE___EDIT_MOVIE: 'MOVIE___EDIT_MOVIE',
  MOVIE___PAGINATE: 'MOVIE___PAGINATE',
  MOVIE___NEWPAGE: 'MOVIE___NEWPAGE',
  MOVIE___GET_SINGLE_MOVIE: 'MOVIE___GET_SINGLE_MOVIE'
};

export function paginate(pageNumber) {
  // console.log('Action裡的pagination執行了');
  console.log('Action的pagination收到的pageNumber', pageNumber);
  return (dispatch) => {
    return Resource.MovieResource.getMovies()
      .then((response) => {
        console.log('準備分頁 ......');
        const currentMovieList = response.data;
        pageNumber = pageNumber || 1;
        const pageOfMovieList = currentMovieList.slice((pageNumber - 1) * AppConfig.itemsCountPerPage, pageNumber * AppConfig.itemsCountPerPage);
        console.log('pageOfMovieList', pageOfMovieList);
        dispatch({
          type: actionTypes.MOVIE___PAGINATE,
          movies: pageOfMovieList,
          totalItems: currentMovieList.length,
          pageNumber
        });
      })
      .catch(error => console.log(error));
  };
}

export function getmovies() {
  return (dispatch) => {
    return Resource.MovieResource.getMovies()
      .then((response) => {
        console.log('get movies ......');
        // console.log('get movies response >>>>>>', response.data[0]);
        let numOfmovie = 0;
        const TotalMovie = response.data;
        TotalMovie.map(() => numOfmovie++);
        console.log('目前電影總數', numOfmovie);
        dispatch({
          type: actionTypes.MOVIE___GET_MOVIES,
          movies: response.data,
          numOfmovie,
        });
        dispatch(paginate());
      })
      .catch(error => console.log(error));
  };
}

export function searchingFor(term) {
  return (dispatch) => {
    return Resource.MovieResource.getMovies()
      .then((response) => {
        console.log('get movies ......');
        const targetmovie = response.data;
        const result = targetmovie.filter((movie) => {
          console.log('term', term);
          const n = movie.title.search(term);
          // console.log('term', term);
          // console.log('movie.title', movie.title);
          // console.log('movie', movie);
          return n >= 0;
        });
        dispatch({
          type: actionTypes.MOVIE___SEARCHING_FOR,
          movies: result,
          searchTerm: term
        });
      })
      .catch(error => console.log(error));
  };
}

export function addmovies(data) {
  // console.log('Action裡的addmovies收到的data', data);
  console.log('Action裡的addmovies執行了');

  return (dispatch) => {
    return Resource.MovieResource.addMovies(data)
      .then((response) => {
        // console.log('addMovies的response', response.data);
        dispatch({
          type: actionTypes.MOVIE___ADD_MOVIES,
          data
        });
        dispatch(getmovies());
      })
      .catch(error => console.log(error));
  };
}

export function deletemovies(info) {
  console.log('Action的deletemovies收到的id', info.id);
  console.log('Action裡的deletemovies執行了');
  return (dispatch) => {
    return Resource.MovieResource.deleteMovies(info.id)
      .then((response) => {
        // console.log('deleteMovies的response', response.data);
        dispatch({
          type: actionTypes.MOVIE___DELETE_MOVIES,
          actionId: info.id
        });
        dispatch(paginate(info.pageNumber));
      })
      .catch(error => console.log(error));
  };
}

export function editmovie(updatedata) {
  console.log('Action裡的editmovie執行了');
  // console.log('Action的editmovies收到的id', updatedata.id);
  // console.log('Action的editmovies收到的updatedata', updatedata);
  return (dispatch) => {
    return Resource.MovieResource.editMovie(updatedata)
      .then((response) => {
        // console.log('editMovie的response', response.data);
        dispatch({
          type: actionTypes.MOVIE___EDIT_MOVIE,
          updatedata
        });
      })
      .catch(error => console.log(error));
  };
}

export function newpage(id) {
  console.log('Action裡的newpag執行了');
  console.log('Action的newpage收到的movie', id);
  return (dispatch) => {
    dispatch(push(`/movie/${id}`));
    dispatch({
      type: actionTypes.MOVIE___NEWPAGE,
    });
  };
}

export function getSingleMovie(id) {
  return (dispatch) => {
    return Resource.MovieResource.getSingleMovie(id)
      .then((response) => {
        console.log('get single movies ......');
        console.log('get single movies ......', response.data);
        dispatch({
          type: actionTypes.MOVIE___GET_SINGLE_MOVIE,
          movie: response.data,
        });
      })
      .catch(error => console.log(error));
  };
}
