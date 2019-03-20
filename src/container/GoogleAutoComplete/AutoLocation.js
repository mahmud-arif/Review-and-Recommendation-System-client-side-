
import React, { Component } from 'react';
import MUIPlacesAutocomplete, { geocodeBySuggestion } from 'mui-places-autocomplete';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import './AutoLocation.css'; 
import axios from 'axios'; 
import Design from '../../component/new/design'


class autoComplete extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}, 
      coordinates: null
    }

    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }
  
  onMarkerClick = (props, marker, e, place) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true, 
    });

  }
    
onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })

      console.log("ratting" + props.rating); 
    }
  };

  onSuggestionSelected(suggestion) {
    geocodeBySuggestion(suggestion).then((results) => {
      const { geometry } = results[0]

      const coordinates = {
        lat: geometry.location.lat(),
        lng: geometry.location.lng(),
      }
      axios.get(`/api/stores/near?lat=${coordinates.lat}&lng=${coordinates.lng}`)
        .then(response => {
          this.setState({ data: [response.data], coordinates: coordinates })
        })
      
    }).catch((err) => {
      this.setState({errorMessage: err.message })
    })
  }
  render() {
    let markers;
    
    if (this.state.data.length) {
      const places = this.state.data[0];
      if (!places.length) {
        alert("no places found");
      }
        markers = places.map((place, i) => {
          const [placelng, placelat] = place.location.coordinates;
             return <Marker
               name={place.name}
               slug={place.slug}
               photo={place.photo}
               mapCenter
               catagory={place.catagory}
               address={place.location.address}
               key={i}
               position={{ lat: placelat, lng: placelng }}
               draggable={true}
               onClick={this.onMarkerClick}
               avg={place.reviews.length}
               reviews={place.reviews}
               rating = {place.reviews}
          
          // onDragend={this.moveMarker.bind(this)}
          >
          
        </Marker>
            
      })
    } 
    return (
    <div className="content">
    <div className="inner">
      <h2>Map</h2>
      <div className="map">
        <div className="autocomplete">
            <MUIPlacesAutocomplete
            className = "autocomplete__input"
           onSuggestionSelected={this.onSuggestionSelected}
          renderTarget={() => (<div id="map">
              <Map
                //  bounds={bounds}
                  mapCenter
                onReady={this.fetchPlaces}
                google={this.props.google}
              zoom={12}
               initialCenter={{lat: 23.777176, lng: 90.399452 }}
              streetViewControl={true}
            >
    
              {markers}
    
              <InfoWindow
          onOpen={this.windowHasOpened}
           onClose={this.windowHasClosed}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
                  <Design
                    name={this.state.selectedPlace.name}
                    slug={this.state.selectedPlace.slug}
                    photo={this.state.selectedPlace.photo}
                    catagory={this.state.selectedPlace.catagory}
                    address={this.state.selectedPlace.address}
                    reviews={this.state.selectedPlace.avg}
                    rating={this.state.selectedPlace.rating}
                  />
            </div>
        </InfoWindow>
          </Map>
        </div>)}/>  
        </div>
        
      </div>
    </div>
</div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyA5YjggofvCXW3-2aHqTOtOdpQDiR4HMvA")
})(autoComplete)