import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid';

const getStyles = makeStyles(theme => ({
    media: {
      height: '20rem',
      width: '15rem',
      paddingTop: '56.25%'
    }
  }))

  const MovieCard = props => {
      const classes = getStyles()
      const { id, imageurl, title, overview, popularity, release_date } = props

      return (
        <Card key={id}>
          <Grid container>
          <Grid item xs={6}>
          <CardMedia 
            className={classes.media}
                image={imageurl}/>
          </Grid>
          
          <Grid item xs={6}>
          <CardHeader
              
              title={title}
              
              />
              <CardContent>
                <div>
                  Popularity: {popularity}  
                </div>
                <div>
                  Release date: {release_date}
                </div>
                
              {overview}
              </CardContent>
          </Grid>
           
          </Grid>
            
        </Card>
    )
  }
  export default MovieCard
