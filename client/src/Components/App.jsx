/* eslint-disable no-console */
/* eslint-disable import/extensions */
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousels: [],
    };
    this.getCarousels = this.getCarousels.bind(this);
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

  render() {
    const { carousels } = this.state;
    return (
      <Container>
        <CarouselList carousels={carousels} />
      </Container>
    );
  }
}

export default App;
