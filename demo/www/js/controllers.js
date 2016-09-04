/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('BasketDetailCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $cordovaGeolocation) {
    
	
	// google maps setup 
	var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

	// alert('scope map');
    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng
      });      

      var infoWindow = new google.maps.InfoWindow({
          content: "Commerce CA -- Veteran office - Job fair !"
      });

      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
      });

    });

  }, function(error){
    console.log("Could not get location");
  });// 
	
	
	
	// Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
	
	
	
	
	
	
	
})

.controller('ShareBasketCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
	
})

.controller('ProfileCtrl', function($scope, $ionicPopup, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
	
	

})


.controller('ProfileSignupCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    
	console.log("Show singup form -- ProfileSignupCtrl CTRL ");
	
	// Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    
	$timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    
	/*
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    */
    // Set Ink
    ionicMaterialInk.displayEffect();
	//$window.location.href = ('#/postsignup');
})

.controller('PostSignupCtrl', function($scope, API, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $window) {
  
	$scope.user = {
        email: "",
        password: "",
        username: "",
		city:"",
		phone:""
    };
 
 console.log("PostSignup CTRL -- " + $scope.user.username);

	
    $scope.createUser  = function () {
		
		console.log("PostSignup CTRL scope username-- " + $scope.user.username);
		console.log("PostSignup CTRL scope password-- " + $scope.user.password);
		
		console.log("PostSignup CTRL this username -- " + this.user.username);
		console.log("PostSignup CTRL this password -- " + this.user.password);
		
		
    	var email        = this.user.email;
        var password     = this.user.password;
		var username     = this.user.username;
		var v_city       = this.user.city;
		var v_phone      = this.user.phone;
		
		// alert('usertype: ' + this.user.usertype );
		
		console.log("PostSignup CTRL email: " + email + " password" + password );
		
        //if( !email || !password ) {
        	//$scope.notify("Please enter valid data");
			//console.log("Please enter valid data");
        	//return false;
        //}
        //$scope.show('Please wait.. Registering');
		
        API.signup({
            email: email,
            password: password,
			username: username,
			city_id: v_city,
			phone: v_phone
        }).success(function (data) {
            $scope.setToken(email); // create a session kind of thing on the client side
            $scope.hide();
            $window.location.href = ('#/app/profile');
        }).error(function (error) {
            $scope.hide();
        	if(error.error && error.error.code == 11000)
        	{
        		$scope.notify("A user with this email already exists");
        	}
        	else
        	{
        		$scope.notify("Oops something went wrong, Please try again!");
				$window.location.href = ('#/app.postsignup');
        	}
            
        });
    }
	
	
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
	
	
	// pop up 
	// Triggered on a button click, or some other target
	$scope.showPopup = function() {
	  $scope.data = {};

	  // An elaborate, custom popup
	  var myPopup = $ionicPopup.show({
		template: '<input type="password" ng-model="data.wifi">',
		title: 'Enter Wi-Fi Password',
		subTitle: 'Please use normal things',
		scope: $scope,
		buttons: [
		  { text: 'Cancel' },
		  {
			text: '<b>Save</b>',
			type: 'button-positive',
			onTap: function(e) {
			  if (!$scope.data.wifi) {
				//don't allow the user to close unless he enters wifi password
				e.preventDefault();
			  } else {
				return $scope.data.wifi;
			  }
			}
		  }
		]
	  });

	  myPopup.then(function(res) {
		console.log('Tapped!', res);
	  });

	  $timeout(function() {
		 myPopup.close(); //close the popup after 3 seconds for some reason
	  }, 3000);
	 };
})

