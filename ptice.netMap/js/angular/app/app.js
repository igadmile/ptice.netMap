angular.module('chooseLayers', ['ngAnimate', 'ui.bootstrap']);

angular.module('chooseLayers').controller('select', ['$scope', function ($scope) {
    $scope.urlReady = undefined;
    $scope.layers = {
        zp: 'Zaštićena područja',
        spas: 'Područja značajna za očuvanje divljih ptica',
        pscis: 'Područja značajna za očuvanje drugih divljih vrsta i njihovih staništa',
        rez: 'Ornitološki rezervati',
        iwc: 'Lokaliteti za zimsko prebrojavanje ptica',
        pil: 'Kvadranti za monitoring piljaka i lastavica'
    };
    $scope.baseLayers = {
        osm: 'Thunderforest Landscape',
        tk25: 'TK25',
        dof: 'Digitalni ortofoto'
    };
    $scope.features = {
        zp: exp_zps.features,
        iwc: exp_iwc.features,
        spas: exp_spas.features,
        pscis: exp_pscis.features,
        rez: exp_rez.features,
        pil: exp_piljIlas.features
    };
    $scope.selectedLayer = 'zp';
    $scope.selectedBase = 'osm';
    $scope.selectedFeature = undefined;

    if (document.getElementById('map').offsetWidth < 1025) {
        $scope.smallScreen = true;
    }

    $scope.searchExpression = function (selectedLayer, selectedBase, selectedFeature) {
        // remove all layers except baselayer which has ._globalTileRange
        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });
        overlays[selectedLayer].addTo(map);
        base[selectedBase].addTo(map);

        boundsParams = {
            maxZoom: 17
        };
        if (selectedLayer === 'spas') {
            selectedFeature = 'spas' + selectedFeature;
        } else if (selectedLayer === 'pscis') {
            selectedFeature = 'pscis' + selectedFeature;
        }

        featureCoordinates = overlays[selectedLayer]._layers[selectedFeature];
        overlays[selectedLayer]._layers[selectedFeature].fire('click', {
            latlng: featureCoordinates[Math.round((featureCoordinates.length) / 2)]
        });
        map.fitBounds(overlays[selectedLayer]._layers[selectedFeature].getBounds(), boundsParams);
    };

    $scope.genUrl = function (selectedLayer, selectedBase, selectedFeature) {
        $scope.urlReady = '';
        if (!selectedFeature) {
            $scope.urlReady = 'http://karta.ptice.net?layers=' + selectedLayer + '&base=' + selectedBase;
        } else {
            if (selectedLayer === 'spas') {
                selectedFeature = 'spas' + selectedFeature;
            } else if (selectedLayer === 'pscis') {
                selectedFeature = 'pscis' + selectedFeature;
            }
            $scope.urlReady = 'http://karta.ptice.net?layers=' + selectedLayer + '&base=' + selectedBase + '&feat=' + selectedFeature;
        }
    };

    $scope.resetFeature = function () {
        $scope.selectedFeature = undefined;
    };
}]);
