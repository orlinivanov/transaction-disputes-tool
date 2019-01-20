angular
    .module('transactionsList')
    .component('transactionsList', {  // This name is what AngularJS uses to match to the `<transactions-list>` element.
        templateUrl: 'js/transactions-list/transactions-list.template.html',
        controller: function TransactionsListController($http) {
            let self = this;
            // self.orderProp = 'age';
            // console.log('works');
            $http.get('https://dispuites-tool.firebaseio.com/transactions.json').then(function (response) {
                self.transactions = response.data;
            });
        }
    });