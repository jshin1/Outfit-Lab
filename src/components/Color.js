import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';

class Color extends Component {

  onSwatchChange = (color) => {
    console.log(color)
  }

  render() {
    return (
      <SwatchesPicker className='color-picker'
         onChange={this.props.changeColor}
      />
    );
  }

}

export default Color;
