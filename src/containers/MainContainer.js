import React, { Component } from 'react';
import Canvas from '../components/Canvas'
import ShirtTypeContainer from './ShirtTypeContainer'
import EditorContainer from './EditorContainer'
import GalleryContainer from './GalleryContainer'

class MainContainer extends Component {

  state= {
    shirtColor: 'none'
  }

  render() {
    return (
      <div>
        <Canvas />
        <EditorContainer shirtColor={this.state.shirtColor}/>
      </div>
    );
  }

}

export default MainContainer;
