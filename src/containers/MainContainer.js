import React, { Component } from 'react';
import Canvas from '../components/Canvas'
import ShirtTypeContainer from './ShirtTypeContainer'
import EditorContainer from './EditorContainer'
import GalleryContainer from './GalleryContainer'

import TshirtCanvas from '../components/TshirtCanvas'


class MainContainer extends Component {

  state = {
    shirtColor: 'lightgrey',
    pocketColor: 'blue',
    ringerColor: 'orange',
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
    console.log(e.target, this.state.shirtColor, this.state.pocketColor, this.state.ringerColor)
    fetch('http://localhost:3000/api/v1/designs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        shirtType: "Base",
        shirtColor: this.state.shirtColor,
        pocketColor: this.state.pocketColor,
        user_id: 1
      })
      // .then(r => r.json())
      // .then(data => {
      //   this.setState({
      //     designs: [...this.state.designs, data]
      //   })
      // })
    })
  }

  handleDeleteDesign = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <div className="wrapper-1">
<<<<<<< HEAD
          <ShirtTypeContainer />
          <Canvas target={this.state.target} shirtColor={this.state.shirtColor} pocketColor={this.state.pocketColor} ringerColor={this.state.ringerColor} handleTargetClick={this.handleTargetClick}/>
          <GalleryContainer designs={this.state.designs} handleDeleteDesign={this.handleDeleteDesign}/>
=======

          <ShirtTypeContainer chooseShirtType={this.chooseShirtType}
                              chooseFeatures={this.chooseFeatures}/>

          <TshirtCanvas shirtType={this.state.shirtType}
                  target={this.state.target}
                  shirtColor={this.state.shirtColor}
                  pocketColor={this.state.pocketColor}
                  ringerColor={this.state.ringerColor}
                  handleTargetClick={this.handleTargetClick}

                  features={this.state.features}
                  showFeatures={this.showFeatures}
                  />

          <GalleryContainer designs={this.state.designs}/>
>>>>>>> 6bba24c6bce7c72889750e53b544ecb9ed8a13ac
          </div>
          <EditorContainer changeColor={this.changeColor} handleSaveDesign={this.handleSaveDesign} />
      </div>
    );
  }

}

export default MainContainer;
