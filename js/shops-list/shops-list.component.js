angular
    .module('shopsList')
    .component('shopsList', {
        templateUrl: 'js/shops-list/shops-list.template.html',
        controller: function PhoneDetailController($http) {
            let self = this;
            $http.get('https://dispuites-tool.firebaseio.com/shops.json').then(function (response) {
                // console.log(response.data);
                self.shops = response.data;
            });
        }
    });