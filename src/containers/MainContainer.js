import React, { Component } from 'react';
import Canvas from '../components/Canvas'
import ShirtTypeContainer from './ShirtTypeContainer'
import EditorContainer from './EditorContainer'
import GalleryContainer from './GalleryContainer'


class MainContainer extends Component {

  state= {
    shirtColor: 'lightgrey',
    pocketColor: 'blue',
    target: ''
  }

  handleTargetClick = (e) => {
    this.setState({
      target: e.target.className.baseVal
    })
  }

  changeColor = (color) => {
    this.setState({
      [this.state.target]: color.hex
    })
  }

  render() {
    console.log(this.state.target)
    return (
      <div>
        <div className="wrapper-1">
          <ShirtTypeContainer />
          <Canvas target={this.state.target} shirtColor={this.state.shirtColor} pocketColor={this.state.pocketColor} handleTargetClick={this.handleTargetClick}/>
          <GalleryContainer />
          </div>
          <EditorContainer changeColor={this.changeColor} />
      </div>
    );
  }

}

export default MainContainer;
