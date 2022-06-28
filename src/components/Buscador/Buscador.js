import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies,addMovieFavorite,RemoveDetalle,Poster} from "../../actions/index";
import { AiOutlinePlus,AiOutlineRight,AiOutlineLeft} from "react-icons/ai";
import style from "./Buscador.module.css";
import styleSarch from "./MoviesBuscador.module.css";
import PostRamdom from "./PostRamdom";
import { BsEmojiFrown } from "react-icons/bs";

let scrollnext=style.pre
let scrollprev=style.pre

let errSearch= false
//const SearchRender=[];  pos si queres usarlo
function Buscador(props) {
  const [state,settitulo]=React.useState({
    title: "",
   
  });

 
 function handleChange(event) {
    settitulo({ title: event.target.value });
  }
  function scroll_next(e){
  
    document.getElementById("scroll").scrollLeft+=500;

  }
  function scroll_prev(){
    document.getElementById("scroll").scrollLeft-=500;

  }
  
  if (props.movie.length>5) {
    scrollnext = styleSarch.scroll_next
    scrollprev = styleSarch.scroll_prev
  }else{
    scrollnext=style.pre  
    scrollprev=style.pre
  }


 function handleSubmit(event) {
    event.preventDefault();
    
    if (state.title==="") {
      if (props.movie.length>0) {
        props.Poster("Error3");
        errSearch=true
      }else{
        props.Poster("Error2");
        errSearch=true
      }
    
    }else{
      props.getMovie(state.title);
      props.Poster(true);
      errSearch=false
    }
  }


  React.useEffect(()=>{
    setTimeout(()=>{
      if (errSearch) {
        if (props.movie.length>0) {
          props.Poster("Error4");
        }else{
          props.Poster("Error1");
        }
      }
    },300)
  },[props.searchstyle.form_container])

  function onclick(movie) {
    props.addMovieFavorite(movie);
  }

    return (
    <div className={props.searchstyle.container_Movie}>
      <PostRamdom  value={props.searchstyle.poster} key={1}/>
        <div className={props.searchstyle.detall_movie}>
          <h2>Movies</h2>
          <p>Obten los detalles y guarda tus mejores películas</p>
        </div>
        <form className={props.searchstyle.form_container} onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title"></label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              placeholder="Search Movies"
              value={state.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">SEARCH</button>
        </form>
      <button  className={scrollnext} onClick={(e) =>scroll_next(e)}><AiOutlineRight/></button>
      <ul id="scroll" className={styleSarch.Contenr_buscador}>
        {props.movie && props.movie.map(movies =>{
          if (movies=='Too many results.') {
            return (
              <div  className={styleSarch.Erro_movies}>
                <span className={styleSarch.Erro_emojin}><BsEmojiFrown /></span>
              </div>)
          }
          if (movies=="Movie not found!") {
                return (
                <div  className={styleSarch.Erro_movies}>
                  <p>{movies}</p>
                  <span className={styleSarch.Erro_emojin}><BsEmojiFrown /></span>
                </div>)
          }else{
              return (
                <li className={styleSarch.list_movies}>
                  <Link to={`/movie/${movies.imdbID}`}>
                    <img src={movies.Poster} />
                    <span className={styleSarch.title}>
                        <p>{movies.Title}</p>
                        <p className={styleSarch.type}>{movies.Type}</p>
                    </span>
                  </Link>
                    <div className={styleSarch.btmfv}>
                      <button  onClick={() =>onclick({
                        key:movies.imdbID,
                        title: movies.Title,
                        id: movies.imdbID,
                        poster:movies.Poster,
                        type:movies.Type
                      })}><AiOutlinePlus /></button>
                    </div>                  
                </li>
              );
            }
        })}
      </ul>
      <button className={scrollprev}  onClick={() =>scroll_prev()}><AiOutlineLeft /></button>
    </div>
  );
}
 



function mapStateToProps(state) {
    return {
      movie: state.moviesLoaded,
      favorite: state.moviesFavourites,
      searchstyle: state.poster
    }
}
function mapDispatchTo(dispatch){
    return{
      addMovieFavorite: movie=>dispatch(addMovieFavorite(movie)),
      getMovie: title => dispatch(getMovies(title)),
      Poster: valor => dispatch(Poster(valor)),
      removeDetalle:()=> dispatch(RemoveDetalle()),
      
    }
}


export default connect(
  mapStateToProps,
  mapDispatchTo
)(Buscador);
