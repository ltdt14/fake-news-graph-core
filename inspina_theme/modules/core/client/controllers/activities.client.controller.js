'use strict';

angular.module('core.user').controller('InsightsController', ['$scope', 'Authentication','Menus',
    function ($scope, Authentication,Menus) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        // $scope.menu = Menus.getMenu('neuMenu');

        // Some example string
        $scope.insight = 'Activities!!!!!!! ';

    }
]);
/**
 * Created by tomasz on 29/08/2016.
 */
