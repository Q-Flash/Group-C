'Use Strict';
angular.module('App').controller('eventController', function (Utils, $scope, $state, $localStorage, $location,$http,$ionicPopup, $firebaseObject, FURL, Utils) {
  var ref = new Firebase(FURL);

  var events = ref.child("Events");
  $scope.event = {
    event_name: '',
    event_date: '',
    event_time: '',
    event_location: '',
    event_description: ''
  };
  $scope.userSubmit = function(form){
    events.push({
      event_name: form.txteventname.$viewValue,
      event_date: form.txteventdate.$viewValue,
      event_time: form.txteventtime.$viewValue,
      event_location: form.txteventlocation.$viewValue,
      event_description: form.txteventdes.$viewValue
    })
    //Utils.show("Submitted");
    //$state.go('admin-events');
    //Utils.hide();
    console.log("Submitting");
  }
})

.directive('formManager', function($ionicLoading){
  return{
    restrict: 'A',
    controller: function($scope){
      $scope.$watch('eventForm.$valid', function(){
        console.log("For validity changed. Now : " + $scope.eventForm.$valid);
      });
      $scope.submit = function(){
        if($scope.eventForm.$valid){
          $scope.userSubmit($scope.eventForm);
        }
      }

    }
  }
})
