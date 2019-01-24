angular
    .module('disputesList')
    .component('disputesList', {
        templateUrl: 'js/disputes-list/disputes-list.template.html',
        controller: function DisputesListController($http) {
            let self = this;
            self.orderProp = 'daysLeft';
            $http.get('https://dispuites-tool.firebaseio.com/disputes.json')
                .then((response) => {
                    self.disputes = response.data
                        .map((trn) => {
                            const curDate = new Date();
                            trn.disputeDate = new Date();
                            trn.disputeDate.setDate(curDate.getDate() - getRandomInt(14));
                            trn.daysLeft = curDate.getDate() - trn.disputeDate.getDate();
                            return trn;
                        });
                });
        }
    })


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}