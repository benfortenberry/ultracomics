app.service('uService', ["$http", "$rootScope", "$q", function ($http, $rootScope, $q) {


    //this.appMode = "Ben";
    ////this.debugAdmin = true;
    ////this.debugREC = false;
    ////this.debugAlumna = false;

    ////change app mode
    //this.updateAppMode = function (mode) {

    //    //    $location.path(mode.mode); // path not hash


    //    // Set Mode

    //    this.appMode = mode;
    //}

    this.getRandomColor = function () {

        return randomColor({ luminosity: 'dark'});
        //var letters = '012345'.split('');
        //var color = '#';
        //color += letters[Math.round(Math.random() * 5)];
        //letters = '0123456789ABCDEF'.split('');
        //for (var i = 0; i < 5; i++) {
        //    color += letters[Math.round(Math.random() * 15)];
        //}
        //return color;
    }


}]);