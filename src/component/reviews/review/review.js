import React from 'react';
import StarRating from 'react-star-rating-component';
import Moment from "react-moment";
import './review.css'

const review = (props) => {
  return (
     <div className="review">
          <div className="review__header">
        < div className="review__author" > {<img className="avatar" src={props.avater}alt="avater"/>  }
          <p>{props.author.name}</p>
            </div>
        <div className="review__stars" title="Rated 3 our of 5 stars"><StarRating 
          name="rate2" 
          editing={true}
          starCount={5}
          value={props.rating}
        /></div><time className="review__time" datetime={props.created}><Moment fromNow>{props.created}</Moment></time>
          </div>
          <div className="review__body">
            <p>{props.text} </p>
          </div>
</div>
  )
}

export default review; 