import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import TvCard from './TvCard'
import { Dropdown,DropdownButton } from 'react-bootstrap';


const getStyles = makeStyles(theme => ({
    root: {
      margin: '5em 0'
    }
  }))

  const Tvs = (props) => {
      const classes = getStyles()
      return (
          <div className='container'>
              <DropdownButton style={{textAlign: "center"}} id="dropdown-basic-button" title="Filter">
                    <Dropdown.Item href="/TvContainers">Airing Today</Dropdown.Item>
                    <Dropdown.Item href="/TvOnAirContainers">Now on air</Dropdown.Item>
                    <Dropdown.Item href="/TvPopularContainers">Popular</Dropdown.Item>
                    <Dropdown.Item href="/TvTopRatedContainers">Top Rated</Dropdown.Item>

                </DropdownButton>
              <Grid container className={classes.root} spacing={5}>
                {props.Tvs.map(tv => {
                const { id, poster_path, name, overview , popularity, first_air_date} = tv
                return (
                    <Grid item xs={12}>
                    <TvCard
                        key={id}
                        
                        id={id}
                        
                        imageurl={"https://image.tmdb.org/t/p/w400/"+ poster_path}
                        title={name}
                        overview = {overview}
                        popularity = {popularity}
                        release_date = {first_air_date}
                    />
                    </Grid>
                )
                })}
                </Grid>
          </div>
      )
  }

  export default Tvs