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
<<<<<<< HEAD
        <div className="wrapper-1">
          <ShirtTypeContainer />
          <Canvas />
          <GalleryContainer />
        </div>
        <div className="wrapper-2">
          <EditorContainer />
          <Button bsStyle="success">Save to your gallery, playa!</Button>
        </div>
=======
        <Canvas />
        <EditorContainer shirtColor={this.state.shirtColor}/>
>>>>>>> Connor
      </div>
    );
  }

}

export default MainContainer;
