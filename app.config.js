angular
    .module('disputesApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<transactions-list></transactions-list>'
            })
            .when('/transactions', {
                template: '<transactions-list></transactions-list>'
            })
            .when('/disputes', {
                template: '<disputes-list></disputes-list>'
            })
            .when('/shops', {
                template: '<shops-list></shops-list>'
            })
            // when('/phones/:phoneId', {
            //     template: '<phone-detail></phone-detail>'
            // }).
            .when('/about', {
                template: '<h1>About Page</h1>'
            })
            .otherwise('/');
    }]);