import React from 'react';
import Review from "../reviews/review/review"; 


const reviews = (props) => {
  let reviews = props.reviews.map((review, i) => {
    return <Review
      key={review.text + i}
      text={review.text}
      rating={review.rating}
      author={review.author}
      created={review.created}
       avater={`https:${review.author.avatar}`}
      />
        }); 
  return (
    <div>
      {reviews}
    </div>
  )
}

export default reviews; 