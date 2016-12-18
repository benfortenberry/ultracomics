var module = angular.module('u2016');

module.directive('creatorMenu', ['uService', '$uibModal', function (uService, $uibModal) {
    // Link Function - DOM Manipulation
    link = function ($scope, $element, $attrs) {

    }

    // Controller Function - Scope Manager
    controller = function ($scope) {


        //$scope.buttonColor = uService.getRandomColor();

        $scope.loadCreator = function (name) {

            $scope.creatorInfo = { name : name };

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'modal/creatorModal.html',
                controller: 'creatorModalInstanceCtrl',
                size: 'lg',
                resolve: {
                    creatorinfo: $scope.creatorInfo
                }
            });

        };

        //$scope.comics = [{

        //}]

    };


    return {
        restrict: 'EA',
        scope: {
            creatorMode: '=',
            comicMode: '='

        },
        templateUrl: 'directives/creatorMenu/creatorMenu.html',
        link: link,
        controller: controller
    };
}]);