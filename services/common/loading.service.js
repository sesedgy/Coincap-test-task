class LoadingService {
    constructor() {
        'ngInject';

        this.showLoading = () => {
            $("body").loading();
        };

        this.hideLoading = () => {
            $('body').loading('stop');
        }
    }
}

angular.module('myApp')
    .service('LoadingService', LoadingService);