candidateInformation.controller("educationController", function ($scope) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    $scope.submitForm = function () {
        cifService.candidate = $scope.candidate;
        $state.go('navigation');
    }
})