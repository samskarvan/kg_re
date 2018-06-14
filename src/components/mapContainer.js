import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import Logo from '../assets/images/logo_small.png';

const Marker = ({ img }) => <div><img className="logo" src={img}></img></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.55,
      lng: -117.68
    },
    zoom: 15
  };

  componentWillMount( ){
    console.log(this.props);
    console.log({GoogleMapReact});
  }
  render() {
    return (
      <Fragment>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDtnISxBNvKRzUlIu5U2DDqXJT7wu2d7CY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={33.55}
            lng={-117.68}
            img={Logo}
          />
        </GoogleMapReact>
      </Fragment>
    );
  }
}

export default SimpleMap;