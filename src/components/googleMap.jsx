import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="map-pointer">{text}</div>;

const GoogleMapComponent = () => {
    const defaultProps = {
        center: {
            lat: 48.8071138,
            lng: 2.4761018
        },
        zoom: 15
    };
    const mapOptions = {
        borderRadius: "50px"
    };

    return (
        <div className="bloc-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                defaultOptions={mapOptions}
            >
                <AnyReactComponent
                    text="I'm here"
                    lat={48.8071138}
                    lng={2.4761018}
                />
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMapComponent;
