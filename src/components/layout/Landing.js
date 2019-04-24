import React, { Component } from 'react'

class Landing extends Component {
  render(){
    return(
      <div className="dashboard container">
        <div>
          Welcome.
          Discover.
          Explore.
          Watch.
        </div>
        <div className="row">
          <form className="col m12">
            <div className="row">
              <div className="input-field col m6">
                <i className="material-icons prefix">search</i>
                <input id="icon_prefix" type="text" className="validate"></input>
                <label htmlFor="icon_prefix">Search For Movies</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Landing;
