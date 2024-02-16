import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 48.806972051465536,
    lng: 2.4809297328105595
};

const defaultZoom = 13;

function GoogleMapComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    // eslint-disable-next-line
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        map.setZoom(defaultZoom)

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
                    position={{ lat: center.lat, lng: center.lng }}
                />
            </GoogleMap>
        </div>
    ) : null;
}

export default React.memo(GoogleMapComponent)