var candidateInformation = angular.module("candidateInformation", ['ngRoute']);

candidateInformation.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../app/views/home.html",
        controller: 'homeController',
    })
    
});