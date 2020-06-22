/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';

// console.log('hello photo');
const Photo = ({ url }) => (
  <li>
    <span> test: individual photo </span>
    <img src={url} alt="testing" width="100" />
  </li>
);

export default Photo;
