import React, { Component, Suspense } from 'react';
import Top from '../../component/Top/top'; 
// import { Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Spinner from "../../component/common/Spinner"
import axios from 'axios';
import './tops.css'; 
// const Top = React.lazy(() => import("../../component/Top/top")); 


class Tags extends Component{
  state = {
    tops: [], 
    error: false, 
    loading: true,
    }

    componentDidMount () {
        axios.get('/api/top/')
          .then(response => {
            const tops = response.data;
                const updatedTops = tops.map( top => {
                    return {
                        ...top 
                    }
                });
                this.setState( { tops: updatedTops } );
            } )
            .catch( error => {
                console.log( error );
                 this.setState({error: true});
            } );
    }

    // tagSelectedHandler = (id) => {
    //   // this.props.history.push({pathname: '/posts/' + id});
    //   this.props.history.push(this.props.match.url+"/"+ id);
    // }
  render() {
     let tops = <ReactLoading type="balls" color="#fff" height={667} width={375} />
        if ( this.state.tops) {
             tops = this.state.tops.map( (top, i) => {
              return (
                <Top
                  key={top._id}
                  pos={i+1}
                  name={top.name}
                  img={`uploads/${top.photo}`}
                  avg={top.averageRating}
                //  clicked={() => this.tagSelectedHandler( tag._id )} 
                />
               
                );
            } );
        }
    return (
    <div className="content">
     < div className = "inner" >
      < h2 className = "name" > Top 10 Business </h2>
        < table className = "table" >
          <thead>
            <td>photo</td>
            <td>ranking</td>
            <td>name</td>
            <td>reviews</td>
            <td>Average Rating</td>
            </thead>
            {/* {this.state.loading ? <Spinner /> : { tops }} */}
            {tops}
           
          </table>
      </div>
    </div>
  )
  }
}

export default Tags; 