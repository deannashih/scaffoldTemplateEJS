'use strict';

var express = require('express');
var router = express.Router();

var Thing = require('../models/thing');

router.get('/', function(req, res){
  Thing.find({}, function(err, things){
    if (err) return err;
    res.send(things);
  });
});
