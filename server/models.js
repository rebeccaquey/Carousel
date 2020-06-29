const Carousels = require('../database/Carousel.js');

const getCarousels = (callback) => {
  Carousels.find(callback).sort({ _id: -1 }).limit(20);
};

const getSpecificCarousel = (roomId, callback) => {
  Carousels.find({ _id: roomId }, callback).sort({ _id: -1 });
};

module.exports = {
  getCarousels,
  getSpecificCarousel,
};
