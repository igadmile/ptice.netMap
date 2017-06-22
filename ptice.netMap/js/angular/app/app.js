angular.module('chooseLayers', ['ngAnimate', 'ui.bootstrap']);

angular.module('chooseLayers').controller('select', ['$scope', function ($scope) {
    $scope.urlReady = undefined;
    $scope.layers = {
        zp: 'zp',
        iwc: 'iwc',
        spas: 'spas',
        pscis: 'pscis',
        rez: 'rez',
        pil: 'pil'
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
    $scope.selectedFeature = undefined;
    $scope.searchExpression = function (selectedLayer, selectedFeature) {
        // remove all layers except baselayer which has ._globalTileRange
        map.eachLayer(function (layer) {
            if (!layer._globalTileRange) {
                map.removeLayer(layer);
            }
        });
        overlays[selectedLayer].addTo(map);

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

    $scope.genUrl = function (selectedLayer, selectedFeature) {
        if (!selectedFeature) {
            $scope.urlReady = 'http://karta.ptice.net?layers=' + selectedLayer;
        } else {
            if (selectedLayer === 'spas') {
                selectedFeature = 'spas' + selectedFeature;
            } else if (selectedLayer === 'pscis') {
                selectedFeature = 'pscis' + selectedFeature;
            }
            $scope.urlReady = 'http://karta.ptice.net?layers=' + selectedLayer + '&feat=' + selectedFeature;
        }
    };
}]);
