import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import no_image from '../../no_image.png'
import { removeWatchlist } from '../../store/actions/watchlistActions'
import swal from 'sweetalert';

export class Dashboard extends Component {

  removeList = (index) => {
    swal({
      title: "This cannot be undone",
      text: "Remove from watchlist?",
      icon: "error",
      buttons: true,
      dangerMode: true
    }).then((value) => {
      if(value){
      console.log(index)
      this.props.removeWatchlist(this.props.auth.uid, index)
    }
    });
  }

  render(){
    const { auth, profile } = this.props;
    if(!auth.uid) return <Redirect to="/" />
    return(
      <div className="dashboard container">
        <div className="row">
            <div className="row">
            {profile.watchList && profile.watchList.length > 0 ?
              <h4> {profile.firstName ? `${profile.firstName}'s WatchList:` : null} </h4> :
              <h4> Add to your watch list by browsing for tv shows </h4>}
              <div>
                {profile.watchList && profile.watchList.map((item, index) => {
                  return(
                    <div style={{display : 'inline-block', padding : '10px'}} className="hoverable" key={index}>
                      <h6 className="left-align">
                        {item.name}
                        <span className="right" onClick={() => {this.removeList(index)}}> <a className="waves-effect waves-red btn-flat">Remove</a> </span>
                      </h6>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeWatchlist: (user, listItem) => dispatch(removeWatchlist(user, listItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
