/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const PhotoFrame = styled.div`
  height: 180px;
  width: 100%;
  margin: 0;
  padding: 0;

  img {
    width: 265px;
    height: 180px;
    border-radius: 5px;
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
    transform: translateY(-50%);
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
  .btn.nextPhoto {
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
      photoIndex: 0,
    };
    this.getPrev = this.getPrev.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  getPrev(e) {
    let { photoIndex } = this.state;

    if (photoIndex <= 0) {
      e.preventDefault();
    } else {
      photoIndex -= 1;
    }

    this.setState({
      photoIndex,
    });
  }

  getNext(e) {
    const { urls } = this.state;
    let { photoIndex } = this.state;

    if (photoIndex >= urls.length - 1) {
      e.preventDefault();
    } else {
      photoIndex += 1;
    }

    this.setState({
      photoIndex,
    });
  }

  render() {
    let buttons;
    const { photoIndex, urls } = this.state;

    if (photoIndex === 0) {
      buttons = <span className="btn nextPhoto" onClick={this.getNext}> &gt; </span>;
    } else if (photoIndex === urls.length - 1) {
      buttons = <span className="btn prevPhoto" onClick={this.getPrev}> &lt; </span>;
    } else {
      buttons = (
        <div>
          <span className="btn prevPhoto" onClick={this.getPrev}> &lt; </span>
          <span className="btn nextPhoto" onClick={this.getNext}> &gt; </span>
        </div>
      );
    }

    return (
      <PhotoFrame>
        <img src={urls[photoIndex]} alt="images of room" />
        <Arrows>
          {buttons}
        </Arrows>
      </PhotoFrame>
    );
  }
}

export default Photos;
