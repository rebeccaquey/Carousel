/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Photo from './Photo.jsx';

const PhotoFrame = styled.ul`
  height: 200px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

// console.log('hello PhotoList');
const PhotoList = ({ collections }) => {
  console.log('collections: ', collections);
  return (
    <PhotoFrame>
      {
        collections.map((collection) => (
          <Photo url={collection} />
        ))
      }
    </PhotoFrame>
  );
};

export default PhotoList;
