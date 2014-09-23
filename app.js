var app = angular.module('kunala', []);

app.controller('MainCtrl', function($scope) {
	$scope.mp3_folder = './mp3/';
	$scope.mp3_lists = [];
	
	$scope.mp3_lists.push({
		title: '000-1 นะโม-32.mp3', file:'000-1.mp3'
		
	});
});
