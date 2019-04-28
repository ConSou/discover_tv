import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import no_image from '../../no_image.png'
import Search from '../movieShow/Search'
import SearchResults from '../movieShow/SearchResults'
import BrowsePopular from '../movieShow/BrowsePopular'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularData: null,
      search: '',
      searchData: null
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
      .then(response => response.json())
      .then(data => {
        this.setState({ popularData: data.results })
      });
    }

  searchMovies = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&query=${this.state.search}&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({ searchData: data.results }, function(){
          console.log(this.state.searchData)
        })
      });
  }

  render(){
    if(this.state.searchData == null){
      return(
        <div className="dashboard container">
          <div className="row">
            <Search handleSubmit={this.handleSubmit} searchMovies={this.searchMovies}/>
            <BrowsePopular popularData={this.state.popularData} />
          </div>
        </div>
      )
    }else{
      return(
        <div className="dashboard container">
          <div className="row">
            <Search handleSubmit={this.handleSubmit} searchMovies={this.searchMovies}/>
            <SearchResults searchData={this.state.searchData}/>
          </div>
        </div>
      )
    }
  }
}

export default Landing;
