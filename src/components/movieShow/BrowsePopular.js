import React  from 'react'
import { Link } from 'react-router-dom'

const BrowsePopular = (props) => {

    return(
      <div>
        <h5> Browse Popular </h5>
        <div>
          {props.popularData && props.popularData.map((item, index) => {
            return(
              <div style={{display : 'inline-block', padding : '10px'}} className="hoverable" key={index}>
                <h6 className="center-align">{item.original_name}</h6>
                  <Link to={`/tv/${item.id}`} className="right-align">
                    <img src={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`} alt="tv header"/>
                  </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

export default BrowsePopular;
