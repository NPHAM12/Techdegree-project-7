import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config.js'

import HomePage from './components/HomePage'
import Header from './components/Header';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PageNotFound from './components/PageNotFound'

class App extends Component {
  constructor() {
    super();
    //initial state
    this.state = {
      search:'',
      gifs: [],
      oceans: [],
      mountains: [],
      forests: [],
      snows: [],
      loading: true
    };
  }

// a specific array photo in photos object will be added to a specific array when performSearch component is mounted on DOM
// Fetching data requests from API and response them into an array in this.state
  componentDidMount() {
    this.performSearch('ocean');
    this.performSearch('mountain');
    this.performSearch('forest');
    this.performSearch('snow');
  }

// Search photos by a term -> query = term in Json file (API), then response data back to webpage
  performSearch = (query) => {
    // console.log(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
          //Oceans
          if (query === "ocean") {
            this.setState({
              oceans: response.data.photos.photo,
                      loading: false});
                     // console.log(this.state.oceans);
                     // console.log(`${query}:`, this.state.search);
          }
          //Mountains
          else if (query === "mountain") {
            this.setState({
              mountains: response.data.photos.photo,
                         loading: false});
                        // console.log(this.state.mountains);
                        // console.log(`${query}:`, this.state.search);
          }
          //Forests
          else if (query === "forest") {
            this.setState({
              forests: response.data.photos.photo,
                       loading: false});
                      // console.log(this.state.forests);
                      // console.log(`${query}:`, this.state.search);
          }
          else if (query === "snow") {
            this.setState({
              snows: response.data.photos.photo,
                     loading: false});
                      // console.log(this.state.bridges);
                      // console.log(`${query}:`, this.state.search);
          }
          //Anything
          else {
            this.setState({
              search: query,
              gifs: response.data.photos.photo,
                    loading: false});
              console.log(this.state.search, 'gifs:', this.state.gifs);
          }
      })
      .catch(error => {console.log("Error getting data", error)});
  }

  render(){
    // console.log(this.state.forests);
    return(
      <BrowserRouter>
      <div className='container'>
        <Header />

        {/*Search Form*/}
        <SearchForm onSearch={this.performSearch}/>

        {/*Selections*/}
        <Nav />

        {/*Photo Display Here*/}
          {
            (this.state.loading)
             ? <p>Loading...</p> //if true
             : //if true
             <Switch>
                //default home page is ocean photos
                <Route exact path='/' render ={() => <Redirect to='/oceans'/>}/>
                //About the web app
                <Route path='/about' component={HomePage} />
                //set routes for selections and use these routes in Nav component (Link)
                <Route path='/oceans' render ={() => <Gallery data={this.state.oceans} result='Ocean'/>}/>
                <Route path='/mountains' render ={() => <Gallery data={this.state.mountains} result='Mountain'/>}/>
                <Route path='/forests' render ={() => <Gallery data={this.state.forests} result='Forest'/>}/>
                <Route path='/snows' render ={() => <Gallery data={this.state.snows} result='Snow'/>}/>
                <Route exact path="/:searchText" render={()=><Gallery data={this.state.gifs} result={this.state.search}/>}/>
                // when URL is not match with any Selections in menu
                <Route component={PageNotFound} />
             </Switch>
          }
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
