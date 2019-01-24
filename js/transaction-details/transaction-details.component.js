angular
    .module('transactionDetails')
    .component('transactionDetails', {
        templateUrl: 'js/transaction-details/transaction-details.template.html',
        controller: function TransactionDetailsController($routeParams, $http) {
            let self = this;
            self.transactionNum = $routeParams.transactionNum;
            // console.log($routeParams);
            $http.get(`https://dispuites-tool.firebaseio.com/transactions.json?orderBy="transactionNumber"&equalTo="${self.transactionNum}"`)
                .then(function (response) {
                    const transactionDetails = response.data[Object.keys(response.data)[0]];
                    
                    $http.get(`https://dispuites-tool.firebaseio.com/shops.json?orderBy="shop_id"&equalTo="${transactionDetails.shopId}"`)
                        .then((resp) => {
                            self.transactionDetails = transactionDetails;
                            self.shopDetails = resp.data[Object.keys(resp.data)[0]];
                            // console.log(self.shopDetails);
                        });
                });
        }
    });