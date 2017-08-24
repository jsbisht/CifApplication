var homeController = candidateInformation.controller("homeController", ['$scope', 'cifService', '$state', function ($scope, cifService, $state) {
    $scope.candidate = {};
    $scope.navigations = ['personal', 'address', 'education', 'employment', 'reference', 'emergency', 'additional'];
    $scope.candidate = cifService.candidate;
    $scope.enableSubmit = true;

    var cid = null;

    if ($scope.candidate.personalDetails && $scope.candidate.employmentDetails && $scope.candidate.educationDetails &&
        $scope.candidate.referenceDetails && $scope.candidate.emergencyDetails  && $scope.candidate.addressDetails && $scope.candidate.letterAccepted) {
        $scope.enableSubmit = false;
    }

    $scope.saveUserDetails = function () {
        if (window.confirm("Details once save can not be modified. Are you sure you want to submit?")) {
            //save the user details to database
            cifService.saveDetails().then(function (response) {
                cid = response.cid;
                // do something with the response
                //$state.go("summary");
                localStorage.removeItem("cifFormData");
                console.log(response);
            }, function (error) {
                // log the error 
                console.log(error);
            });
        } else {
            return false;
        }
    };

    $scope.downloadPDF = function() {
        cifService.getPDF(cid);
    };
}]);