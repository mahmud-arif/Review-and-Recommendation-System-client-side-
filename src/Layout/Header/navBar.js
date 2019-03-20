import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions'; 
import SearchBar from "../../container/autoComplete/sugInput"; 
import logo1 from '.././SVG/log1.svg'; 
import logo2 from '.././SVG/log2.svg'; 
import logo3 from '.././SVG/log3.svg'
import logo5 from '.././SVG/log5.svg'
import logo6 from '.././SVG/log6.svg'
import './navBar.css'


class Navbar extends Component {
   onLogoutClick(e) {
     e.preventDefault();
     this.props.clearCurrentProfile();
     this.props.logoutUser();
   }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(user); 

    const authLinks = (
      <div className = "nav__section nav__section--user" >
        <li className="nav__item">
          <NavLink className="nav__link" to="/feed">
            Post Feed
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink 
            to=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav__link"
          >
            Logout
          </NavLink >
        </li>
        <li className="nav__item">
          < NavLink
            to="/dashboard"
            className="nav__link"
          >
            <img
              className = "avatar"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
          </NavLink>
        </li>
      </div>
    );

    const guestLinks = (
      <div className = "nav__section nav__section--user" >
        <li className="nav__item">
          <Link className="nav__link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/login">
            Login
          </Link>
        </li>
        </div>
    );

     return (
    <header className="top">
    
      <nav className="nav">
        <div className="nav__section nav__section--pages">
          <li className="nav__item"><NavLink className="nav__link  nav__link--logo" to="/index.html"><img src={logo1} className="svg" alt="logo1" /></NavLink> </li>

          <li className="nav__item"><NavLink className="nav__link" to="/"  rel="noopener noreferrer"><img src={logo2} className="svg" alt="logo"/><span>Local Business</span></NavLink></li>



          <li className="nav__item"><NavLink  className="nav__link" to="/tags"  rel="noopener noreferrer"><img src={logo3} className="svg" alt="logo3" /><span>Tags</span></NavLink></li>


          <li className="nav__item"><NavLink className="nav__link" to="/tops"  rel="noopener noreferrer"><img src={logo5} className="" alt="logo5" /><span>Tops</span></NavLink ></li>




          <li className="nav__item"><NavLink  className="nav__link" to="/map"  rel="noopener noreferrer"><img src={logo6} className="" alt="logo6" /><span>Map</span></NavLink ></li>

         </div>
      <div className="nav__section nav__section--search">
        <div className="search"><SearchBar/>
          <div className="search__results"></div>
        </div>
      </div>
         {isAuthenticated ? authLinks : guestLinks}

    </nav>
  </header>
  )
  }
 
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
