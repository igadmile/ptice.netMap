#!/bin/bash
cat js/Leaflet.fullscreen.js js/styledLayerControl.min.js js/Control.Geocoder.js > js/includes.js
cat css/leaflet.fullscreen.css css/styledLayerControl.css css/Control.Geocoder.css > css/includes.css

uglifyjs js/includes.js > js/includes.min.js
uglifycss css/includes.css > css/includes.min.css

rm css/includes.css
rm js/includes.js
