/**
 * Created by tomasz on 29/08/2016.
 */
'use strict';

module.exports = function (app) {
    // User Routes
    var projects = require('../controllers/projects.server.controller');

    // Setting up the users profile api
    app.route('/api/projects/').get(projects.checkIfAuthorised,projects.my);
    app.route('/api/projects/add').post(projects.checkIfAuthorised,projects.addProject);
    app.route('/api/projects/:project_id').get(projects.checkIfAuthorised,projects.getOne)
        .put(projects.checkIfAuthorised,projects.update);

};
