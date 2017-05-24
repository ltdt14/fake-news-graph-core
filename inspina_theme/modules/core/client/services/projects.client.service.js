'use strict';


//TODO handling requests!
// Projects service used for communicating with the users REST endpoint
angular.module('core').factory('Projects', ['$resource',
    function ($resource) {
        return $resource('/api/projects/:id', null,
            {
                'update': { method:'PUT' }
            });
    }
]);
