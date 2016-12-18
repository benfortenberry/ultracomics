var module = angular.module('u2016');

module.directive('creator', ['uService', '$uibModal', function (uService, $uibModal) {
    // Link Function - DOM Manipulation
    link = function ($scope, $element, $attrs) {

    }

    // Controller Function - Scope Manager
    controller = function ($scope) {


        //$scope.buttonColor = uService.getRandomColor();

        //$scope.loadComic = function (title, issue) {

        //    $scope.comicInfo = { title: title, issue: issue };

        //    var modalInstance = $uibModal.open({
        //        animation: $scope.animationsEnabled,
        //        templateUrl: 'modal/comicModal.html',
        //        controller: 'comicModalInstanceCtrl',
        //        size: 'lg',
        //        resolve: {
        //            comicinfo: $scope.comicInfo
        //        }
        //    });

        //};

        //$scope.comics = [{

        //}]

    };


    return {
        restrict: 'EA',
        scope: {
            name: '=',
            creatorMode: '=',
            comicMode: '='
        },
        templateUrl: 'directives/creator/creator.html',
        link: link,
        controller: controller
    };
}]);