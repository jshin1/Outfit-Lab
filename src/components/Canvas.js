import React, { Component } from 'react';

class Canvas extends Component {

  render() {
    return (
      <div className="canvas-container" onClick={this.props.handleTargetClick}>
      {
        <div>
        <svg className="shirtColor" fill={this.props.shirtColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.13 380.91">
        <path className="shirtColor" d="M129.26,3.53s-36.6,14.29-60.34,22S38.2,49.93,34,60.41,1.89,142.1,1.89,142.1s44,22.34,66,22.34c6.63-9.07,7.33-17.45,7.33-17.45l.7-14s-.7,123.59-.7,136.16-2.8,89.37-1.4,91.46,155,12.57,208.07,0c4.19-5.58,0-21.64,0-21.64L276.3,224.49s-4.19-88.67-4.19-85.18,6.28,29.32,15.36,26.53,60.74-26.53,61.44-30.72S318.19,78.56,314,69.48,296.55,29.69,277,24.1,216.17,1.59,216.17,1.59,180.23,11.91,129.26,3.53Z"/>
        <path className="shirtColor" d="M129.26,3.53S131.7,27.91,172.68,27,218.26,5.44,216.17,1.59"/>
        <path className="shirtColor" d="M171.23,27.42c41-.9,45.57-21.56,43.49-25.41,0,0-34.36,11-85.33,2.64C129.39,4.65,130.25,28.33,171.23,27.42Z"/>
        <path className="pocketColor" fill={this.props.pocketColor} d="M188.1,92h44.27v36l-10.94,8.45a18.32,18.32,0,0,1-22.39,0L188.1,128Z"/>
        <path className="ringerColor" fill={this.props.ringerColor} d="M279.69,161.34s59.24-23.89,67.22-31.8a9.53,9.53,0,0,1,1.12,6.74s-47.61,24.8-60.56,29.56C284.75,165.84,281,163.54,279.69,161.34Z"/>
        <path className="ringerColor" fill={this.props.ringerColor} d="M122.91,7.62s-2.55,28,45.34,27.42S220.08,18.83,225.62,5.4l-6.78-2.73-3.71,3.46s.45,19.91-43.9,21.29S132.76,6.58,129.39,4.65,122.91,7.62,122.91,7.62Z"/>
        <path className="ringerColor" fill={this.props.ringerColor} d="M4.91,133.9s38.42,18.18,65.22,25.62c-2.17,6-2.25,4.92-2.25,4.92S44.35,158.73,41.72,158,5.11,143,3.46,141.38,4.91,133.9,4.91,133.9Z"/>
        </svg>
        </div>
      }
      </div>
    );
  }

}

export default Canvas;
