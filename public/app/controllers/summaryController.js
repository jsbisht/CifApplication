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
        pdf.addHTML(canvasObj, 0, 0, pdfConf, function () {
            document.body.removeChild(canvasObj);
            //pdf.addPage();
            pdf.save(fileName + '.pdf');
            $(".container").css({ "width": "70%", "margin": "auto", "max-width": "1280px" });
            //$("button").attr("data-html2canvas-ignore", true);
            //callback();
        });
    }
    $scope.exportAsPdf = function () {
        window.print();
        ////var pdf = new jsPDF('p', 'pt', 'letter');
        ////pdf.addHTML($('body').get(0), 15, 15,{},function (dispose) {
        ////    pdf.save('Test.pdf');
        ////});
        $(".container").css({ "width": "595px", "margin": "0"});
        html2canvas($(".container"),{
            useCORS: true,
            //allowTaint:true,
            onrendered: function (canvas) {
                theCanvas = canvas;
                $(".container").css({ "width": "595px", "margin": "0","padding": "20px" });
                document.body.appendChild(canvas);
                startPrintProcess(canvas, 'CIF');
                
            }
        });
        //var pdf = new jsPDF('p', 'pt', 'letter');
        ////pdf.canvas.height = 72 * 11;
        ////pdf.canvas.width = 595;

        //pdf.fromHTML($(".container").html());

        //pdf.save('test.pdf');
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