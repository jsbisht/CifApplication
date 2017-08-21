candidateInformation.controller("educationController", ['$scope', 'cifService', '$state', function ($scope, cifService, $state) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    $scope.submitForm = function () {
        cifService.candidate = $scope.candidate;
        $state.go('navigation');
    }
}])