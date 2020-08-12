import ApiService from '../ApiService';

const MovieResource = {
  getMovies: () =>
    ApiService.get('/movies'),
  addMovies: (data) => {
    console.log('Resource的addMovies收到的data', data);
    return ApiService.post('/movies', { data });
  },
  deleteMovies: (id) => {
    console.log('Resource的deleteMovies收到的id', id);
    return ApiService.delete(`/movies/${id}`);
  },
  editMovie: (updatedata) => {
    console.log('Resource的editMovie收到的data', updatedata);
    return ApiService.put(`/movies/${updatedata.id}`, { data: updatedata });
  },
  getSingleMovie: (id) =>
    ApiService.get(`/movies/${id}`)
};

export default MovieResource;
