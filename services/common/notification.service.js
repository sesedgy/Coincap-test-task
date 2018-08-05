class NotificationService {
    constructor() {
        'ngInject';

        this.errorAlert = (text) => {
            new Noty({
                theme: 'bootstrap-v4',
                type: 'error',
                text: text,
            }).show();
        }
    }
}

angular.module('myApp')
    .service('NotificationService', NotificationService);