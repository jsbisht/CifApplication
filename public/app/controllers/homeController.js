var homeController = candidateInformation.controller("homeController", ['$scope', 'cifService', function ($scope, cifService) {
    $scope.candidate = cifService.candidate;
}])