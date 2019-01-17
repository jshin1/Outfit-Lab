import React, { Component } from 'react';
import { Label } from 'react-bootstrap';


class GalleryContainer extends Component {

  render() {
    return (
      <div>
        <div className="gallery-container">
          <h3>
            <Label>My Gallery:</Label>
          </h3>
          <div className="shirt">Design 1</div>
          <div className="shirt">Design 2</div>
          <div className="shirt">Design 3</div>
        </div>
      </div>
    );
  }

}

export default GalleryContainer;
