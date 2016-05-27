/*
'Use strict';
angular.module('App').controller('adminloginController', function (Utils, $scope, $state, $localStorage, $location,$http,$ionicPopup, $firebaseObject, FURL){

  if('loginForm.$submitted' &&'user.password' == "PASSWORD"){
    state.go('adminevents');
    console.log("Twas successful");
  }
  else {
    console.log("Twas not successful");
  }


});
*/


'Use Strict';
angular.module('App').controller('adminloginController', function ($scope, $state, $cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = new Firebase(FURL);
  var userkey = "";
  $scope.signIn = function (user) {
    console.log("Enviado");
    console.log(user.password);
    if(angular.isDefined(user)){
    Utils.show("Loading");
    Auth.login(user)
      .then(function(authData) {
      //console.log("id del usuario:" + JSON.stringify(authData));

      ref.child('admin').orderByChild("id").equalTo(authData.uid).on("child_added", function(snapshot) {
        console.log(snapshot.key());
        userkey = snapshot.key();
        var obj = $firebaseObject(ref.child('admin').child(userkey));

        obj.$loaded()
          .then(function(data) {
            //console.log(data === obj); // true
            //console.log(obj.email);
            //if(user.password == 'PASSWORD'){return}
            $localStorage.email = obj.email;
            $localStorage.userkey = userkey;

              Utils.hide();
              $state.go('admin-events');
              console.log("Starter page","Home");

          })
          .catch(function(error) {
            console.error("Error:", error);
          });
      });

      }, function(err) {
        Utils.hide();
         Utils.errMessage(err);
      });
    }
  };
});
