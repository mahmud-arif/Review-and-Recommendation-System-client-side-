import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import BackgroundSlideshow from 'react-background-slideshow'
import './landing.css'; 

// import image1 from '../images/1.jpg'; 
// import image2  from "../images/2.jpg"; 
// import  image3 from '../images/3.jpg'; 


class Landing extends Component {
  render() {
    return (<div>
        <div className="bimage__section">
          {/* <div className="bimage__section">
            <BackgroundSlideshow images={[ image1, image2, image3 ]} />
          </div> */}

          <div className="s013">
            <form>
              <fieldset>
                <legend>Find Local Businesses in Dhaka</legend>
              </fieldset>
              <div className="inner-form">
                <div className="left">
                  <div className="input-wrap first">
                    <div className="input-field first">
                      <label>WHAT</label>
                      <input type="text" placeholder="ex: food, service, isp, restaurant" />
                    </div>
                  </div>
                  <div className="input-wrap second">
                    <span>
                      <i className="fas fa-map-marker" />
                    </span>
                    <input className="search__input" type="text" placeholder=" Location" name="search" />
                  </div>

                  <div className="search__results" />
                </div>
                <button className="btn-search" type="button">
                  SEARCH
                </button>
              </div>
            </form>
          </div>

          <div>
            <ul className="items">
              <li className="item">
                <i className="fas fa-utensils" />
                <Link to="/stores"> Restaurants</Link>
              </li>
              <li className="item">
                <i className="fas fa-wifi" />
                <Link to="/isps"> Isp</Link>
              </li>
              <li className="item">
                <i className="fas fa-truck" />
                <Link to="deliverys"> Delivery</Link>
              </li>
              <li className="item">
                <i className="fas fa-shopping-cart" />
                <Link to="/ecomarces"> E-Commerce</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="catagory__section">
          <p className="catagory__header">
            Find the best Businesses in Town
          </p>
          <ul className="catagories">
            <li className="catagory">
              <Link to="/stores">
                <div className="catagory__image catagory__image-1" />
                <p className="catagory__name">Restaurants</p>
              </Link>
            </li>
            <li className="catagory">
              <Link to="">
                <div className="catagory__image catagory__image-2 " />
                <p className="catagory__name">ISP</p>
              </Link>
            </li>
            <li className="catagory">
              <Link to="">
                <div className="catagory__image catagory__image-3" />
                <p className="catagory__name">Delivery</p>
              </Link>
            </li>
            <li className="catagory">
              <Link to="">
                <div className="catagory__image catagory__image-4" />
                <p className="catagory__name">Shopping</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="tag-section">
          <div className="content">
            <div className="inner">
              <h1 className="tag-header">Browse Businesses By Tag</h1>
              <ul className="tags">
                <li className="tag">
                  <Link className="tag__link" to="/tags/Licensed">
                    <span className="tag__text">Licensed</span>
                    <span className="tag__count">10</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Open Late">
                    <span className="tag__text">Open Late</span>
                    <span className="tag__count">8</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Vega">
                    <span className="tag__text">Vegetarian</span>
                    <span className="tag__count">6</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Family Friendly">
                    <span className="tag__text">Family Friendly</span>
                    <span className="tag__count">5</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Wifi">
                    <span className="tag__text">Wifi</span>
                    <span className="tag__count">4</span>
                  </Link>
                </li>

                <li className="tag">
                  <Link className="tag__link" to="/tags/Wifi">
                    <span className="tag__text">Takes Reservations</span>
                    <span className="tag__count">4</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Wifi">
                    <span className="tag__text">Shared IP</span>
                    <span className="tag__count">2</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Wifi">
                    <span className="tag__text">Real Ip</span>
                    <span className="tag__count">4</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Wifi">
                    <span className="tag__text">Optical Fiber</span>
                    <span className="tag__count">4</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Wifi">
                    <span className="tag__text">Parking</span>
                    <span className="tag__count">4</span>
                  </Link>
                </li>
                <li className="tag">
                  <Link className="tag__link" to="/tags/Wifi">
                    <span className="tag__text">Air Conditioned</span>
                    <span className="tag__count">4</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>);
  }
}

export default Landing; 