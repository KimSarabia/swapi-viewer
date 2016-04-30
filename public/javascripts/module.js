'use strict';


var app = angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state("home",{
    url:"/",
    templateUrl:"/partials/home.html",
    controller:"mainCtrl"
  })
.state("list",{
    url:"/list",
    templateUrl:"/partials/list.html",
    controller:"listCtrl"
  })
  .state("details",{
      url:"/details",
      templateUrl:"/partials/details.html",
      controller:"detailsCtrl"
    })

$urlRouterProvider.otherwise("/");

});
