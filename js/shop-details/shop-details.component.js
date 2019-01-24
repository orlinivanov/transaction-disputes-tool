angular
    .module('shopDetails')
    .component('shopDetails', {
        templateUrl: 'js/shop-details/shop-details.template.html',
        controller: function ShopDetailsController($routeParams, $http) {
            let self = this;
            self.shopId = $routeParams.shopId;
            // console.log($routeParams);
            $http.get(`https://dispuites-tool.firebaseio.com/shops.json?orderBy="shop_id"&equalTo="${self.shopId}"`)
                .then((resp) => {
                    // self.transactionDetails = transactionDetails;
                    self.shopDetails = resp.data[Object.keys(resp.data)[0]];
                    console.log(self.shopDetails);
                });

            // $http.get(`https://dispuites-tool.firebaseio.com/transactions.json?orderBy="transactionNumber"&equalTo="${self.transactionNum}"`)
            //     .then(function (response) {
            //         const transactionDetails = response.data[Object.keys(response.data)[0]];


            //     });
        }
    });