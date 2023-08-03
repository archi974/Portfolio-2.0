import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="map-pointer">{text}</div>;

const GoogleMapComponent = () =>{
    const defaultProps = {
        center: {
            lat: 48.8071138,
            lng: 2.4761018
        },
        zoom: 15
    };

    return (
        <div className="bloc-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDkASREEkNjzHMTF0iXcp2dpP0s1bHJlpM" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    text="I'm here"
                    lat= {48.8071138}
                    lng={2.4761018}
                />
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMapComponent;
