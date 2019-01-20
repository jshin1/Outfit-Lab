import React, { Component } from 'react';
import { Label } from 'react-bootstrap';



class GalleryContainer extends Component {

  render() {
    return (
      <div>
        <div className="gallery-container">
          <h3>
            <Label>My Gallery</Label>
          </h3>
          {
            this.props.designs.map(design => {
              return   <svg className="shirt" fill={design.shirtColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.13 380.91">
                <path className="shirt" d="M129.26,3.53s-36.6,14.29-60.34,22S38.2,49.93,34,60.41,1.89,142.1,1.89,142.1s44,22.34,66,22.34c6.63-9.07,7.33-17.45,7.33-17.45l.7-14s-.7,123.59-.7,136.16-2.8,89.37-1.4,91.46,155,12.57,208.07,0c4.19-5.58,0-21.64,0-21.64L276.3,224.49s-4.19-88.67-4.19-85.18,6.28,29.32,15.36,26.53,60.74-26.53,61.44-30.72S318.19,78.56,314,69.48,296.55,29.69,277,24.1,216.17,1.59,216.17,1.59,180.23,11.91,129.26,3.53Z"/>
                <path className="shirt" d="M129.26,3.53S131.7,27.91,172.68,27,218.26,5.44,216.17,1.59"/>
                <path className="shirt" d="M171.23,27.42c41-.9,45.57-21.56,43.49-25.41,0,0-34.36,11-85.33,2.64C129.39,4.65,130.25,28.33,171.23,27.42Z"/>
                <path className="pocketColor" fill={design.pocketColor} d="M188.1,92h44.27v36l-10.94,8.45a18.32,18.32,0,0,1-22.39,0L188.1,128Z"/>
                </svg>
            })
          }

        </div>
      </div>
    );
  }

}

export default GalleryContainer;
