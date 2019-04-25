import React, { Component } from 'react'
import no_image from '../layout/no_image.png'

class MovieShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ data })
      });
    }

  render(){
    return(
      <div className="dashboard container">
      {this.state.data ?
        <div>
          {this.state.data.poster_path ?
            <img style={{padding : '10px'}} className="left" src={`https://image.tmdb.org/t/p/w500/${this.state.data.poster_path}`} alt="tv header" />
            : <img style={{padding : '10px'}} width="500" height="770" src={no_image} />
          }
          <p style={{padding : '10px'}}> {this.state.data.overview}</p>
        </div>
      : ""}
      </div>
    )
  }
}

export default MovieShow;
