class LoadingService {
    constructor() {
        'ngInject';

        /** @description Show loading animation
         *  @return {void}
         */
        this.showLoading = () => {
            $("body").loading();
        }

        /** @description Hide loading animation
         *  @return {void}
         */
        this.hideLoading = () => {
            $('body').loading('stop');
        }
    }
}

angular.module('myApp')
    .service('LoadingService', LoadingService);