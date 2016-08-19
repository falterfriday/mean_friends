app.controller('newController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {
	$scope.createUser = function(){
		console.log('made it into the newController');
		friendsFactory.create($scope.newUser, function(data){ 
			console.log('hit the create section of newController');
			$scope.newUser = {};
			$location.url('/friends');
		});
	};
}]);
