/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Photos from './Photos.jsx';

const CurrentRoomPhoto = styled.li`
  width: 265px;
  height: 260px;
  padding: 0;
  margin-right: 20px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  font-size: 12px;
  padding-top: 10px;

  .superHost {
    position: relative;
    bottom: 2px;
    width: 85px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    border: 1px solid black;
    border-radius: 4px;
    padding: 1px;
  }

  .description{
    color: rgb(113, 113, 113);
  }

  .rating img {
    position: relative;
    top: 2px;
    width: 13px;
    padding: 0;
    margin: 0 2px 0 0;
  }

  .rating span {
    color: rgb(113, 113, 113);
  }
`;

const Title = styled.div`
  font-size: 14px;
  margin: 4px 0;
`;

const Price = styled.div`
  font-size: 12px;
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
    return (
      <CurrentRoomPhoto>
        <Photos collections={this.props.info.photos} />
        <Header>
          <span className="superHost"> superhost </span>
          <span className="description"> Private room ... </span>
          <span className="rating">
            <img src="./ratingStar.png" alt="rating" />
            4.64
            <span> (106) </span>
          </span>
        </Header>
        <Title> Luxury, 2B2B Apt in the hear of ... </Title>
        <Price>
          <b> $107 </b>
          &#47; night
        </Price>
      </CurrentRoomPhoto>
    );
  }
}

export default Carousel;
