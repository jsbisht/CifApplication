var navigationController = candidateInformation.controller("navigationController", ['$scope', 'cifService', '$state', function ($scope, cifService, $state) {
    $scope.navigations = ['personal', 'address', 'education', 'employment', 'reference', 'emergency', 'additional'];
    $scope.candidate = cifService.candidate;

    
    $scope.saveUserDetails = function () {
        //save the user details to database
        cifService.saveDetails().then(function (response) {
            // do something with the response
            $state.go("summary");
            console.log(response);
        }, function (error) {
            // log the error 
            console.log(error);
        });
    }
}])