'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();
const clientAppApi = require('./api/clientApp');

router.get("/", clientAppApi.reactRouterHandle);
router.get("/impressum", clientAppApi.reactRouterHandle);
router.get("/sdfsaf", clientAppApi.reactRouterHandle);
/*
//todo fix this
router.get("*", function(req, res){
    if(!(req.url.includes("files") || req.url.includes('img') || req.url.includes('build') || req.url.includes('css') || req.url.includes(('fonts')))){
        clientAppApi.reactRouterHandle(req, res);
    }
});
*/

module.exports = router;