import React, { Component } from 'react';
import Canvas from '../components/Canvas'
import ShirtTypeContainer from './ShirtTypeContainer'
import EditorContainer from './EditorContainer'
import GalleryContainer from './GalleryContainer'
import { Button } from 'react-bootstrap';


class MainContainer extends Component {

  state= {
    shirtColor: 'none'
  }

  changeColor = (color) => {
    console.log(color);
    this.setState({
      shirtColor: color.hex
    })
  }

  render() {
    return (
      <div>
        <div className="wrapper-1">
          <ShirtTypeContainer />
          <Canvas shirtColor={this.state.shirtColor}/>
          <GalleryContainer />
        </div>
        <div className="wrapper-2">
          <EditorContainer changeColor={this.changeColor} />
          <Button bsStyle="success">Save to your gallery, playa!</Button>
        </div>
      </div>
    );
  }

}

export default MainContainer;
