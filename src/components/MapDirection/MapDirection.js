import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


mapboxgl.accessToken = 'pk.eyJ1Ijoia2F6aXJhZ2liMTgiLCJhIjoiY2t1enQ1Nnc3NjVuZzJvdDl5enQ1aWJiMyJ9.tSMpA0p7YcNIgpZ7F5aufA';

const MapDirection = () => {
      useEffect(()=>{
            const map = new mapboxgl.Map({
                  container: 'map',
                  style: 'mapbox://styles/mapbox/streets-v11',
                  center: [-79.4512, 43.6568],
                  zoom: 13
                  });
                   
                  map.addControl(
                  new MapboxDirections({
                  accessToken: mapboxgl.accessToken
                  }),
                  'top-left'
                  );

      },[])
      return (
            <div>
                  <div id="map"></div>

            </div>
      );
};

export default MapDirection;