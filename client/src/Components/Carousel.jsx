/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import PhotoList from './PhotoList.jsx';

// console.log('hello Carousel');
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  render() {
    console.log(this.props.info);
    return (
      <li>
        <span>test: individual room</span>
        <PhotoList collections={this.props.info.photos} />
      </li>
    );
  }
}

export default Carousel;
