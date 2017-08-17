var personalController = candidateInformation.controller("personalController", ['$scope', 'cifService','$state', function ($scope, cifService,$state) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    $scope.hasChildren = false;
    $scope.addChildren = function () {
        if ($scope.hasChildren && angular.isUndefined($scope.candidate.personalDetails)) {
            $scope.candidate.personalDetails = {};
            $scope.candidate.personalDetails.children = [];
            $scope.candidate.personalDetails.children.push({"name":"","DOB":""});
        } else {
            if ($scope.hasChildren) {
                $scope.candidate.personalDetails.children.push({ "name": "", "DOB": "" });
            } else {
                $scope.candidate.personalDetails.children = [];
            }
            
        }
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
            selectYears: 50, // Creates a dropdown of 30 years to control year,
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