/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import CarouselList from './CarouselList.jsx';

const Container = styled.div`
  padding: 48px 0;
  background-color: #f7f7f7;
  font-family: 'Montserrat', sans-serif;
  color: rgb(34, 34, 34);
`;

const Header = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0 24px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-weight: 600;
  float: left;
`;

const Pagination = styled.span`
  float: right;
  position: relative;
  top: 23px;
  font-size: 14px;
`;

const Pages = styled.span`
  margin: 0 16px 0 0;
`;

const Arrows = styled.span`
  .btn {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 0 16px 0 0;
    font-size: 26px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ccc;
    border-radius: 50%;
    box-shadow: 0px 3px 7px 0px #bbb;
    background-color: white;
  };
  .btn.next {
    margin: 0 8px 0 0;
  };
  .btn:hover {
    cursor: pointer;
    box-shadow: 0 3px 7px 3px #bbb;
  };
`;

class CarouselApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousels: [],
    };
    this.getCarousels = this.getCarousels.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  componentDidMount() {
    this.getCarousels();
  }

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

  getPrev() {
    console.log('prev click!');
  }

  getNext() {
    console.log('next click!');
  }

  render() {
    $('.prev').on('click', this.getPrev);
    $('.next').on('click', this.getNext);

    return (
      <Container>
        <Header>
          <Title> More places to stay </Title>
          <Pagination>
            <Pages> 1 / 4 </Pages>
            <Arrows>
              <span className="btn prev"> &lt; </span>
              <span className="btn next"> &gt; </span>
            </Arrows>
          </Pagination>
        </Header>
        <CarouselList carousels={this.state.carousels} />
      </Container>
    );
  }
}

export default CarouselApp;
