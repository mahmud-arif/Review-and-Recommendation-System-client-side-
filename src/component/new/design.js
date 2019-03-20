import React, { Component }from 'react';
import './design.css'
import { Link } from "react-router-dom"
import StarRatings from 'react-star-ratings';





class Design extends Component{




  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let ratting; 
  //   if (nextProps.name) {
  //     if (nextProps.rating.lenght === 0) {
  //       ratting = 0; 
  //       return; 
  //     }
  //      ratting = nextProps.rating.map(val => val.rating).reduce((a, b)=> a+b);
  //      console.log(ratting); 
  //   }

  // }

  

  render() {
    
  let ratting = this.props.ratting; 
   ratting = Math.ceil(ratting / 5) || 0; 
  
    return (
      <div className="arrange_unit">
          <div className="card business-passport-card">
            <div className="card_photo">
            <div className="photo-box photo-box--interactive photo-box--background"
            style = {{backgroundImage: `url(/uploads/${this.props.photo })`}} >
              <a href={`/${this.props.catagory}/${this.props.slug}`} className="photo-box_link js-analytics-click" data-analytics-label="biz-photo">
                  <img alt="Executive Order Bar &amp; Lounge" className="photo-box-img" height="400" src={`https://s3-media2.fl.yelpcdn.com/bphoto/0AqDg6VIS0fiawPQxMTO3A/l.jpg`}/>
                </a>
              </div>
            </div>
            <div className="card_body">
              <div className="card_content">
                <h3 className="card_content-title--linked u-text-truncate">
                  <div className="business-link-hovercard js-business-link-hovercard">
                    <span className="business-link-hovercard_business-link js-business-link">
                    <a className="biz-name js-analytics-click" data-analytics-label="biz-name" href={`/${this.props.catagory}/${this.props.slug}`}><span>{this.props.name}</span></a>
                    </span>
                  </div>
                </h3>
                <div className="biz-rating biz-rating-large clearfix">
                  <div title="4.5 star rating">
                    <StarRatings
                            rating={3}
                            starRatedColor = "rgba(255, 0, 0, .6)"
                          numberOfStars={5}
                           starDimension = "20px"
                          starSpacing={"1"}
                            name='rating'
                          />
                  </div>

                  <span className="review-count rating-qualifier">
                    {this.props.reviews} reviews
                  </span>
                </div>

                <div className="price-category">
                  <span className="category-str-list">
                    {this.props.address}
                  </span>
                </div>

                <div className="neighborhood u-text-truncate u-space-t1 u-space-b1">
                  <span className="neighborhood-str-list"> SoMa </span>
                </div>
                <p className="business-passport-card_date-opened">
                <span aria-hidden="true" style={{ width: 18, height: 18}} className="icon icon--18-flame icon--size-18 icon--currentColor">
                    <svg role="img" className="icon_svg">
                      <use href="#18x18_flame"></use>
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
   }
}




export default Design;
