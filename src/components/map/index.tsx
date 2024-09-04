"use client"
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.MAPBOX_API_KEY ?? '';




export default function MapBox() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(9.5);
    const [lat, setLat] = useState(60.5);
    const [zoom, setZoom] = useState(9);


    return (
        <div>
            <div className="map-container" ref={mapContainer} />
        </div>
    )
}