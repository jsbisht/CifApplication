var addressController = candidateInformation.controller("addressController",['$scope', 'cifService', '$state', function ($scope, cifService, $state) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    
    $scope.$watch('sameAddress', function(newValue, oldValue) {
        if (newValue){
            $scope.candidate.addressDetails.permanent=$scope.candidate.addressDetails.current;
        }else{
            $scope.candidate.addressDetails.permanent={};
        }
            
    }, true);
    $scope.submitForm = function () {
        cifService.candidate = $scope.candidate;
        $state.go('navigation');
    }
}])