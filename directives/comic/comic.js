var module = angular.module('u2016');

module.directive('comic', ['uService', '$uibModal', function (uService, $uibModal) {
    // Link Function - DOM Manipulation
    link = function ($scope, $element, $attrs) {

    }

    // Controller Function - Scope Manager
    controller = function ($scope) {


      


        $scope.loadComic = function (title, issue) {

            $scope.comicInfo = { title: title, issue: issue };

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'modal/comicModal.html',
                controller: 'comicModalInstanceCtrl',
                size: 'lg',
                resolve: {
                    comicinfo: $scope.comicInfo
                }
            });

        };

    };


    return {
        restrict: 'EA',
        scope: {
            obj: '@title',
            issue: '=',
            title: '=',
            page: '='
        },
        templateUrl: 'directives/comic/comic.html',
        link: link,
        controller: controller
    };
}]);