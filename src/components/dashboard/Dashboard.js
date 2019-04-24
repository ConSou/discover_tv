import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render(){
    const { auth, profile } = this.props;
    if(!auth.uid) return <Redirect to="/" />
    return(
      <div className="dashboard container">
        {profile.firstName ? `Welcome ${profile.firstName}` : null}
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

export default connect(mapStateToProps, null)(Dashboard);
