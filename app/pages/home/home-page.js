'use strict';

angular.module('insomnia')
.component('homePage', {
	controller: function HomePageCtrl($log) {
		$log.log('Home Page');
	},
	templateUrl: 'pages/home/home-page.html'
});