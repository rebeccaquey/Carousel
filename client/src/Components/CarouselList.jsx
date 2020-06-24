/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const Frame = styled.div`
  max-width: 1120px;
  padding: 0;
  margin: 0 auto;
  height: 260px;
  overflow: hidden;

  ul {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
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

class CarouselList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      right: 0,
    };

    this.getPrev = this.getPrev.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  getPrev(e) {
    let { pageIndex, right } = this.state;
    if (pageIndex <= 1) {
      e.preventDefault();
    } else {
      pageIndex -= 1;
      right -= 1140;
    }
    this.setState({
      pageIndex,
      right,
    });
  }

  getNext(e) {
    let { pageIndex, right } = this.state;
    if (pageIndex >= 4) {
      e.preventDefault();
    } else {
      pageIndex += 1;
      right += 1140;
    }
    this.setState({
      pageIndex,
      right,
    });
  }

  render() {
    const { pageIndex } = this.state;

    return (
      <div>
        <Header>
          <Title> More places to stay </Title>
          <Pagination>
            <Pages>
              {pageIndex}
              {' '}
              / 4
            </Pages>
            <Arrows>
              <span className="btn prev" onClick={this.getPrev}> &lt; </span>
              <span className="btn next" onClick={this.getNext}> &gt; </span>
            </Arrows>
          </Pagination>
        </Header>
        <Frame>
          <ul style={{ right: this.state.right }}>
            {
              this.props.carousels.map((carousel) => (
                <Carousel info={carousel} />
              ))
            }
          </ul>
        </Frame>
      </div>
    );
  }
}

export default CarouselList;
