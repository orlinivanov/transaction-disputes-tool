angular
    .module('core.transaction')
    .factory('Transaction', ['$resource', function ($resource) {
        return $resource(`https://dispuites-tool.firebaseio.com/transactions.json`, {}, {
            // query: {
            //     method: 'GET',
            //     params: { },
            //     isArray: true
            // }
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }]);