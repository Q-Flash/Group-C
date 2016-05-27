'Use Strict';
angular.module('App').controller('eventController', function (Utils, $scope, $state, $localStorage, $location,$http,$ionicPopup, $firebaseObject, FURL, Utils) {
  var ref = new Firebase(FURL);

  var events = ref.child("Events");
  $scope.event = {
    event_name: '',
    event_date: '',
    event_time: '',
    event_genre: '',
    event_location: '',
    event_cooridates: '',
    event_description: '',
    event_likes: 0
  };
  $scope.userSubmit = function(form){
    events.push({
      event_name: form.txteventname.$viewValue,
      event_date: form.txteventdate.$viewValue,
      event_time: form.txteventtime.$viewValue,
      event_genre: form.txteventgenre.$viewValue,
      event_location: form.txteventlocation.$viewValue,
      event_coordinates: form.txteventcoordinates.$viewValue,
      event_description: form.txteventdes.$viewValue,
      event_likes: 0
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
