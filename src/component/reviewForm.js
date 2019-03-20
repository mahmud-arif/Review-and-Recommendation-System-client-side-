import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../actions/postActions';
import StarRating from 'react-star-rating-component';
import TextAreaFieldGroup from '../component/common/TextAreaFieldGroup';
import './reviewForm.css'; 
import axios from 'axios';
import review from './reviews/review/review';

class CommentForm extends Component{
  constructor() {
    super();
    this.state = {
      text: '',
      rating: null,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    // const { name } = this.props.auth.user;
    console.log('user id' + this.props.auth.user.name); 
    const { storeId } = this.props;
    const reviewData = {
      text: this.state.text,
      rating: this.state.rating
    };
    axios.post(`/api/reviews/${storeId}`, reviewData)
      .then(response => {
        this.setState({ text: "", rating: null })
        console.log(this.state.text + " " + this.state.rating); 
      }
        
      )
      .catch(err => console.log(err));     
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({
      rating: nextValue
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    
    const { name } = this.props.auth.user;
    const { rating } = this.state; 
    return (
      <form className="reviewer" onSubmit={this.onSubmit}>
        <TextAreaFieldGroup
                  placeholder="Give your review"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                />
        <div className="reviewer__meta">
          <div className="reviewer__stars">
            <StarRating 
            name="rating" 
            starCount={5}
            value={rating}
            editing={true}  
            onStarClick={this.onStarClick.bind(this)} />
            
          </div>
           <input className="button" type="submit" value="Submit Review →" disabled={!name} /> 
        </div>
      </form>
   )
  }
  
}

CommentForm.propTypes = {
  auth: PropTypes.object.isRequired,
  storeId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(CommentForm);
