'use strict';

// Setting up route
angular.module('core.user.routes').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('insights', {
                url: '/insights',
                templateUrl: 'modules/core/client/views/insights.client.view.html',
                data: {
                    roles: ['user']
                }
            })

        .state('activities', {
            url: '/activities',
            templateUrl: 'modules/core/client/views/activities.client.view.html',
            data: {
                roles: ['user']
            }
        })

        .state('models', {
            url: '/models',
            templateUrl: 'modules/core/client/views/models.client.view.html',
            data: {
                roles: ['user']
            }
        })
        .state('notebooks', {
                url: '/notebook',
                templateUrl: 'modules/core/client/views/notebooks.client.view.html',
                data: {
                    roles: ['user']
                }
        })
        .state('data', {
            url: '/data',
            templateUrl: 'modules/core/client/views/data.client.view.html',
            data: {
                roles: ['user']
            }
        })
        .state('cluster', {
                url: '/cluster',
                templateUrl: 'modules/core/client/views/cluster.client.view.html',
                data: {
                    roles: ['user']
                }
            });
    }
]);
