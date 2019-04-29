import React, { Component } from 'react'

const Search = (props) => {

    return(
      <form className="col m12">
        <div className="row">
          <div className="input-field col m6">
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" className="validate" onChange={props.searchMovies}></input>
            <label htmlFor="icon_prefix">Search For TV shows or Movies</label>
          </div>
          <div className="input-field col m6">
            <button className="btn waves-effect waves-light" type="submit" onClick={props.handleSubmit}>
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }

export default Search;
