var candidateInformation = angular.module("candidateInformation", ['ui.router']);

candidateInformation.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'homeController'
        })
        .state('address', {
            url: '/address',
            templateUrl: 'app/views/address.html',
            controller: 'addressController'
        }).
        state('personal', {
            url: '/personal',
            templateUrl: 'app/views/personal.html',
            controller: 'personalController'
        }).
        state('navigation', {
            url: '/navigation',
            templateUrl: 'app/views/navigation.html',
            controller: 'navigationController'
        }).
        state('employment', {
            url: '/employment',
            templateUrl: 'app/views/employment.html',
            controller: 'employmentController'
        }).
        state('reference', {
            url: '/reference',
            templateUrl: 'app/views/reference.html',
            controller: 'referenceController'
        }).
        state('summary', {
            url: '/summary',
            templateUrl: 'app/views/summary.html',
            controller: 'summaryController'
        })

});

candidateInformation.service('cifService', function () {
    this.candidate = {};
})