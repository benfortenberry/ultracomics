app.service('uService', ["$http", "$rootScope", "$q", function ($http, $rootScope, $q) {
    this.getRandomColor = function () {
        return randomColor({ luminosity: 'dark'});
    }
}]);