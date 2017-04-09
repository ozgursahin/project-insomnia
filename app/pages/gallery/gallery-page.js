'use strict';

angular.module('insomnia')
	.component('galleryPage', {
		controller: function GalleryPageCtrl($scope, $log, $mdDialog) {
			$log.log('Gallery Page');

			$scope.pictures = [
				'pages/gallery/pictures/1.jpg',
				'pages/gallery/pictures/2.jpg',
				'pages/gallery/pictures/3.jpg',
				'pages/gallery/pictures/4.jpg',
				'pages/gallery/pictures/5.jpg',
				'pages/gallery/pictures/6.jpg',
				'pages/gallery/pictures/7.jpg',
				'pages/gallery/pictures/8.jpg',
				'pages/gallery/pictures/9.jpg'
			];

			function DialogController($scope, $mdDialog) {
				$scope.cancel = function () {
					$mdDialog.cancel();
				};
			}

			$scope.showAdvanced = function (ev) {
				$mdDialog.show({
						controller: DialogController,
						templateUrl: 'pages/gallery/picture-list.html',
						parent: angular.element(document.body),
						targetEvent: ev,
						clickOutsideToClose: true
					})
					.then(function (answer) {
						//
					});
			};
		},
		templateUrl: 'pages/gallery/gallery-page.html'
	});