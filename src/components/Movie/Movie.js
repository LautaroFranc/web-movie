import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
    }
    render() {
        
        return ( 
            <div className="movie-detail">
                <div className="conteiner-text"> 
                    <div className="imgPeli"> 
                        <img src={this.props.movies.Poster}/>
                        <span className="year"> {this.props.movies.Year}</span>
                     </div>
                    <h3 className="title"> {this.props.movies.Title}  </h3>
                    <div className="plot"> {this.props.movies.Plot}  </div>                
                </div>
                <div className="contener-data">
                    <span className="runtime">Time: {this.props.movies.Runtime}  </span>
                    <span className="Actors">Actors: { this.props.movies.Actors}  </span>
                    <span className="Lenguage">Lenguage: {this.props.movies.Language}  </span> 
                </div>       
    
                {this.props.movies.Genre&&this.props.movies.Genre.map(e=>{
                    return (
                        <div className="Genere-cont">  
                        <button className="Genere-item">{e}</button>
                        </div>)
                })}
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movies:state.movieDetail
    }
}

function mapDispatchTo(dispatch){
    return{
        getMovieDetail: movie=>dispatch(getMovieDetail(movie)),
    }
}


export default connect(
  mapStateToProps,
  mapDispatchTo
)(Movie);


