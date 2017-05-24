/**
 * Created by tomasz on 29/08/2016.
 */
'use strict';

angular.module('core.user.cluster',['core'])

    .controller('ClusterController', ['$scope', 'Authentication','clusterService',
    function ($scope, Authentication,clusterService) {
        // This provides Authentication context.

        clusterService.getMetricsSnapshot()
            .then (function(result) {
            $scope.metrics = result;
        });

        // Mesos Frameworks
        clusterService.getFrameworks()
            .then (function(result) {
            console.log(result);
            $scope.frameworks = result.data.frameworks;
        });

        // Mesos Tasks
        clusterService.getTasks()
            .then (function(result) {
            console.log(result);
        });


    }
]);

