'Use Strict';
angular.module('App').controller('commentController', function (Utils, $scope, $state, $localStorage, $location,$http,$ionicPopup, $firebaseObject, FURL, Utils) {
  var ref = new Firebase(FURL);
  var comments_array = $firebase(ref)

  var comments = ref.child("Comments");
  $scope.comment = {
    email: '',
    event_id: '',
    comment: ''
  };

  ref.push().set({
    "comment": newCommentForm.$viewValue
  });
});

  /*
  $scope.commentSubmit = function(form){
    comments.push({
      email: user.email,
      event_id: {{chats.id}},
      comment: form.newCommentForm.$viewValue
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
      $scope.$watch('newCommentForm.$valid', function(){
        console.log("For validity changed. Now : " + $scope.newCommentForm.$valid);
      });
      $scope.submit = function(){
        if($scope.newCommentForm.$valid){
          $scope.commentSubmit($scope.newCommentForm);
        }
      }

    }
  }

})
*/
