import React, { Component } from 'react';
import Canvas from '../components/Canvas'
import ShirtTypeContainer from './ShirtTypeContainer'
import EditorContainer from './EditorContainer'
import GalleryContainer from './GalleryContainer'


class MainContainer extends Component {

  state= {
    shirtColor: 'lightgrey',
    pocketColor: 'blue',
    target: '',
    designs: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/designs')
    .then(r => r.json())
    .then(data => {
      this.setState({
        designs: data
      })
    })
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

  handleSaveDesign = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <div className="wrapper-1">
          <ShirtTypeContainer />
          <Canvas target={this.state.target} shirtColor={this.state.shirtColor} pocketColor={this.state.pocketColor} handleTargetClick={this.handleTargetClick}/>
          <GalleryContainer designs={this.state.designs}/>
          </div>
          <EditorContainer changeColor={this.changeColor} handleSaveDesign={this.handleSaveDesign} />
      </div>
    );
  }

}

export default MainContainer;
