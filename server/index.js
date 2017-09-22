const express = require('express');

// define some data
const DATA = [
  {name: 'Gretta',  age: 22},
  {name: 'Bob',     age: 17},
  {name: 'Catrina', age: 73},
];

// create the server
const app = express();

// ignore this for now, just need it in order to not error in development (i.e. using localhost)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

// define route handlers, i.e. what happens when the client makes various requests

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// TODO: Add more more handlers here

// have the server you created start accepting requests from clients
app.listen(9000, () => {
  console.log(`Listening on port 9000...`);
});
