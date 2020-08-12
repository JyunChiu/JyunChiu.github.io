import React, { Component } from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import MoviePagination from './MoviePagination';
import Scss from './MoviesCss.scss';

const Container = styled.div.attrs({
  direction: props => props.way,
})`
  display:flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: center ;
  height: 100%;
  background: #2D2D2D;
  // background:red;
  `;

class MovieList extends Component {
  componentWillMount() {
    this.props.getmovies();
  }

  render() {
    console.log('MovieList的this props', this.props);
    const { movies } = this.props;
    return (
      <Container way="column" >
        { movies.map((movie) => {
              return (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  deletemovies={this.props.deletemovies}
                  editmovie={this.props.editmovie}
                  newpage={this.props.newpage}
                />);
                }
              )}
        <footer className={Scss.footer}>
          <MoviePagination
            movies={this.props.movies}
            paginate={this.props.paginate}
            totalItems={this.props.totalItems}
          />
        </footer>
      </Container>
    );
  }
}

// const Wrapper = styled.div`
//   @import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
//   font-family: 'cwTeXYen', sans-serif;
//   color: white;
//   margin: 20px 100px;
//   width: 55%
//   background: #423F3F;
//   border-radius: 5px;
//   box-shadow:0px 8px 18px -5px rgba(0,0,0,0.4);

//   &:hover  {
//     background-color:black;
//     opacity:0.25;
//     transition: background 0.8s ease;

//   }

// `;

// const Poster = styled.div`
//   background : orange;
//   float: left;
//   padding: 1em;
//   margin-top: 8px;

//   img {
//     width:180px;
//     heght:180px;
//   }

//   p {
//     background: red;
//     color: white;
//     letter-spacing: 3px;
//     font-size: 15px;
//     margin-top: 20px;
//     float: left;
//   }

//   }
// `;

// const Text = styled.div`
//   background: yellow;
//   float: left;
//   text-align: left;
//   width: 70%;
//   margin: 2em 1em;

//   h3{
//     background: blue;
//     // letter-spacing: 1px;
//     margin-top: 3px;
//     padding-left: 12px;
//     border-left: 2px solid white;
//     width: 90%;
//   }

//   p{
//     background: green;
//     font-size: 15px;
//     letter-spacing: 3px;
//     line-height:25px
//     width: 95%;
//     margin-top: 20px;
//     border-top: 0.3px solid white;
//     padding-top: 30px;

//   }`;

// class MovieList extends Component {
//   componentWillMount() {
//     this.props.getMovies();
//   }

//   render() {
//     const { movies } = this.props;
//     return (
//       <Container way="column" >
//         { movies.map((movie) => {
//               return (
//                 <Wrapper key={movie.id}>
//                   <Poster>
//                     <img src={movie.image} alt="poster" /><br />
//                     <p>{movie.tag}</p>
//                   </Poster>
//                   <Text>
//                     <h3>{movie.title}</h3>
//                     <p>{movie.content}</p>
//                   </Text>
//                 </Wrapper>);
//                 }
//               )}
//       </Container>
//     );
//   }
// }


export default MovieList;
