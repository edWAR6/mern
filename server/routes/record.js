const express = require('express');

const recordRoutes = express.Router();
const dbo = require('../db/connection');

const ObjectId = require('mongodb').ObjectId;

recordRoutes.route('/record').get(function(req, res){
  let db_connect = dbo.getDb();
  db_connect.collection('records').find({}).toArray(function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route('/record/:id').get(function(req, res){
  let db_connect = dbo.getDb();
  let query = { _id: ObjectId(req.params.id) };
  db_connect.collection('records').findOne(query, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route('/record/add').post(function(req, res){
  let db_connect = dbo.getDb();
  let record = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection('records').insertOne(record, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});

module.exports = recordRoutes;
