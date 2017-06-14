'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();

router.get("/", function(req, res){
    res.render('index');
});

router.get("/keyword-results", function(req, res){
    res.render('keyword-results');
});

router.get("/analysis", function(req, res){
    res.render('analysis');
});


module.exports = router;