'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var Thing;

const JWT_SECRET = "";

var thingSchema = mongoose.Schema({
  //key:type{type: mongoose.Schema.Types.ObjectId, ref: 'OtherThing'}]
  //key:type
  //key: {key:type}
});

Thing = mongoose.model('Thing', thingSchema);
module.exports = Thing;
