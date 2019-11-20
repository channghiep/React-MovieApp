import React, { Component } from 'react'
import { getSearchesMovies } from '../services/api'
import SearchesMovies from '../Components/SearchesMovies'
import Searches from '../Components/Searches'
import SearchesTvs from '../Components/SearchesTvs'


class SearchMoviesContainer extends Component{
    state = {
        movies: []
    }

    componentWillMount(){

    this.fetchData(this.props.keyword, this.props.filter)
    }
    
    fetchData = (keyword, filter) => {
        getSearchesMovies(keyword,filter).then(movies => {
            this.setState({
                movies: movies
            })
           
        })
    }
    
    
    
    render(){
        if(this.props.keyword == ''){
            return(
                <h1 style={{textAlign: "center"}}>
                    Please enter a search
                </h1>
            )
        }
        else if(this.props.keyword != '' && this.state.movies.length == 0){
            return(
                <h1 style={{textAlign: "center"}}>
                    Sorry, there were no results
                </h1>
            )
        }else{
            if(this.props.filter === "movie"){
                return(
                    <div>
        
              <SearchesMovies
                           
                            movies = {this.state.movies}
                            />
                    </div>
                
                )
            }
            else if(this.props.filter === "tv"){
                return(
                    <div>
              <SearchesTvs
                            movies = {this.state.movies}
                            />
                    </div>
        
                )
            }else if(this.props.filter === "multi"){
                return(
                    <div>
              <Searches
                            movies = {this.state.movies}
                            />
                    </div>
        
                )
            }
        }
        
   
    }
}
export default SearchMoviesContainer