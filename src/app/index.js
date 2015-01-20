'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
// import AboutCtrl from './about/about.controller';

import NavbarCtrl from '../components/navbar/navbar.controller';

angular.module('picfill', 
  [
  // 'ngAnimate', 'ngCookies',
   // 'ngTouch', 'ngSanitize', 'ngResource', 
  'ngRoute', //'mm.foundation', 
  'ui.slider', 'minicolors'])
  .controller('MainCtrl', MainCtrl)
  // .controller('NavbarCtrl', NavbarCtrl)
  // .controller('AboutCtrl', AboutCtrl)
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (minicolorsProvider) {
    angular.extend(minicolorsProvider.defaults, {
      control: 'hue',
      position: 'top left'
    });
  })
;
