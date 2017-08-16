var candidateInformation = angular.module("candidateInformation", ['ui.router']);

candidateInformation.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/app/views/home.html'
        })
        .state('address', {
            url: '/address',
            templateUrl: '/app/views/address.html'
        })
         
});