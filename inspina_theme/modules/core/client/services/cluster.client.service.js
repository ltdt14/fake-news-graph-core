"use strict";

/**
 * Created by tomasz on 29/08/2016.
 */

angular.module('core.user.cluster').factory('clusterService', function($q, $http) {

    // service container
    var service = {};
    var baseURL = 'http://master01.prometheus.pixelpark.net:5050';

    service.dataname = 'test vom service';
    console.log("im in factory");

    var summarizeMetrics = function(snapshot) {
        var summary = {};
        // slaves
        summary.slaves = {};
        summary.slaves.registrations = snapshot.data['master/slave_reregistrations'];
        summary.slaves.active = snapshot.data['master/slaves_active'];
        summary.slaves.percentage = summary.slaves.registrations * 100 / summary.slaves.active;
        // !-- still a mockup
        summary.slaves.pixelpark = snapshot.data['master/slaves_active'];
        summary.slaves.aws = 0;
        summary.slaves.gce = 0;

        // CPU
        summary.cpu = {};
        summary.cpu.total = snapshot.data['master/cpus_total'];
        summary.cpu.used = snapshot.data['master/cpus_used'];
        summary.cpu.percentage = summary.cpu.used * 100 / summary.cpu.total;

        // Memory
        summary.memory = {};
        summary.memory.total = snapshot.data['master/mem_total'] / 1000;
        summary.memory.used = snapshot.data['master/mem_used'] / 1000;
        summary.memory.percentage = summary.memory.used * 100 / summary.memory.total;

        // Disk
        summary.disk = {};
        summary.disk.total = snapshot.data['master/disk_total'] / 1000;
        summary.disk.used = snapshot.data['master/disk_used'] / 1000;
        summary.disk.percentage = summary.disk.used * 100 / summary.disk.total;

        // Tasks
        summary.tasks = {};
        summary.tasks.staging = snapshot.data['master/tasks_staging'];
        summary.tasks.starting = snapshot.data['master/tasks_starting'];
        summary.tasks.running = snapshot.data['master/tasks_running'];
        summary.tasks.finished = snapshot.data['master/tasks_finished'];
        summary.tasks.killed = snapshot.data['master/tasks_killed'];
        summary.tasks.failed = snapshot.data['master/tasks_failed'];

        // lost = richtig warnung noch adden

        return summary;
    };

    service.getMetricsSnapshot = function() {
        var deferred = $q.defer();
        $http.get(baseURL + '/metrics/snapshot')
            .then(function(response) {
                console.log(response);
                deferred.resolve(summarizeMetrics(response));
            }, function(response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };

    service.getFrameworks = function() {
        var deferred = $q.defer();
        $http.get(baseURL + '/master/frameworks')
            .then(function(response) {
                deferred.resolve(response);
            }, function(response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };

    service.getTasks = function() {
        var deferred = $q.defer();
        $http.get(baseURL + '/master/tasks')
            .then(function(response) {
                deferred.resolve(response);
            }, function(response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };

    // return service container
    return service;

});
