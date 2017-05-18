/**
 * Created by tomasz on 29/08/2016.
 */
'use strict';

var _ = require('lodash'),
    chalk=require('chalk'),
    mongoose = require('mongoose'),
    Project = mongoose.model('Project'),
path = require('path'),
errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


exports.checkIfAuthorised=function(req,res,next ){
    if (req.session && req.user.username) {
        next(); // allow the next route to run
    } else {
        // require the user to log in
        res.redirect("/login"); // or render a form, etc.
    }

};


exports.addProject = function(req,res,next){
    // Init Variables
    var project = new Project(req.body);
    var message = null;
    project.projectOwner = req.user.username;
    project.participants.push(req.user.username);
    project.save(function(err){
        if(err){
            return res.status(400).send({message: errorHandler.getErrorMessage(err)});
        } else {
            console.log(project);
            res.status(200).send({message:"Project "+project.projectTitle+" is saved!"});
        }
    });

};

exports.my = function (req, res, next) {

    //console.log(req.session);
    console.log(chalk.blue('Looking for projects of - '+ req.user.username));

    Project.find({
        projectOwner: req.user.username,
    }).exec(function (err, project) {
        if (err) {
            return next(err);
        } else if (!project) {
            return next(new Error('Failed to load project '));
        }
        return res.status(200).send(project);
    });
};


exports.getOne = function(req,res){

    Project.findById(req.params.project_id, function(err, project) {
        if (err){
            res.send(err);
        }

        res.json(project);
    });
};



exports.update = function(req,res){
    var query={"_id":req.params.project_id};
    Project.findOneAndUpdate(query, req.body, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("Succesfully saved");
    });



};


