import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({ data: data.results })
      });
    }

  searchMovies = () => {

  }

  render(){
    return(
      <div className="dashboard container">
        <div>
          Discover.
          Explore.
          Watch.
        </div>
        <div className="row">
          <form className="col m12">
            <div className="row">
              <div className="input-field col m6">
                <i className="material-icons prefix">search</i>
                <input id="icon_prefix" type="text" className="validate" onChange={this.searchMovies}></input>
                <label htmlFor="icon_prefix">Search For Movies</label>
              </div>
            </div>
          </form>
          <h5> Browse Popular </h5>
          <div>
            {this.state.data && this.state.data.map((item, index) => {
              return(
                <div style={{display : 'inline-block', padding : '10px'}} className="hoverable" key={index}>
                  <h6 className="center-align">{item.original_name}</h6>
                  <Link to={`/movie/${item.id}`} className="right-align">
                    <img src={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`} alt="tv header" />
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

export default Landing;
