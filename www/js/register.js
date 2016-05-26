'Use Strict';
angular.module('App').controller('registerController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

  $scope.register = function(user) {
    if(angular.isDefined(user)){
    Utils.show("Loading");
    Auth.register(user)
      .then(function() {
         Utils.hide();
         console.log("Before Logging:" + JSON.stringify(user));
         Utils.alertshow("Success!","The User was successfully created.");
         $location.path('/');
      }, function(err) {
         Utils.hide();
         Utils.errMessage(err);
      });
    }
  };

}
);
