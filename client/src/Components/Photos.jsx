/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const PhotoFrame = styled.div`
  height: 180px;
  width: 100%;
  margin: 0;
  padding: 0;
  img {
    width: 265px;
    height: 180px;
  }
`;

const Arrows = styled.span`
  position: relative;
  bottom: 184px;
  display: inline-block;
  width: 265px;
  height: 180px;

  .btn {
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 25px;
    height: 25px;
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: #ffffff5e;
    color: #777;
  };
  .btn.next {
    right: 0;
  };
  .btn:hover {
    cursor: pointer;
    background-color: #ffffff00;
    color: #000;
  };
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: this.props.collections,
    };
    this.getPrev = this.getPrev.bind(this);
    this.getNext = this.getNext.bind(this);
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
      <PhotoFrame>
        <img src={this.state.urls[0]} alt="images of room" />

        {/* TODO: Arrows are not working */}
        <Arrows>
          <span className="btn prev"> &lt; </span>
          <span className="btn next"> &gt; </span>
        </Arrows>
      </PhotoFrame>
    );
  }
}

export default Photos;
