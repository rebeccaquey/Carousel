/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const express = require('express');
// const bodyParser = require('body-parser');
const Carousels = require('../database/Carousel.js');

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('client/dist'));

app.get('/api/rooms/carousels', (req, res) => {
  Carousels.find((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/api/rooms/:roomId/carousels', (req, res) => {
  const roomId = req.params.roomId || '';
  // console.log('req.params.roomId: ', roomId);
  Carousels.find({ _id: roomId }, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
