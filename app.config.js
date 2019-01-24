angular
    .module('disputesApp')
    .config(['$routeProvider', '$locationProvider', '$compileProvider', function config($routeProvider, $locationProvider, $compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|file|data|img):/);
        $routeProvider
            .when('/', {
                template: '<home></home>'
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
            .otherwise('/');
    }]);