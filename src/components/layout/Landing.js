import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import no_image from './no_image.png'

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
        console.log(data.results)
        this.setState({ popularData: data.results })
      });
    }

  searchMovies = (e) => {
    this.setState({ search: e.target.value })
    // fetch(`https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&query=${this.state.search}&page=1`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.results)
    //     this.setState({ searchData: data.results })
    //   });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&query=${this.state.search}&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({ searchData: data.results })
      });
  }

  render(){
    if(this.state.searchData == null){
      return(
        <div className="dashboard container">
          <div className="row">
            <form className="col m12">
              <div className="row">
                <div className="input-field col m6">
                  <i className="material-icons prefix">search</i>
                  <input id="icon_prefix" type="text" className="validate" onChange={this.searchMovies}></input>
                  <label htmlFor="icon_prefix">Search For Movies</label>
                </div>
                <div className="input-field col m6">
                  <button className="btn waves-effect waves-light" type="submit" onClick={this.handleSubmit}>
                    Search
                  </button>
                </div>
              </div>
            </form>
            <h5> Browse Popular </h5>
            <div>
              {this.state.popularData && this.state.popularData.map((item, index) => {
                return(
                  <div style={{display : 'inline-block', padding : '10px'}} className="hoverable" key={index}>
                    <h6 className="center-align">{item.original_name}</h6>
                    <Link to={`/movie/${item.id}`} className="right-align">
                      <img src={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`} alt="tv header"/>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="dashboard container">
          <div className="row">
            <form className="col m12">
              <div className="row">
                <div className="input-field col m6">
                  <i className="material-icons prefix">search</i>
                  <input id="icon_prefix" type="text" className="validate" onChange={this.searchMovies}></input>
                  <label htmlFor="icon_prefix">Search For Movies</label>
                </div>
                <div className="input-field col m6">
                  <button className="btn waves-effect waves-light" type="submit" onClick={this.handleSubmit}>
                    Search
                  </button>
                </div>
              </div>
            </form>
            <h5> Search Results </h5>
            <div>
              {this.state.searchData && this.state.searchData.map((item, index) => {
                return(
                  <div style={{display : 'inline-block', padding : '10px'}} className="hoverable" key={index}>
                    <h6 className="center-align">{item.original_name}</h6>
                    <Link to={`/movie/${item.id}`} className="right-align">
                      {item.backdrop_path ?
                      <img  width="400" height="225" src={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`} alt="tv header" />
                      : <img width="400" height="225" src={no_image} />}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Landing;
