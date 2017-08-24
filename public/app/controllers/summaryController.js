var summaryController = candidateInformation.controller("summaryController", ['$scope', 'cifService', '$state', function ($scope, cifService, $state) {

    var cid = $state.params.cid;

    cifService.getDetails(cid).then(function(data) {
        console.log(data);
    });

    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    //console.log($scope.candidate);
    if(angular.isUndefined($scope.candidate)){
        $scope.candidate=JSON.parse(localStorage.getItem("cifFormData"));
    }
    if (!$scope.candidate.personalDetails || !$scope.candidate.employmentDetails || !$scope.candidate.educationDetails ||
        $scope.candidate.referenceDetails || $scope.candidate.emergencyDetails  || $scope.candidate.address || $scope.candidate.letterAccepted) {
            $scope.candidate=JSON.parse(localStorage.getItem("cifFormData"));
    }
    
}]);