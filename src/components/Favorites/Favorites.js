import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMoviesFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div className="container">
        <h2>Películas Favoritas</h2>
        <ul className="container_favori">
        {this.props.moviesFavourites && this.props.moviesFavourites.map(moviesFavourites =>{
           return (
            <li className="list_movies">
              <Link to={`/movie/${moviesFavourites.id}`}>
                <img src={moviesFavourites.poster} />
                <span className="title">
                    <p>{moviesFavourites.title}</p>
                    <p className="type">{moviesFavourites.type}</p>
                </span>
              </Link>
              <div className="btm">
                <button onClick={() => this.props.removeMoviesFavorite(moviesFavourites.id)}>X</button>
              </div>       
            </li>
          )})}
        </ul>
          
      </div>
    );
  }
}


function mapStateToProps(state) {

  return {
    moviesFavourites:state.moviesFavourites
  }
}
function mapDispatchTo(dispatch){
  return{
    removeMoviesFavorite: movie=>dispatch(removeMoviesFavorite(movie))
  }
}


export default connect(
mapStateToProps,
mapDispatchTo
)(ConnectedList);