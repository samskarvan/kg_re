import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.55,
      lng: -117.68
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <Fragment>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDtnISxBNvKRzUlIu5U2DDqXJT7wu2d7CY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.55}
            lng={-117.68}
            text={'KG'}
          />
        </GoogleMapReact>
      </Fragment>
    );
  }
}

export default SimpleMap;