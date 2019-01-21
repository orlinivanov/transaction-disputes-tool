angular
    .module('disputesList')
    .component('disputesList', {
        templateUrl: 'js/disputes-list/disputes-list.template.html',
        controller: function DisputesListController($http) {
            let self = this;
            $http.get('https://dispuites-tool.firebaseio.com/disputes.json')
                .then((response) => {
                    self.disputes = response.data;
                });
        }
    })
