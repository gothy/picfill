'use strict';
/*jshint esnext: true */

class NavbarCtrl {
  constructor ($scope) {
    $scope.activeTab = 'home';
    $scope.date = new Date();
  }

}

NavbarCtrl.$inject = ['$scope'];

export default NavbarCtrl;
