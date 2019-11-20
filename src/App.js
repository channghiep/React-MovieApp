import React, {Component} from 'react';
import './App.css';
import MoviesContainer from './MoviesContainers/MoviesContainer';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import TvsContainer from './TvContainers/TvsContainer'
import SearchMoviesContainer from './SearchContainers/SearchMoviesContainer'


import CenteredTabs from './Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {value:"", keyword: ""}
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    key:""
  
  }
  
  handleInputChange = () => {
    
    
    this.setState({
      key: this.search.value
    })

  }
  
  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }
  render(){
  return (
    <Router>
    <div className="App">
      <header style={{textAlign: "center"}} className="App-header">
      <h1 className='App-title'>Movies</h1>
  
    
      </header>
      <div>
        <Grid container justify="center" spacing={0} style={{textAlign: "center"}}>
          <Grid item xs={3}>
          <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
    
          </Grid>
          <Grid item xs={3}>
          <select value={this.state.value} onChange={this.handleChange}>
          <option value="">None</option>
          <option value="movie">Movie</option>
          <option value="multi">Multi</option>
          <option value="tv">Tv</option>
        </select>
          </Grid>
          <Grid item xs={3}>
          <button onClick={()=> this.setState({
          keyword : this.state.key
        }) }>Search</button>
          </Grid>
          
        </Grid>
       
       
    
         
      </div>
      <CenteredTabs/>
 
    </div>
    < Router>
    <Route exact path='/' component={() => <MoviesContainer sort="now_playing"/>}/>
    
    <Route exact path='/MoviesPopContainers' component={() => <MoviesContainer sort="popular"/>}/>
    <Route exact path='/MoviesTopRatedContainers' component={() => <MoviesContainer sort="top_rated"/>}/>
    <Route exact path='/MoviesUpComingContainers' component={() => <MoviesContainer sort="upcoming"/>}/>


    <Route exact path='/TvContainers' component={() => <TvsContainer sort="airing_today"/>}/>
    <Route exact path='/TvOnAirContainers' component={() => <TvsContainer sort="on_the_air"/>}/>
    <Route exact path='/TvPopularContainers' component={() => <TvsContainer sort="popular"/>}/>
    <Route exact path='/TvTopRatedContainers' component={() => <TvsContainer sort="top_rated"/>}/>

    <Route exact path='/SearchMoviesContainers' component={() => <SearchMoviesContainer keyword = {this.state.keyword} filter={this.state.value}/>}/>

    </Router>
    
    </Router>

  );
  }
}

export default App;
