angular.module('App.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation,$ionicLoading, $ionicPopup) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    var EventmyLatlng = new google.maps.LatLng(13.1704468,-59.6357891); //Sandy Lane Golf Course
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){





       var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer({map:$scope.map});



         var request = {
            origin : latLng,
            destination : EventmyLatlng,
            travelMode : google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });

           directionsDisplay.setMap($scope.map);
    });
  },
  function(error){
    $ionicPopup.alert({
      title: 'Location Error',
      template: error
    })
  });

  $scope.centerOnMe = function() {
          if(!$scope.map) {
              return;
          }

          $ionicLoading.show({
            content: 'Getting current location...',
            showBackdrop: false
          });

          navigator.geolocation.getCurrentPosition(function(pos) {
            $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            $ionicLoading.hide();
          }, function(error) {
            alert('Unable to get location: ' + error.message);
          });
      };
})

.controller('ChatsCtrl', function($scope, Chats,$location) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});



  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})





.controller('ChatDetailCtrl', function($scope, $stateParams, $location,$cordovaCamera, Chats) {
  $scope.takeImage = function() {
      var options = {
          quality: 80,
          destinationType: 0,//Camera.DestinationType.DATA_URL,
          sourceType: 1,//Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: 0,//Camera.EncodingType.JPEG,
          targetWidth: 250,
          targetHeight: 250,
          //popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.srcImage = "data:image/jpeg;base64," + imageData;
      }, function(err) {
          // error
      });
  }
$scope.gotourl = function(path){
   $location.path(path);
}

  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
