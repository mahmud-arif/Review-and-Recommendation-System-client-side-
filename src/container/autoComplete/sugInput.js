import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from '../../component/Suggestions/suggestions'; 
import './sugInput.css'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`/api/search?q=${this.state.query}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          results: response.data
        })
      })
      .catch(err=> console.log(err) 
    )
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // if (this.state.query.length % 2 === 0) {
          this.getInfo()
        // }
      } else if (!this.state.query) {
      }
    })
  }
  sugResultHandaler = () => {
    this.setState({
         results: []
       })
  }

  render() {
    return (
      <form>
        <input
          className = "search__input"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        {this.state.results && <Suggestions onClicked ={this.sugResultHandaler} results={this.state.results} /> }
      </form>
    )
  }
}

export default Search