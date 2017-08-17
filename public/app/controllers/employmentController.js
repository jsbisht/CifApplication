var employmentController = candidateInformation.controller("employmentController", ['$scope', 'cifService', '$state', function ($scope, cifService, $state) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    $scope.candidate.employmentDetails = [{}];
    $scope.addEmployment = function () {
        $scope.candidate.employmentDetails.push({
            "name": "",
            "DOB": ""
        });
        angular.element(function () {
            initializeDatepicker();
        })

    }

    $scope.submitForm = function () {
        cifService.candidate = $scope.candidate;
        $state.go('navigation');
    }
    function initializeDatepicker() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 30, // Creates a dropdown of 30 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: true, // Close upon selecting a date,
            max: new Date(),
            format: 'dd-mm-yyyy'
        });
    }
    angular.element(function () {
        $('select').material_select();
        initializeDatepicker();
    });

}])