var summaryController = candidateInformation.controller("summaryController", ['$scope', 'cifService', function ($scope, cifService) {
    $scope.candidate = {};
    angular.copy(cifService.candidate, $scope.candidate);
 
    function startPrintProcess(canvasObj, fileName) {
        var pdf = new jsPDF(),
          pdfConf = {
              pagesplit: true,
              background: '#fff'
          };
        document.body.appendChild(canvasObj); //appendChild is required for html to add page in pdf
        
        pdf.addHTML($(".container"), function () {
            pdf.addPage();
            for (var i = 0; i < $("form").length; i++) {
                debugger
                pdf.addHTML($("form").get(i), function () {
                    $("button").attr("data-html2canvas-ignore", true);
                });
            }
               
            pdf.save("cif.pdf");
        });
       
    }
    $scope.exportAsPdf = function () {
        //window.print();
        var pdf = new jsPDF('p', 'pt', 'letter');
        pdf.addHTML($('body').get(0), 15, 15,{},function (dispose) {
            pdf.save('Test.pdf');
        });
        ////$(".container").css({ "width": "100%", "margin": "0", "max-width": "100%", "padding": "20px" });
        //html2canvas($(".container"),{
        //    useCORS: true,
        //    //allowTaint:true,
        //    onrendered: function (canvas) {
        //        theCanvas = canvas;
        //        document.body.appendChild(canvas);
        //        startPrintProcess(canvas, 'CIF');
                
        //    }
        //});
    }


    $scope.$on("$includeContentLoaded", function (event, templateName) {
        angular.element(function () {
            $('select').material_select();
            //initializeDatepicker();
            $("button").hide();
        });
    });
    
}])