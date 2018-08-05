class HttpService {
    constructor($http,
                NotificationService,
                LoadingService,
                SETTINGS) {
        'ngInject';

        /** @description Send GET request
         *  @param {string} `url` - request path.
         *  @return {Promise}
         */
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