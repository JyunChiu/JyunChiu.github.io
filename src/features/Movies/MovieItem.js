import React, { Component } from 'react';
import { ReactRouterLink, Link, Router } from 'react-router-dom';
import styled from 'styled-components';
import Scss from './MoviesCss.scss';
import EditMovie from './EditMovie';

// const Wrapper = styled.div`
//   @import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
//   font-family: 'cwTeXYen', sans-serif;
//   color: white;
//   margin: 20px 100px;
//   width: 55%
//   // background: blue;
//   background: #423F3F;
//   border-radius: 5px;
//   box-shadow:0px 8px 18px -5px rgba(0,0,0,0.4);
//   position: relative;

//   &:hover  {
//     background-color:black;
//     opacity:0.25;
//     transition: background 0.8s ease;

//   }

// `;

const Poster = styled.div`
  // background : orange;
  float: left;
  padding: 1em;
  margin-top: 8px;

  img {
    width:180px;
    height:180px;
  }

  p {
    // background: red;
    width:180px;
    color: white;
    letter-spacing: 3px;
    font-size: 15px;
    margin-top: 20px;
    float: left;
  }

  }
`;

const Text = styled.div`
  // background: yellow;
  float: left;
  text-align: left;
  width: 70%;
  margin: 2em 1em;

  h3{
    // background: blue;
    // letter-spacing: 1px;
    margin-top: 3px;
    padding-left: 12px;
    border-left: 2px solid white;
    width: 90%;
  }

  p{
    // background: green;
    font-size: 15px;
    letter-spacing: 3px;
    line-height:25px
    width: 95%;
    margin-top: 20px;
    border-top: 0.3px solid white;
    padding-top: 30px;


  }`;

class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    // console.log('MovieItem的props', this.props);
    return (
      <div
        className={Scss.wrapper}
        onClick={() => this.props.newpage(movie.id)}
        onKeyDown={this.props.newpage}
      >
        <Poster>
          <img src={movie.image} alt="Poster" /><br />
          <p>{movie.tag}</p>
        </Poster>
        <Text>
          <h3 >{movie.title}</h3>
          <p>{movie.content}</p>
        </Text>
        <div className={Scss.overlay} />
        <div className={Scss.buttonInside}>
          <EditMovie
            editmovie={this.props.editmovie}
            movie={this.props.movie}
          />
          <div
            className={Scss.buttonDelete}
            onClick={() => this.props.deletemovies(movie.id)}
            onKeyDown={this.props.deletemovies}
          >Delete
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
