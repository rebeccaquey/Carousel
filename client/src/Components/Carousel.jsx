/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import PhotoList from './PhotoList.jsx';

const CurrentRoomPhoto = styled.li`
  outline: 2px solid lime;
  width: 265px;
  height: 260px;
  padding: 0;
`;

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
      <CurrentRoomPhoto>
        <PhotoList collections={this.props.info.photos} />
        <div>
          <span> SUPERHOST </span>
          <span> Private room , 1 bed </span>
          <span> 4.64 (106) </span>
        </div>
        <div> Luxury, 2B2B Apt in the hear of ... </div>
        <div>
          <bold> $107 </bold>
          &#47; night
        </div>
      </CurrentRoomPhoto>
    );
  }
}

export default Carousel;
