import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import MovieCard from './MovieCard'
import TvCard from './TvCard'




const getStyles = makeStyles(theme => ({
    root: {
      margin: '5em 0'
    }
  }))

  const MultiSearch = (props) => {
      const classes = getStyles()
      return (
    
          <div className='container'>
           
              <Grid container className={classes.root} spacing={5}>
                {props.movies.map(movie => {
                    if(movie.media_type == 'tv'){
                        const { id, poster_path, name, overview , popularity,first_air_date } = movie
                        return (
                            <Grid item xs={12}>
                            <TvCard
                                key={id}
                                
                                id={id}
                                
                                imageurl={"https://image.tmdb.org/t/p/w400/"+ poster_path}
                                
                                title = {name}
                               
                                overview = {overview}
                                popularity = {popularity}
                                release_date = {first_air_date}
                                // publisher={publisher}
                            />
                            </Grid>
                        )
                    }else if(movie.media_type == 'movie'){
                        const { id, poster_path, title, overview , popularity, release_date} = movie
                        return (
                            <Grid item xs={12}>
                            <MovieCard
                                key={id}
                                
                                id={id}
                                
                                imageurl={"https://image.tmdb.org/t/p/w400/"+ poster_path}
                                
                                
                                title={title}
                                overview = {overview}
                                popularity = {popularity}
                                release_date = {release_date}
                            />
                            </Grid>
                        )
                    }
              
                })}
                </Grid>
          </div>
      )
  }

  export default MultiSearch