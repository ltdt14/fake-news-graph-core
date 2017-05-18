/**
 * Created by tomasz on 29/08/2016.
 */
'use strict';

angular.module('core.user').controller('ModelsController', ['$scope', 'Authentication','Menus',
    function ($scope, Authentication,Menus) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        // $scope.menu = Menus.getMenu('neuMenu');

        // Some example string
        $scope.insight = 'models!!!!!!! ';

    }
]);
