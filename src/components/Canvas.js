import React, { Component } from 'react';

import { Label } from 'react-bootstrap';


class Canvas extends Component {

  render() {
    return (
      <div class="canvas-container">
      {
        <div>
        <svg class="shirt-1" fill={this.props.shirtColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.13 380.91"><defs>></defs>
        <polyline class="cls-1" points="302.41 5.1 458.14 68.7 415.97 136.09 341.25 101.9 341.02 380.91 184.11 380.91 277.01 380.91 120.1 380.91 119.88 100.88 45.15 136.09 2.98 68.7 169.03 4.32"/><path class="cls-1" d="M302.41,5.1c7.63,22.52-13.25,33.18-72.3,33.18S158.72,25.76,169,4.32c1.78-3.69,12.9,4.55,59.56,4.55S299.45-3.63,302.41,5.1Z"/></svg>
        </div>
      }
      </div>
    );
  }

}

export default Canvas;
