const express = require('express');
const server = express();

// Knex
const knex = require('knex');
const knexfile = require('../knexfile.js');
const db = knex(knexfile.development);

server.use(express.json());

server.get('/', (req, res) => {
  res.send('THIS IS WORKING');
});

server.get('/api/cars', (req, res) => {
  db('cars').then((cars) => {
    res.status(200).json({ message: cars });
  });
});

server.post('/api/cars', (req, res) => {
  carData = req.body;

  db('cars')
    .insert(carData)
    .then((car) => {
      res.status(201).json({ message: 'Successfully added.' });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = server;
