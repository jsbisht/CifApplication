var summaryController = candidateInformation.controller("summaryController", ['$scope', 'cifService', function ($scope, cifService) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
    //console.log($scope.candidate);

    $scope.candidate = {
        "letterAccepted": true,
        "employeeName": "Some name",
        "employeeID": "ACS042",
        "emergencyDetails": {
            "bloodGroup": "a+",
            "allergicTo": "dsaffdsf",
            "bloodPressure": "564",
            "sugar": "dfadsfdsf",
            "eyeSight": "6/6",
            "anyMajorIllness": "dsfdsfa",
            "emergencyContactPerson": "dsfadsfsfs",
            "emergencyContactNumber": "56464498",
            "emergencyContactAddress": "dsfadsfdsfdsfdsf"
        },
        "referenceDetails": [
          {
              "name": "dsafdsfds",
              "designation": "dsfdsfadf",
              "organization": "dfdsfds",
              "contact": "156156156",
              "email": "dsfadsfds@dfs.com",
              "periodOfAcquaintance": "ser 59 - see 46"
          },
          {
              "name": "dsadfsdfsd",
              "designation": "dsfadsfdsf",
              "periodOfAcquaintance": "ser 59 - see 46",
              "email": "dsfadsfds@dfs.com",
              "organization": "fdsfdafd",
              "contact": "1549849864986"
          }
        ],
        "employmentDetails": {
            "employers": [
              {
                  "name": "dsaffdsf",
                  "empID": "dfdsfadfdsf",
                  "address": "dsfdsfdsafdsf",
                  "employmentType": "Permanent",
                  "periodOfEmployment": 5,
                  "fromDate": "01-08-2017",
                  "toDate": "20-08-2017",
                  "designation": "dfdsafdsf",
                  "lastSalary": 51445646,
                  "reportingManagersName": "dasfsdfdf",
                  "reportingManagersDesignation": "dfadfdsf",
                  "reportingManagersContact": "12651645848",
                  "reasonForLeaving": "dfsadfdf",
                  "modeOfSeperation": "Others",
                  "seperationModeOthers": "dsafdfdsafdsfdsf"
              }
            ],
            "employmentBreakFrom": "10-08-2017",
            "employmentBreakTo": "02-08-2017",
            "reasonForEmploymentBreak": "dfsadsfdsfadsfafdsf",
            "employmentStudiesBreakFrom": "06-08-2017",
            "employmentStudiesBreakTo": "10-08-2017",
            "reasonForEmploymentStudiesBreak": "dsafdsfdsfdsfdf"
        },
        "educationDetails": {
            "tenth": {
                "schoolName": "sdaffdsf",
                "board": "dfdsafdsf",
                "regNo": "544646486",
                "duration": "4558-4654",
                "yearOfPassing": "6462",
                "percentage": "56"
            },
            "twelth": {
                "schoolName": "dsfdsaf",
                "board": "dfadsfds",
                "regNo": "561654646",
                "duration": "5688-5666",
                "yearOfPassing": "5645",
                "percentage": "89"
            },
            "graduation": {
                "college": "safdsfdsf",
                "board": "dfdsafds",
                "regNo": "2155545",
                "duration": "8996-5656",
                "yearOfPassing": "5689",
                "Percentage": "56"
            },
            "postGraduation": {
                "college": "dfsgfgfdgf",
                "board": "fdgdfgdfg",
                "regNo": "145644",
                "duration": "4668-5552",
                "yearOfPassing": "6568",
                "percentage": "56"
            },
                "eduGapReason": "dfsgsdfgdfg"
        },
        "addressDetails": {
            "current": {
                "addressLine1": "dfgdfgsdfg",
                "addressLine2": "dfgdfsgdfg",
                "addressLine3": "dfgfdgfdg",
                "addressLine4": "dfgdfgdfg",
                "cityName": "dfgdfgdfg",
                "stateName": "fgdfsgdfg",
                "landmark": "dfgdfgdfgdfg",
                "durationOfStay": "56",
                "pinCode": 6654656,
                "telephone": "5646498498"
            },
            "permanent": {
                "addressLine1": "fdsgfdgdfg",
                "addressLine2": "dfgsdfgfdgdfg",
                "addressLine3": "gfdgfgfdg",
                "addressLine4": "dfgdfgdfsgdfg",
                "cityName": "fdgsdfgdfg",
                "stateName": "dfgsdfgdfg",
                "pinCode": 56156156,
                "landmark": "dfsgdfgdfg",
                "durationOfStay": "5",
                "telephone": "561456156156"
            }
        },
        "personalDetails": {
            "title": "Mr.",
            "firstName": "gdfgdfg",
            "middleName": "fgdfsgdfg",
            "lastName": "dfgdfsgsdf",
            "dateOfBirth": "06-08-2017",
            "placeOfBirth": "dfgsdfgdf",
            "mobileNumber": "5645646456",
            "alternateNumber": "5614561456456",
            "personalEmail": "kjdghdfkjghbj@jdbjds.com",
            "nationality": "dsfsadfdsf",
            "passportNumber": "dfhjdsjh67jfjs",
            "pan": "dfdsmf343hj",
            "nsr": "34234134324",
            "fathersName": "dsfdsfdsfdsf",
            "fathersDOB": "08-08-2017",
            "mothersName": "sdfasdfdsf",
            "mothersDOB": "10-08-2017",
            "spouseName": "dsfdsfasd",
            "spouseDOB": "08-08-2017",
            "children": [
              {
                  "name": "dsadfdsf",
                  "DOB": "16-08-2017"
              }
            ]
        }
    }

    $scope.exportAsPdf = function () {
        window.print();
    }

 
    $scope.$on("$includeContentLoaded", function (event, templateName) {
        angular.element(function () {
            $('select').material_select();
            //initializeDatepicker();
            $("button").remove();
            $("input").prop("disabled", "disabled");
        });
    });
    
}])