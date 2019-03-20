import React, { Component } from 'react';
import axios from 'axios';
import Store from '../../component/store/store';
import Spinner from '../../component/common/Spinner'
import { createBrowserHistory } from 'history'
import './Ecomarce.css';

const history = createBrowserHistory(); 


class Stores extends Component {
     state = {
        stores: [], 
        error: null, 
        loading: true, 
        per: 3,
        page: 1
    }

    loadStore() {
        const {
            page,
            stores
        } = this.state;
        axios.get(`/api/ecommerces/page/${page}`)
            .then(response => {
                console.log(response.data.isps); 
            
                this.setState({stores: [...stores, ...response.data.ecommerces ] , loading: false, scrolling: false }); 
                console.log(this.state.stores); 
            } )
            .catch( error => {
                this.setState({error: true});
            } );
    }

    componentDidMount() {
        this.loadStore();
        this.scrollListener = window.addEventListener("scroll", e => {
            this.handleScroll(e);
        });
        // axios.get('/api/stores/')
        //     .then( response => {
        //         const stores = response.data.slice( 0, 20);
        //         const updatedStores = stores.map( store => {
        //             return {
        //                 ...store 
        //             }
        //         } );
        //         this.setState({ stores: updatedStores, loading: false }); 
        //         console.log(this.state.stores); 
        //     } )
        //     .catch( error => {
        //         console.log( error );
        //         this.setState({error: true});
        //     } );
    }
    handleScroll = (e) => {
    if(window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight) {
         this.loadMore();
      }
    };
    loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadStore
    );
  };

    postSelectedHandler = ( slug ) => {
        // this.props.history.push({pathname: '/posts/' + id});
        history.push('/ecommerce/' + slug);
    }

    render () {
        let stores;
        // if (this.state.loading === false) stores = <Spinner />
        if (!this.state.error) {
            stores = this.state.stores.map(store => {
                return (
                    <Store 
                        key={store._id}
                        name={store.name}
                        location={store.location.address}
                        description={store.description}
                        img={`/uploads/${store.photo }`}
                        clicked={() => this.postSelectedHandler( store.slug )} />
                );
            });
            console.log(stores); 
        }

        return (
            <div className="content">
                <div className="lemon--div u-padding-t3 u-padding-b3 border--top border-color--default">
                    <ul  className="domtags--ul__373c0__3EAkl  list__373c0__2G8oH">
                        {this.state.loading ? <div style={{textAlign: "center"}}><Spinner/></div>:stores}
                    </ul>
                </div>
             </div>
        );
    }
}

export default Stores;