var navigationController = candidateInformation.controller("navigationController", ['$scope', 'cifService', function ($scope, cifService) {
    $scope.navigations = ['personal', 'address', 'education', 'employment', 'reference', 'emergency', 'additional'];
    $scope.candidate = cifService.candidate;
}])