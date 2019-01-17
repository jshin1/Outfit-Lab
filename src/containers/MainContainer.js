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

  render() {
    return (
      <div>
        <div className="wrapper-1">
          <ShirtTypeContainer />
          <Canvas />
          <GalleryContainer />
        </div>
        <div className="wrapper-2">
          <EditorContainer shirtColor={this.state.shirtColor}/>
          <Button bsStyle="success">Save to your gallery, playa!</Button>
        </div>      
      </div>
    );
  }

}

export default MainContainer;
