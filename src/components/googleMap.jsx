import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 48.8071174,
    lng: 2.4783609
};

const defaultZoom = 15;

function GoogleMapComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    // eslint-disable-next-line
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {

        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback() {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className="bloc-map">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={defaultZoom}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker
                    position={{ lat: 48.8071174, lng: 2.4783609 }}
                />
            </GoogleMap>
        </div>
    ) : null;
}

export default React.memo(GoogleMapComponent)