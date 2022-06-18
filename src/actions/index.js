


export function addMovieFavorite(payload) {
  return { 
      type: "ADD_MOVIE_FAVORITE",
      payload 
    };
}

export function getMovies(titulo) {
  
   return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=1d7f8b3a&s=`+titulo)
      .then(r => r.json())
      .then(json => {
        dispatch({ type:"GET_MOVIES", payload:json });
      })
      .catch(err => console.error(err));
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
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=1d7f8b3a&i=${id}&plot=full`)
        .then(r => r.json())
        .then(json => {
          dispatch({ type:"GETMOVIE_DETAIL", payload:json });
        })
      .catch(err => console.error(err));
      
    }
}

