/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import $ from 'jquery';
import CarouselList from './CarouselList.jsx';

// console.log('hello CarouselApp');
class CarouselApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousels: [],
    };
    // this.getRandomNumber = this.getRandomNumber.bind(this);
    // this.getNumOfCarousels = this.getNumOfCarousels.bind(this);
    this.getCarousels = this.getCarousels.bind(this);
  }

  componentDidMount() {
    this.getCarousels();
  }

  // getRandomNumber() {
  //   const max = 20;
  //   const min = 12;
  //   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //   return randomNumber;
  // }

  // getNumOfCarousels() {
  //   const results = [];
  //   const randomNum = this.getRandomNumber();

  //   for (let i = 0; i < randomNum; i += 1) {
  //     results.push(this.state.carousels[i]);
  //   }
  //   console.log('results: ', results);
  //   return results;
  // }

  getCarousels() {
    $.ajax({
      method: 'GET',
      url: '/api/rooms/carousels',
      success: (carousels) => {
        this.setState({
          carousels,
        });
      },
      error: (err) => {
        console.log('error: ', err);
      },
    });
  }

  render() {
    // const carousels = this.getNumOfCarousels();

    return (
      <div>
        <CarouselList carousels={this.state.carousels} />
      </div>
    );
  }
}

export default CarouselApp;
