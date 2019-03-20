import React, { Component, Suspense } from 'react';
import axios from 'axios';
// import Reviews from '../../component/reviews/reviews'; 
import './singleIsp.css';
// import CommentFrom from '../../component/reviewForm';
import Spinner from '../../../component/common/Spinner'
const CommentFrom = React.lazy(() => import('../../../component/reviewForm'));
const Reviews = React.lazy(() => import('../../../component/reviews/reviews')); 

class SingleStore extends Component {
  state = {
        loadedPost: null
    }

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate(prevProps, nextState) {
            this.loadData();
       
    }

    loadData () {
      if (this.props.match.params.slug ) {
                axios.get( '/api/isp/' + this.props.match.params.slug)
                    .then(response => {
                        this.setState( { loadedPost: response.data } );
                    } );
        }
     }


    render () {
        
        let post = <p style={{ textAlign: 'center' }}><Spinner/></p>;
        
        if (this.state.loadedPost) {
            const id = this.state.loadedPost._id; 
            let img1 = `/uploads/${this.state.loadedPost.photo}`; 
          let img2 = `https://maps.googleapis.com/maps/api/staticmap?center=${this.state.loadedPost.location.coordinates[1]},${this.state.loadedPost.location.coordinates[0]}&zoom=12&size=800x150&maptype=roadmap&format=png&visual_refresh=true&key=AIzaSyA5YjggofvCXW3-2aHqTOtOdpQDiR4HMvA`; 
          let src = `https://www.google.com/maps/place/${this.state.loadedPost.location.coordinates[1]},${this.state.loadedPost.location.coordinates[0]}`

            post = (
    <div >
    <div className="single">
      <div className="single__hero"><img className="single__image" src={img1} alt="img1"/>
          <h2 className="title title--single name"><a href="">{this.state.loadedPost.name}</a></h2>
      </div>
    </div>
    <div className="single__details inner"><a href={src}><img className="single__map" src={img2} alt="map"/></a>
      <p className="single__location">{this.state.loadedPost.location.address}</p>
      <p>{this.state.loadedPost.description}</p>
      
       <Suspense fallback={<Spinner/>}><CommentFrom storeId={id}/></Suspense>
       <Suspense fallback={<Spinner/>}><Reviews reviews={this.state.loadedPost.reviews} /> </Suspense>          
      </div>
    </div>);
        }
      return post; 
    }
}

export default SingleStore;