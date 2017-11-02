function ContactController($scope, $timeout) {
    $scope.name = "Mike Ries";
    $timeout(function() {
        $scope.name = "Something else.";
    }, 5000);
}

angular.module("app").controller("ContactController", ContactController);
