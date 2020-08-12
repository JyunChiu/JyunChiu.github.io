import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Scss from './MoviesCss.scss';
import * as MovieActions from './MovieActions';
import MovieList  from './MovieList';
import AddMovieModal from './AddMovieModal';

// const AddMovie = styled.button`
//   // background: ${props => (props.primary ? 'palevioletred' : 'white')};
//   // color: ${props => (props.primary ? 'white' : 'palevioletred')};
//   background: #2D2D2D;
//   color: white;

//   cursor: pointer;
//   font-size: 15px;
//   margin: 2em 1em;
//   padding: 0.25em 1em;
//   align-items: center;
//   border: 1px solid white;
//   border-radius: 3px;

//   &:hover {
//     color: #2D2D2D ;
//     background: white;
//     // opacity: 0.8;
//   }
// `;

const Input = styled.input`
  @import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
  font-family: 'cwTeXYen', sans-serif;
  color: #fff;
  background:black;
  font-size: 15px;
  border: 0;
  border-radius: 3px;
  padding: 4px 15px;
  width: 250px;
  height: 35px
`;

const Container = styled.div.attrs({
  direction: props => props.way,
})`
display:flex;
flex-direction: ${props => props.direction};
align-items: center;
justify-content: center ;
background:#2D2D2D;

`;

@connect(
  state => ({
    movies: state.movie.movies,
    term: state.movie.term,
    newId: state.movie.numOfmovie,
    pageNumber: state.movie.pageNumber
  }),
  dispatch => ({
    actions: bindActionCreators(MovieActions, dispatch),
  })
)

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    // this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler = debounce(term => {
    console.log('e.target.value');
    this.props.actions.searchingFor(term);
  }, 1000)

  addHandler(data) {                                           /* 3 */
    console.log('addHandler執行了');
    // console.log('container收到的data', data);
    this.props.actions.addmovies(data);                        /* 4 */
  }

  deleteHandler = (id) => {
    const info = { id, pageNumber: this.props.pageNumber };
    console.log('Container裡的deleteHandler執行了');
    // console.log('deleteHandler收到的id', id);
    this.props.actions.deletemovies(info);
  }

  editHandler = (updatedata) => {
    console.log('Container裡的editHandler執行了');
    // console.log('editHandler收到的data', updatedata);
    this.props.actions.editmovie(updatedata);
  }

  pageHandler = (pageNumber) => {
    console.log('Container裡的editHandler執行了');
    this.props.actions.paginate(pageNumber);
  }

  newpage = (movie) => {
    // console.log('---------newpage');
    // console.log('Container裡的newpage收到的movie', movie);
    this.props.actions.newpage(movie);
  }

  render() {
    console.log('Container的this.props', this.props);
    return (
      <div>
        <header className={Scss.header}>
          {/* <img src={logo} className="logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <Container way="row" >
          <Input
            placeholder="Search"
            onChange={e => { this.searchHandler(e.target.value); }}
            // value={term}
          />
          <AddMovieModal
            newId={this.props.newId}
            addmovies={this.addHandler}
          />
        </Container>
        <div>
          <MovieList
            movies={this.props.movies}
            getmovies={this.props.actions.getmovies}
            deletemovies={this.deleteHandler}
            editmovie={this.editHandler}
            paginate={this.pageHandler}
            totalItems={this.props.newId}
            newpage={this.newpage}

          />
        </div>
        {/* <footer className="footer">
          <MoviePagination movies={this.props.movies} />
        </footer> */}
      </div>
    );
  }
}


export default MovieContainer;
