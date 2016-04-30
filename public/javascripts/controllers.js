'use strict';

var app = angular.module("myApp");

app.controller("mainCtrl", function($scope, $state) {

  console.log("mainCtrl works");

});

app.controller("listCtrl", function($scope, $state) {
    console.log("listCtrl works");

});

app.controller("detailsCtrl", function($scope, $state) {
    console.log("detailsCtrl works");

});
