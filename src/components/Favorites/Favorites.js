import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMoviesFavorite } from "../../actions";
import { BsEmojiFrown } from "react-icons/bs";
import './Favorites.css';
import { GoTrashcan } from "react-icons/go";
 function ConnectedList(props) {
 
    if (props.moviesFavourites.length>0) {
    return (
      <div className="container">
        <h2 className="Titulo">Películas Favoritas</h2>
        <ul className="container_favori">

        {props.moviesFavourites && props.moviesFavourites.map(moviesFavourites =>{
           return (
            <li className="list_movies_f">
              <Link to={`/movie/${moviesFavourites.id}`}>
                <img src={moviesFavourites.poster} />
                <span className="title_f">
                    <p>{moviesFavourites.title}</p>
                    <p className="type_f">{moviesFavourites.type}</p>
                </span>
              </Link>
              <div className="btm_f">
                <button onClick={() => props.removeMoviesFavorite(moviesFavourites.id)}><GoTrashcan/></button>
              </div>       
            </li>
          )})}
        </ul>
          
      </div>
    );
  } else{
    return (
      <div className="Null-favorite">
        <span className="Text-null">You don't have favorite movies</span>
        <span className="Emojin-null"><BsEmojiFrown /></span> 
      </div>
    )
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