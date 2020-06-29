const model = require('./models.js');

const getCarousels = (req, res) => {
  model.getCarousels((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const getSpecificCarousel = (req, res) => {
  const roomId = req.params.roomId || '';
  model.getCarousels(roomId, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getCarousels,
  getSpecificCarousel,
};
