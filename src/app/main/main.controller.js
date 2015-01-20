'use strict';
/*jshint esnext: true */

const UP = 38;
const DOWN = 40;

const MAX_IMG_SIZE = 1000;

class MainCtrl {
  constructor ($scope) {
    $scope.link = `http://${window.location.hostname}/`;
    [$scope.width, $scope.height] = [200, 200];
    $scope.bgcolor = 'f7f7f7';
    $scope.textcolor = 'aaaaaa';

    $scope.fullLink = function() {
      return $scope.link + $scope.width + 'x' + $scope.height + 
            ($scope.bgcolor ? '/' + $scope.bgcolor.replace('#', '') : '') +
            ($scope.textcolor ? '/' + $scope.textcolor.replace('#', '') : '') +
            ($scope.text ? '?text=' + encodeURIComponent($scope.text) : '');
    };

    $scope.keyPress = function($event, field) {
      var newval = $scope[field];

      if ($event.keyCode === UP) {
        newval += 1;
      } else if ($event.keyCode === DOWN) {
        newval -= 1;
      }

      if ((newval > 0) && (newval <= MAX_IMG_SIZE)) {
        $scope[field] = newval;
      } else {
        return false;
      }
    };
  }
}

MainCtrl.$inject = ['$scope'];

export default MainCtrl;
