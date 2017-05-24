'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * User Schema
 */
var ProjectSchema = new Schema({


    projectTitle: {
        type: String,
        trim: true,
        default: ''
    },
    customer: {
        type: String,
        trim: true,
        default: ''
    },
    participants: [],
    projectOwner: {
        type: String,
        lowercase: true,
        trim: true
    },
    profileImageURL: {
        type: String,
        default: 'modules/users/client/img/profile/default.png'
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});



mongoose.model('Project', ProjectSchema);
