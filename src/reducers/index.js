import styleSarch from "../components/Buscador/MoviesBuscador.module.css";
import style from "../components/Buscador/Buscador.module.css";
const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    poster:{ 
        poster:false,
        container_Movie:style.container_Movie,
        detall_movie: style.detall_movie,
        form_container: style.form_container,
      }
  };
  

   function rootReducer(state=initialState, {type, payload}){
      switch(type){
        case "POSTER": {
            if (payload==="Error1") {
                return{
                    ...state,
                    poster:{
                        poster:false,
                        form_container: style.form_container,
                        container_Movie:style.container_Movie,
                        detall_movie: style.detall_movie,
                        }
                    }
            }else if (payload==="Error2") {
                return{
                    ...state,
                    poster:{
                        poster:false,
                        form_container: style.formulario_Err,
                        container_Movie:style.container_Movie,
                        detall_movie: style.detall_movie,
                        }
                    }
                } else if (payload==="Error3") {
                    return{
                        ...state,
                        poster:{
                            poster:true,
                            container_Movie:styleSarch.container,
                            detall_movie: styleSarch.detalles,
                            form_container: styleSarch.formulario_Err,}
                    }
                }else if (payload==="Error4") {
                    return{
                        ...state,
                        poster:{
                            poster:true,
                            container_Movie:styleSarch.container,
                            detall_movie: styleSarch.detalles,
                            form_container: styleSarch.formulario,}
                    }
                }else{
                    return{
                        ...state,
                        poster:{
                            poster: payload,
                            container_Movie:styleSarch.container,
                            detall_movie: styleSarch.detalles,
                            form_container: styleSarch.formulario,}
                        }
                }
    }
        case  "GET_MOVIES" :{
            if(payload.Error){
                if (payload.Error=="Too many results.") {
                    alert("❌Ingrese mas de 3 letras por favor❌")
                    return{
                        ...state,
                        moviesLoaded: [payload.Error]
                    };
                }else{
                return {
                    ...state,
                    moviesLoaded: [payload.Error]
                };
            }
            }else{
            return {
               ...state,
               moviesLoaded: payload.Search.filter(movie=>movie.Poster!=='N/A')
           };
          }
        } 
       
            
        case  "ADD_MOVIE_FAVORITE" : {
            return {
                    ...state,
                    moviesFavourites: state.moviesFavourites.concat(payload)
            }
        }
        case "REMOVE_MOVIES":{
            return {
                        ...state,

                        moviesFavourites: state.moviesFavourites.filter(movie=>movie.id !== payload)
            }
        }
        
        case "GETMOVIE_DETAIL":{
            payload.Genre=payload.Genre.split(",")
            return {
                ...state,
                movieDetail: payload
            }
        }

        case "REMOVE_DETALLE":{
            return {
                ...state,
                movieDetail: {}
            }
        }

    default: return state;
    }
   
    
  }

  export default rootReducer;