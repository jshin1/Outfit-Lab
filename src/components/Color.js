import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';

class Color extends Component {

  state = {
    color: 'black'
  }

  onSwatchChange = (color) => {
    console.log(color.hex)
  }

  render() {
    return (
      <SwatchesPicker className='color-picker'
        color={this.state.color} onChange={this.onSwatchChange}
      />
    );
  }

}

export default Color;
