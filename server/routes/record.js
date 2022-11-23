const express = require('express');

const recordRoutes = express.Router();
const dbo = require('../db/connection');

const ObjectId = require('mongodb').ObjectId;

recordRoutes.route('/record').get(function(req, res){
  let db_connect = dbo.getDb('employees');
  db_connect.collection('records').find({}).toArray(function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

module.exports = recordRoutes;
