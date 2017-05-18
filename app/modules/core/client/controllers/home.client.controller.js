'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'Projects',
  function ($scope, Authentication, Projects) {
    // This provides Authentication context.
    $scope.authentication = Authentication;


    //Assigning  user to projects
    if(Authentication.user){
      Projects.query(function(data){
        $scope.userProjects = data;
      });

    }

    // Some example string
    $scope.helloText = 'Welcome in Talos WebUI ';
    $scope.descriptionText = 'It is an application skeleton for  Talos. You can use it to quickly bootstrap your project.';

  }
]);
