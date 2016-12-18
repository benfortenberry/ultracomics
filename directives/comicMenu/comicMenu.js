var module = angular.module('u2016');

module.directive('comicMenu', ['uService', '$uibModal', function (uService, $uibModal) {
    // Link Function - DOM Manipulation
    link = function ($scope, $element, $attrs) {

    }

    // Controller Function - Scope Manager
    controller = function ($scope) {


        //$scope.buttonColor = uService.getRandomColor();

       

        //$scope.comics = [{

        //}]

    };


    return {
        restrict: 'EA',
        scope: {
            title: '=',
            comicMode:'='
        },
        templateUrl: 'directives/comicMenu/comicMenu.html',
        link: link,
        controller: controller
    };
}]);