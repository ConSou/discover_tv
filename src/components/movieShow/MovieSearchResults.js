import React from 'react'
import { Link } from 'react-router-dom'
import no_image from '../../no_image.png'

const MovieSearchResults = (props) => {

    return(
      <div>
        <h5> Movie Search Results </h5>
        <div>
          {props.searchData && props.searchData.map((item, index) => {
            return(
              <div style={{display : 'inline-block', padding : '10px'}} className="hoverable" key={index}>
                <h6 className="center-align">{item.title}</h6>
                <Link to={`/movie/${item.id}`} className="right-align">
                  {item.backdrop_path ?
                  <img  width="400" height="225" src={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`} alt="tv header" />
                  : <img width="400" height="225" src={no_image} alt="tv header"/>}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

export default MovieSearchResults;
