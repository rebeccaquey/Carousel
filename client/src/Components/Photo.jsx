/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';

const PhotoSlide = styled.li`
  position: absolute;
  width: 265px;

  img {
    width: 100%;
    height: 200px;
  }
`;

const Photo = ({ url }) => (
  <PhotoSlide>
    <img src={url} alt="images of room" />
  </PhotoSlide>
);

export default Photo;
