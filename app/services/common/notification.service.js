class NotificationService {
    constructor() {
        'ngInject';

        /** @description Show error notification
         *  @param {string} `text` - text for notification.
         *  @return {void}
         */
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