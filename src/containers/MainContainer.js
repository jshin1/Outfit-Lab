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
    target: '',
    shirtType: 'tshirt',
    features: []
  }

  showFeatures = () => {
    console.log('HIIIII');
    if (this.state.features.includes('pocket')) {
      return <path className="pocketColor" fill={this.state.pocketColor} d="M188.1,92h44.27v36l-10.94,8.45a18.32,18.32,0,0,1-22.39,0L188.1,128Z"/>
    }
  }

  setFeatures = (event) => {
    if (event.target.checked && !this.state.features.includes(event.target.value)) {
      this.setState({
        features: [...this.state.features, event.target.value]
      })
    } else if (!event.target.checked) {
      let copy = this.state.features.filter(feature => feature !== event.target.value)
      this.setState({
        features: copy
      })
    }
  }

  chooseFeatures = () => {
    if (this.state.shirtType === 'tshirt') {
      return (
        <form onChange={(event) => this.setFeatures(event)}>
          <input type='checkbox' value='pocket'/> {'Pocket '}  <br />
          <input type='checkbox' value='ringer'/> {'Ringer '}  <br />
          <input type='checkbox' value='buttons'/> {'Buttons '}
        </form>
      )
    } else if (this.state.shirtType === '34sleeve') {
      return (
        <form onChange={(event) => this.setFeatures(event)}>
          <input type='checkbox' value='ringer'/> {'Ringer '}  <br />
        </form>
      )
    } else if (this.state.shirtType === 'hoodie') {
      return (
        <form onChange={(event) => this.setFeatures(event)}>
          <input type='checkbox' value='pouch'/> {'Pouch '}  <br />
          <input type='checkbox'value='badge'/> {'Badge '}
        </form>
      )
    }
  }

  chooseShirtType = (type) => {
    console.log(type);
    this.setState({
      shirtType: type,
      features: []
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

  render() {
    return (
      <div>
        <div className="wrapper-1">
          <ShirtTypeContainer chooseShirtType={this.chooseShirtType}
                              chooseFeatures={this.chooseFeatures}/>

          <TshirtCanvas shirtType={this.state.shirtType}
                  target={this.state.target}
                  shirtColor={this.state.shirtColor}
                  pocketColor={this.state.pocketColor}
                  handleTargetClick={this.handleTargetClick}

                  features={this.state.features}
                  showFeatures={this.showFeatures}
                  />

          <GalleryContainer />
          </div>
          <EditorContainer changeColor={this.changeColor} />
      </div>
    );
  }

}

export default MainContainer;
