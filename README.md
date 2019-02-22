This repository contains raw data and the code for the interactive map hosted [here](http://karta.ptice.net/).

The maps is used to view and explore layers importan to nature protection in Croatia.

# Technologies
- leafletjs
- leaflet-sidebar-v2
- styledLayerControl leaflet plugin
- angular
- angular-animate
- angular-ui-bootstrap

# Feature overview
![map overview](../screenshots/overview.jpg)

When the layer feature is hovered, it will be higlihted.

Whan the features is clicked, the popup with the feature medadata will be displyed.

## Layer control
- Choose which base map (Pozadinske karte) will be shown.
- Choose the data layers which will be displyed.

## Filter feature sidebar
![sidebar overview](../screenshots/sidebar.jpg)

In the sidebar the user can:
- Choose the base map (Odaberite pozadnsku kartu)
- Select the layer (Odaberite sloj) from which it's the possible to search for and choose Feature (Odaberite poligon)

Based on the selection it is possible to:
- Show, highlight and focus to the selected feature (Prikaži na karti).
- Generate permalink which will open the map and show, highlight and focus on the selected feature. It is useful for embedding in the iframe (Prikaži link). (eg. [http://karta.ptice.net/?layers=zp&base=dof&feat=Plitvi%C4%8Dka%20jezera](http://karta.ptice.net/?layers=zp&base=dof&feat=Plitvi%C4%8Dka%20jezera))
