const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };
  

   function rootReducer(state=initialState, {type, payload}){
      
      switch(type){
        case  "GET_MOVIES" :{
            if(payload.Error){

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