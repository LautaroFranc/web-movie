
export function Poster(payload) {
  return { 
      type: "POSTER",
      payload
    };
}

export function addMovieFavorite(payload) {
  return { 
      type: "ADD_MOVIE_FAVORITE",
      payload 
    };
}

export function getMovies(titulo) {
  
   return async function(dispatch) {
      try {
       const r = await fetch(`https://www.omdbapi.com/?apikey=1d7f8b3a&s=` + titulo);
       const json = await r.json();
       dispatch({ type: "GET_MOVIES", payload: json });
     } catch (err) {
       return console.error(err);
     }
  }
}

export function removeMoviesFavorite(id){
     return{
        type:"REMOVE_MOVIES",
        payload:id
    }
 }
export function RemoveDetalle(){
  return{
     type:"REMOVE_DETALLE",
 }
}
 export function getMovieDetail(id){
    return async function(dispatch) {
        const r = await fetch(`https://www.omdbapi.com/?apikey=1d7f8b3a&i=${id}&plot=full`);
      const json = await r.json();
      dispatch({ type: "GETMOVIE_DETAIL", payload: json });
    }
}





