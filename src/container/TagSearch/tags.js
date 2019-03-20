import React, { Component, Suspense} from 'react';
import Tag from '../../component/Tags/tags';
// import Stores from '../stores/store'; 
// import TagStore from './tag/tag' 
import Spinner from '../../component/common/Spinner'; 
import { Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
import axios from 'axios';
import './tags.css'; 

const Stores = React.lazy(() => import("../stores/store")); 
const TagStore = React.lazy(() => import("./tag/tag"));


class Tags extends Component{
  state = {
    tags: []
    }

    componentDidMount () {
        axios.get('/api/tags/')
          .then(response => {
            const tags = response.data;
                const updatedTags = tags.tags.map( tag => {
                    return {
                        ...tag 
                    }
                });
                this.setState( { tags: updatedTags } );
                 console.log( this.state.tags );
            } )
            .catch( error => {
                console.log( error );
                 this.setState({error: true});
            } );
    }

    tagSelectedHandler = (id) => {
      // this.props.history.push({pathname: '/posts/' + id});
      this.props.history.push(this.props.match.url+"/"+ id);
    }
  render() {
     let tags = <p style={{textAlign: "center"}}><Spinner/></p>
        if ( this.state.tags) {
             tags = this.state.tags.map( tag => {
              return (
                
                <Tag
                  key={tag._id}
                  tag={tag._id}
                  count={tag.count}
                 clicked={() => this.tagSelectedHandler( tag._id )} 
                />
                );
            } );
        }
    return (
    <div>
      <div className='content'>
        <div className="inner">
          <ul className = "tags">
            {tags}
          </ul>
        </div>
        </div>
        <Suspense  fallback={<p style={{textAlign: "center"}}><Spinner/></p>}>
          <Route path="/tags" exact component={Stores} />
          <Route path={this.props.match.url + "/:id"} exact component={TagStore} />
        </Suspense>
      </div>
  )
  }
}

export default Tags; 