const Carousels = require('../database/Carousel.js');

const getCarousels = (callback) => {
  Carousels.find(callback).sort({ _id: -1 }).limit(20);
  /* TODO: make it randomly picked */
};

module.exports = {
  getCarousels,
};
