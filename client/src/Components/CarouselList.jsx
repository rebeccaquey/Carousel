/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import Carousel from './Carousel.jsx';

// console.log('hello carouselList');
const CarouselList = ({ carousels }) => (
  <ul>
    {
      carousels.map((carousel) => (
        <Carousel info={carousel} />
      ))
    }
  </ul>
);

export default CarouselList;
