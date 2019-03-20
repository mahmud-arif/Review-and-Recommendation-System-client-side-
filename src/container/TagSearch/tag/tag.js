import React, { Component } from 'react';
import Store from '../../../component/store/store'; 
import Spinner from '../../../component/common/Spinner'; 
import axios from 'axios'; 
import './tag.css'


class Tag extends Component{
  state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log(this.props);
         this.loadData();
       
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost &&  this.state.id !== this.props.match.params.id)) {
                axios.get('/api/tags/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data, id: this.props.match.params.id });
                    });
            }
        }
    }

    postSelectedHandler(slug, collection) {
         this.props.history.push('../' + collection + '/' + slug);
    }

  render() {
        let stores = <p style={{textAlign: "center"}}><Spinner/></p>
        if ( this.state.loadedPost ) {
            stores = this.state.loadedPost.map( store => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Store
                        
                        key={store._id}
                        name={store.name}
                        img={`/uploads/${store.photo}`}
                        description={store.description}
                        clicked={() => this.postSelectedHandler( store.slug, store.catagory )} />
                    // </Link>
                );
            } );
        }
    return (
          <div>
                <section className="Posts">
                    {stores}
                </section>

            </div>
    )
  }
}

export default Tag; 