.controller('addPetFabButtonCtrl', function($scope, $stateParams, $ionicPopup, $timeout, ionicMaterialInk, ionicMaterialMotion, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice, $cordovaActionSheet) {
	
	 
 
		  $timeout(function () {
				$scope.showFabButton = true;
			}, 900);

			// pop up 
			// Triggered on a button click, or some other target
	$scope.showPopup = function() {
	  $scope.data = {};

	  // An elaborate, custom popup
	  var myPopup = $ionicPopup.show({
		templateUrl: 'templates/addPetPicture.html',
		title: 'Pet Profile',
		subTitle: 'Add info',
		scope: $scope,
		buttons: [
		  { text: 'Cancel' },
		  {
			text: '<b>Save</b>',
			type: 'button-positive',
			onTap: function(e) {
			  if (!$scope.data.wifi) {
				//don't allow the user to close unless he enters wifi password
				e.preventDefault();
			  } else {
				return $scope.data.wifi;
			  }
			}
		  }
		]
	  });

	  myPopup.then(function(res) {
		console.log('Tapped!', res);
	  });

	  /*
	  $timeout(function() {
		 myPopup.close(); //close the popup after 3 seconds for some reason
	  }, 3000);
	  */
	 };
			 
			 
$scope.loadImage = function() {
  var options = {
    title: 'Select Image Source',
    buttonLabels: ['Load from Library', 'Use Camera'],
    addCancelButtonWithLabel: 'Cancel',
    androidEnableCancelButton : true,
  };
  $cordovaActionSheet.show(options).then(function(btnIndex) {
    var type = null;
    if (btnIndex === 1) {
      type = Camera.PictureSourceType.PHOTOLIBRARY;
    } else if (btnIndex === 2) {
      type = Camera.PictureSourceType.CAMERA;
    }
    if (type !== null) {
      $scope.selectPicture(type);
    }
  });
};

// Take image with the camera or from library and store it inside the app folder
// Image will not be saved to users Library.
$scope.selectPicture = function(sourceType) {
  var options = {
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: sourceType,
    saveToPhotoAlbum: false
  };
 
  $cordovaCamera.getPicture(options).then(function(imagePath) {
    // Grab the file name of the photo in the temporary directory
    var currentName = imagePath.replace(/^.*[\\\/]/, '');
 
    //Create a new name for the photo
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
 
    // If you are trying to load image from the gallery on Android we need special treatment!
    if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
      window.FilePath.resolveNativePath(imagePath, function(entry) {
        window.resolveLocalFileSystemURL(entry, success, fail);
        function fail(e) {
          console.error('Error: ', e);
        }
 
        function success(fileEntry) {
          var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
          // Only copy because of access rights
          $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success){
            $scope.image = newFileName;
          }, function(error){
            $scope.showAlert('Error', error.exception);
          });
        };
      }
    );
    } else {
      var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      // Move the file to permanent storage
      $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
        $scope.image = newFileName;
      }, function(error){
        $scope.showAlert('Error', error.exception);
      });
    }
  },
  function(err){
    // Not always an error, maybe cancel was pressed...
  })
};
 
 // Returns the local path inside the app for an image
$scope.pathForImage = function(image) {
  if (image === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + image;
  }
};


$scope.uploadImage = function() {

  console.log('=>call uploadImage()');
  // Destination URL
   var url = "http://vetpetdb.dev/api/v1/userprofile/upload";
  
 
  // File for Upload
  var targetPath = $scope.pathForImage($scope.image);
  console.log('targetPath=> ' + targetPath);
 
  // File name only
  var filename = $scope.image;;
 
  var options = {
    fileKey: "image",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'image': filename}
  };
 
   console.log('=>call cordovaFileTransfer()');
  $cordovaFileTransfer.upload(url, targetPath, options).then(function(result) {
    $scope.showAlert('Success', 'Image upload finished.');
	}, function(err) {
		var alertPopup = $ionicPopup.alert({
			title: 'Error!',
			template: JSON.stringify(err)
		});
		console.log("ERROR: " + JSON.stringify(err));
	}, function (progress) {
		var alertPopup = $ionicPopup.alert({
			title: 'File Transfer',
			template: 'Still transfering'
		});
  });
  
}
 

})

;
















