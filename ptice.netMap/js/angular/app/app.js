angular.module('chooseLayers', ['ngAnimate', 'ui.bootstrap']);

angular.module('chooseLayers').controller('select', ['$scope', function ($scope) {
    $scope.layers = {
        zp: 'Zaštićena područja',
        iwc: 'iwc'
    };
    $scope.features = {
        zp: ['blaaa', 'ooo'],
        iwc: ['jeee', 'oooo'],
        spas: ['aaaa', 'bbbbb']
    };
    $scope.selectedLayer = 'zp';
}]);
