/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import Photo from './Photo.jsx';

// console.log('hello PhotoList');
const PhotoList = ({ collections }) => {
  console.log('collections: ', collections);
  return (
    <ul>
      {
        collections.map((collection) => (
          <Photo url={collection} />
        ))
      }
    </ul>
  );
};

export default PhotoList;
