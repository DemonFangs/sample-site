/*Connect to the FTP server with the provided information*/
var app1 = angular.module('app1', []);
var server = "ftp.fizzzftp.com";


app1.controller('ctrl', function($scope) {

  $scope.getUserInfo = function(){
    $scope.ftpsite = "ftp://" + $scope.username + ":" + $scope.password + "@" + server;
    
  }

  $scope.cancel = function(){
  }
});

// $('#login').on('click', function(){
//     getUserInfo();
//   }
// );
