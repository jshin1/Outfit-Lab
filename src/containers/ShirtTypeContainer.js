import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import '../App.css';


class ShirtTypeContainer extends Component {

  render() {
    return (
      <div>
        <div className="shirt-type-container">
          <h3>
            <Label>Shirt Types:</Label>
          </h3>
          <div className="shirt">t-shirt</div>
          <div className="shirt">3/4 sleeve</div>
          <div className="shirt">long-sleeve</div>
          <div className="shirt">hoodie</div>
        </div>
      </div>
    );
  }

}

export default ShirtTypeContainer;
