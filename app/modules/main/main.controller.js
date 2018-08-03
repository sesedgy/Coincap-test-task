class MainController {
    constructor($scope,
                $timeout,
                HttpService) {
        'ngInject'

        $scope.coinsList = ["a", "b", "c"];
        $scope.selectedCoinName = null;
        $scope.selectedCoinData = null;
        HttpService.get('/coins').then((result) => {
            $scope.coinsList = result;
            $timeout(() => {
                $scope.$apply();
            },1)
        });

        $scope.selectedCoinChanged = () => {
            HttpService.get('/page/' + $scope.selectedCoinName).then((result) => {
                for (let key in result){
                    let value = result[key].value;
                    value = typeof(value) === 'number' ? Math.round(value * 1000) / 1000 : value;
                }
                $scope.selectedCoinData = result;
                $timeout(() => {
                    $scope.$apply();
                },1)
            });
        };

        $scope.roundNumber = (value) => {
          return typeof(value) === 'number' ? Math.round(value * 1000) / 1000 : value
        }
    }
}

angular.module('main')
    .controller('MainController', MainController);
