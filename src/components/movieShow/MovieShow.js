import React, { Component } from 'react'
import no_image from '../layout/no_image.png'
import { connect } from 'react-redux'

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
    const { auth } = this.props;
    return(
      <div className="dashboard container">
      {this.state.data ?
        <div>
          {this.state.data.poster_path ?
            <img style={{padding : '30px'}} className="left" src={`https://image.tmdb.org/t/p/w500/${this.state.data.poster_path}`} alt="tv header" />
            : <img style={{padding : '30px'}} width="500" height="770" src={no_image} />
          }
          <div className="section" style={{padding : '10px'}}>
            <h3>
              {this.state.data.name}
              <span style={{fontSize : '20px'}} className="right"> Rating: {this.state.data.vote_average}/10 </span>
            </h3>
            {auth.uid ?
              <a className="waves-effect waves-light btn-small"><i className="material-icons left">add</i>Add to Watchlist</a>
              : ""}
          </div>
          <div className="divider"></div>
          <div className="section" style={{padding : '10px'}}>
            <h5> Overview </h5>
            <p> {this.state.data.overview}</p>
          </div>
          <div className="divider"></div>
          <div className="section" style={{padding : '10px'}}>
            <h5> Genres </h5>
            {this.state.data.genres.map((item, index) => {
              return(
                <p key={index}> {item.name} </p>
              )
            })}
          </div>
          <div className="divider"></div>
          <div className="section" style={{padding : '10px'}}>
            <h5> History </h5>
            <p> First Air Date: {this.state.data.first_air_date} </p>
            <p> Total Episodes: {this.state.data.number_of_episodes} </p>
            <p> Total Seasons: {this.state.data.number_of_seasons} </p>
          </div>
          <div className="divider"></div>
          <a href={this.state.data.homepage}> View {this.state.data.name}'s website </a>
        </div>
      : ""}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, null)(MovieShow);
