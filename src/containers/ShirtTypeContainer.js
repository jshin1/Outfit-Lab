import React, { Component } from 'react';
import '../App.css';


class ShirtTypeContainer extends Component {

  render() {
    return (
      <div>
          <h3>
            <label className="label">Shirt Types:</label>
          </h3>
          <div className="shirt-type">t-shirt</div>
          <div className="shirt-type">3/4 sleeve</div>
          <div className="shirt-type">long-sleeve</div>
          <div className="shirt-type">hoodie</div>
      </div>
    );
  }

}

export default ShirtTypeContainer;
