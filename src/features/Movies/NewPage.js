import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import Scss from './MoviesCss.scss';
import * as MovieActions from './MovieActions';

const Poster = styled.div`
  // background : orange;
  float: left;
  padding: 1em;
  margin-top: 8px;

  img {
    width:180px;
    heght:180px;
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

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center ;
  background:#2D2D2D;
  // background:red;
  height: 760px
  // vertical-align: middle;
  `;

  @connect(
    state => ({
      movie: state.movie.movies,
    }),
    dispatch => ({
      actions: bindActionCreators(MovieActions, dispatch),
    })
  )

class NewPage extends Component {
    componentDidMount() {
      console.log('NewPage this.props', this.props.match.params.id);
      this.props.actions.getSingleMovie(this.props.match.params.id);
    }
    render() {
      const { movie } = this.props;
      console.log('NewPage this.props', this.props);
      return (
        <Container>
          <div className={Scss.wrapper}>
            <Poster>
              <img src={movie.image} alt="Poster" /><br />
              <p>{movie.tag}</p>
            </Poster>
            <Text>
              <h3>{movie.title}</h3>
              <p>{movie.content}</p>
            </Text>
          </div>
        </Container>
      );
    }
  }

export default NewPage;
