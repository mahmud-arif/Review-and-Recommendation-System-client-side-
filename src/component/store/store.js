import React from 'react';
import { Link } from "react-router-dom"; 
import StarRatings from 'react-star-ratings';

import './store.css';

const store = (props) => (
  < li className = " my-container shadow  domtags--li  list-item" >
      <div className="lemon--div border-color--default">
        <div className="lemon--div u-padding-t3 u-padding-b3 border--top border-color--default">
          <div className="lemon--div searchResult border-color--default">
            <div className="lemon--div arrange border-color--default">
              <div className="lemon--div arrange-unit border-color--default">
                <div className="lemon--div u-space-r3 border-color--default">
                  <div className="lemon--div container__373c0__1sAOA border-color--default" style={{ width: 210, height: 210 }}>
                    <div className="lemon--div container__373c0__38MbV border-color--default" aria-label="Slideshow">
                      <div className="lemon--div child__373c0__35DrB border-color--default" style={{width: 210}}>
                        <div className="lemon--div border-color--default">
                          <img className="lemon--img__373c0__3bS5q photo-box-img__373c0__O0tbt" src={props.img}
                            alt="" height="210" width="210"/>
                        </div>
                        <div className="lemon--div button__373c0__IWHDi left__373c0__3QF30 disabled__373c0__3UDIp border-color--default">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lemon--div arrange-unit__373c0__1piwO arrange-unit-fill__373c0__17z0h border-color--default">
                <div className="lemon--div largerScrollablePhotos__373c0__3FEIJ arrange__373c0__UHqhV border-color--default">
                  <div className="lemon--div mainAttributes__373c0__1r0QA arrange-unit__373c0__1piwO arrange-unit-fill__373c0__17z0h border-color--default">
                    <div className="lemon--div border-color--default">
                      <div className="lemon--div businessName__373c0__1fTgn border-color--default">
                        <h3 className ="title lemon--h3__373c0__5Q5tF heading--h3__373c0__1n4Of alternate__373c0__1uacp" >
                          < a className = "lemon--a__373c0__1_OnJ link__373c0__29943 link-color--blue-dark__373c0__1mhJo link-size--inherit__373c0__2JXk5"
                          href="" onClick={props.clicked}>{props.name}</a>
                        </h3>

                      </div>
                      <div
                        className="lemon--div display--inline-block__373c0__2de_K u-space-t1 u-space-r1 border-color--default">
                      <span className="lemon--span__373c0__1xR0D display--inline__373c0__1DbOG border-color--default">
                        <StarRatings
                            rating={5}
                            starRatedColor = "rgba(255, 0, 0, .6)"
                          numberOfStars={4}
                           starDimension = "20px"
                          starSpacing={"1"}
                            name='rating'
                          />
                        </span>
                      </div>
                      <div></div>
                      <div></div>
                    </div>

                  </div>
                  <div className="lemon--div secondaryAttributes__373c0__7bA0w arrange-unit__373c0__1piwO border-color--default">
                  <span className="domtags--span__373c0__1VGzF"style={{fontWeight: "bold"}}>{props.location}</span>
                  </div>
                </div>

                <div></div>
                <div className="lemon--div u-space-t2 u-space-b2 border-color--default">
                  <div className="lemon--div arrange__373c0__UHqhV vertical-align-middle__373c0__2TQsQ border-color--default">
                    <div className="lemon--div arrange-unit__373c0__1piwO arrange-unit-fill__373c0__17z0h border-color--default">
                      <p className="lemon--p__373c0__1hkz1 text__373c0__2pB8f text__373c0__2P1WD alternateStyling__373c0__2ithU text-color--normal__373c0__K_MKN text-align--left__373c0__2pnx_" style={{fontFamily: "sans-serif"}}>{props.description}
                        <span className="lemon--span__373c0__1xR0D text__373c0__2pB8f text-color--blue-dark__373c0__PGWTX text-align--left__373c0__2pnx_">&nbsp;</span></p>
                    </div>
                  </div>
                </div>
                <div></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
);

export default store;