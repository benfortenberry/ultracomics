
app.controller('uCtrl', ['$scope', 'uService', '$location', '$uibModal', function ($scope, uService, $location, $uibModal) {


    $scope.creatorMode = null;
    $scope.comicMode = null;

    $scope.totalItems = 11;
    $scope.currentPage = 1;

    $scope.isNavCollapsed = true;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

  
   



    $scope.changeColors = function()
    {
        $scope.htmlColor = uService.getRandomColor();
        $scope.navColor = uService.getRandomColor();
        $scope.badgeColor = uService.getRandomColor();
    }

   
    $scope.changeColors();

    var d = new Date();
    $scope.year = d.getFullYear();

    //$scope.$watch(function () {
    //    return f2016Service.appMode;
    //},
    //     function (value) {


    //         if (!$scope.appMode) {
    //             $scope.location = $location.$$host;

    //             switch ($location.$$host) {
    //                 case 'thumbsupsolutions.com':
    //                     window.location.href = "http://thumbsupsolutions.com/thumbsup/";
    //                     break;
    //                 case 'benfortenberry.com':
    //                     $scope.updateAppMode('Ben');
    //                     break;
    //                 case 'ivanfortenberry.com':
    //                     $scope.updateAppMode('Ivan')
    //                     break;
    //                 case 'elijahfortenberry.com':
    //                     $scope.updateAppMode('Elijah')
    //                     break;
    //                 case 'abramfortenberry.com':
    //                     $scope.updateAppMode('Abram')
    //                     break;

    //             }
    //         }


    //         if (f2016Service.appMode != undefined)
    //             $scope.appMode = f2016Service.appMode;

    //         $scope.title = $scope.appMode + ' Fortenberry';
    //     }
    // );


    //$scope.updateAppMode = function (mode) {

    //    f2016Service.updateAppMode(mode)
    //}


    //};
}]);
