/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const express = require('express');
// const bodyParser = require('body-parser');
const Carousels = require('../database/Carousel.js');

const app = express();
const port = 3007;

// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('client/dist'));

app.get('/api/rooms/carousels', (req, res) => {
  Carousels.find((err, data) => {
    if (err) {
      res.status(400).send(err);
      return;
    } else {
      res.status(200).send(data);
      return;
    }
  }).sort({ _id: -1 }).limit(20);
  /* TODO: make it randomly picked */
});

app.get('/api/rooms/:roomId/carousels', (req, res) => {
  const roomId = req.params.roomId || '';
  // console.log('req.params.roomId : ', roomId);
  Carousels.find({ _id: roomId }, (err, data) => {
    if (err) {
      res.status(400).send(err);
      return;
    } else {
      res.status(200).send(data);
      return;
    }
  }).sort({ _id: -1 });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));