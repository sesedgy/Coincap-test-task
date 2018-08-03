class HttpService {
    constructor($http,
                NotificationService,
                LoadingService,
                SETTINGS) {
        'ngInject';

        this.get = (url) => {
            LoadingService.showLoading();
            return new Promise((resolve) => {$http({
                    url: SETTINGS.API_URL + url,
                    method: "GET",
                }).then((result) => {
                    resolve(result.data);
                    LoadingService.hideLoading();
                }, (error) => {
                    NotificationService.errorAlert(error);
                    LoadingService.hideLoading();
                })
            })
        }
    }
}

angular.module('myApp')
    .service('HttpService', HttpService);