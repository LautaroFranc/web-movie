import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies,addMovieFavorite,RemoveDetalle} from "../../actions/index";
import { AiOutlinePlus,AiOutlineRight,AiOutlineLeft} from "react-icons/ai";
import style from "./Buscador.module.css";
let scrollnext=style.pre
let scrollprev=style.pre

function Buscador(props) {

  const [state,settitulo]=React.useState({
    title: "",
  });
   
  React.useEffect(()=>{
      console.log("ahy")
   },[props.movie])
 
 function handleChange(event) {
    settitulo({ title: event.target.value });
  }
  function scroll_next(){
    document.querySelector('.Buscador_Contenr_buscador__2cVQW').scrollLeft+=500;
  }
  function scroll_prev(){
    document.querySelector('.Buscador_Contenr_buscador__2cVQW').scrollLeft-=500;
  }


 function handleSubmit(event) {
    event.preventDefault(); 
     scrollnext = style.scroll_next
     scrollprev = style.scroll_prev
    props.getMovie(state.title);
  }
  


  function onclick(movie) {
    props.addMovieFavorite(movie)
  }
    return (
      <div className={style.container_Movie}>
        <div className={style.detall_movie}>
          <h2>Películas</h2>
          <p>Obten los detalles y guarda tus mejores películas</p>
        </div>
        <form className={style.form_container} onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title"></label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              placeholder="Buscar Películas"
              value={state.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <button  className={scrollnext} onClick={() =>scroll_next()}><AiOutlineRight/></button>
        <ul className={style.Contenr_buscador}>
          {props.movie && props.movie.map(movies =>{
            return (
              <li className={style.list_movies}>
                <Link to={`/movie/${movies.imdbID}`}>
                  <img src={movies.Poster} />
                  <span className={style.title}>
                      <p>{movies.Title}</p>
                      <p className={style.type}>{movies.Type}</p>
                  </span>
                </Link>
                  <div className={style.btmfv}>
                    <button  onClick={() =>onclick({
                      title: movies.Title,
                      id: movies.imdbID,
                      poster:movies.Poster,
                      type:movies.Type
                    })}><AiOutlinePlus /></button>
                  </div>                  
              </li>
            )
          })}
        </ul>
        <button className={scrollprev}  onClick={() =>scroll_prev()}><AiOutlineLeft /></button>
      </div>
    );
  }



function mapStateToProps(state) {
    return {
      movie: state.moviesLoaded,
      favorite: state.moviesFavourites
    }
}
function mapDispatchTo(dispatch){
    return{
      addMovieFavorite: movie=>dispatch(addMovieFavorite(movie)),
      getMovie: title => dispatch(getMovies(title)),
      removeDetalle:()=> dispatch(RemoveDetalle())
    }
}


export default connect(
  mapStateToProps,
  mapDispatchTo
)(Buscador);



