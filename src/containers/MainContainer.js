import React, { Component } from 'react';
import Canvas from '../components/Canvas'
import ShirtTypeContainer from './ShirtTypeContainer'
import EditorContainer from './EditorContainer'
import GalleryContainer from './GalleryContainer'


class MainContainer extends Component {

  state= {
    shirtColor: 'lightgrey'
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
          <EditorContainer changeColor={this.changeColor} />
      </div>
    );
  }

}

export default MainContainer;
