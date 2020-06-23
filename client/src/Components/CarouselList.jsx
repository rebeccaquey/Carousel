/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const Frame = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  max-width: 1120px;
  padding: 0;
  margin: 0 auto;
  height: 260px;
  list-style: none;
  background-color: pink;
`;

const CarouselList = ({ carousels }) => (
  <Frame>
    {
      carousels.map((carousel) => (
        <Carousel info={carousel} />
      ))
    }
  </Frame>
);

export default CarouselList;
