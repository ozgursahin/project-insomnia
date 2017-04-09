'use strict';

// Declare app level module which depends on views, and components
angular.module('insomnia', [
  'insomnia.version',
  'ui.router',
  'ngMaterial'
]).
config(function ($locationProvider, $stateProvider) {
  var states = [
    {
      name: 'home',
      url: '/home',
      component: 'homePage'
    },
    {
      name: 'gallery',
      url: '/gallery',
      component: 'galleryPage'
    }
  ];

  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});