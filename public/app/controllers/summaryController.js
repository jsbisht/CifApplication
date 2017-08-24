var summaryController = candidateInformation.controller("summaryController", ['$scope', 'cifService', '$state', function ($scope, cifService, $state) {

    var cid = $state.params.cid;
    $scope.candidate = {};

    $.ajax({
        type: "GET",
        url: '/db/details/' + cid,
        async: false
    }).then(function(result) {
        debugger
        angular.copy(result, $scope.candidate);  
        $scope.$apply();  
    });

    
   
    
}]);