'use strict';
/**
 * Created by tomasz on 29/08/2016.
 */

angular.module('core.user').run(['Menus',
    function (Menus) {
        Menus.addMenuItem('neuMenu', {title: 'Activities', state: 'activities' });
        Menus.addMenuItem('neuMenu', {title: 'Insights', state: 'insights'});
        Menus.addMenuItem('neuMenu', {title: 'Models', state: 'models'});
        Menus.addMenuItem('neuMenu', {title: 'Notebooks', state: 'notebooks'});
        Menus.addMenuItem('neuMenu', {title: 'Data', state: 'data'});
        Menus.addMenuItem('neuMenu', {title: 'Cluster', state: 'cluster'});
        Menus.addMenuItem('neuMenu', {title: 'Settings', state: 'settings'});

        //Menus.addMenuItem('neuMenu', {title: 'Example Dropdown', state: '', type: 'dropdown'});
        //Menus.addSubMenuItem('neuMenu', 'exampledropdown', {title: 'Example Sub Item', state: ''});
    }
]);
