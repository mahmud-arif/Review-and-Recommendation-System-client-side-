import React, { Component, Suspense } from 'react';

// Router and Redux related import 
//===================================================
import { Route, Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import Design from './component/new/single'
// import Geosug from '../src/container/GoogleAutoComplete/AutoLocation'
//======================================================

import NavBar from './Layout/Header/navBar'; 
import Landing from './Layout/Landing/landing';
import Footer from './Layout/Footer/footer'
import Spinner from './component/common/Spinner'; 
import PrivateRoute from './component/common/PrivateRoute';
import Tags from './container/TagSearch/tags';


import Dashboard from './component/dashboard/Dashboard';
import CreateProfile from './component/create-profile/CreateProfile';
import EditProfile from './component/edit-profile/EditProfile';
import Profiles from './component/profiles/Profiles';
import Profile from './component/profile/Profile';
import NotFound from './component/not-found/NotFound';
// import PrivateRoute from './component/common/PrivateRoute';


// ====================================================

const Login = React.lazy(() => import('./component/auth/Login')); 
const Register = React.lazy(() => import('./component/auth/Register')); 
const Top = React.lazy(() => import('./container/tops/tops')); 
const Stores = React.lazy(() => import('./container/stores/store')); 
const Isp = React.lazy(() => import('./container/Isp/isp'));
const SingleStore = React.lazy(() => import('./container/stores/singleStore/singleStore'));
const SingleIsp = React.lazy(() => import('./container/Isp/singleIsp/singleIsp')); 
const Ecomarces = React.lazy(() => import('./container/Ecomarce/Ecomerce')); 
const SingleEcom = React.lazy(() => import('./container/Ecomarce/singleEcom/singleEcom'));
const Delivary = React.lazy(() => import('./container/Delivary/delivary'));
const SingleDelivar = React.lazy(() => import('./container/Delivary/singleEcom/singleDelivar'));
const Geosug = React.lazy(() => import('../src/container/GoogleAutoComplete/AutoLocation')); 






// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
        <Provider   store={store}>
          <React.Fragment>
            <NavBar />
          <Route exact path="/" component={Landing} />
          <Suspense fallback={<Spinner/>}>
            <Switch>
              <Route exact path="/design" component={Design}/>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/tops" component={Top} />
              <Route exact path="/stores" component={Stores} />
               < Route path = '/restaurant/:slug'exact component = {SingleStore}/>
              <Route exact path="/isps" component={Isp} />
              <Route path='/isp/:slug' exact component={SingleIsp} />
              <Route exact path="/ecomarces" component={Ecomarces} />
              <Route exact path="/ecommerce/:slug" component={SingleEcom} />
              <Route exact path="/deliverys" component={Delivary} />
               <Route exact path="/delivery/:slug" component={SingleDelivar} />
              <Route exact path="/map" component={Geosug} />
              <Route path='/tags' component={Tags} />
               <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
            </Switch> 
          </Suspense>
          <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
             <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              {/* <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch> */}
              <Route exact path="/" component={Footer} /> 
          </React.Fragment>
        </Provider>
    );
  }
}

export default App;
