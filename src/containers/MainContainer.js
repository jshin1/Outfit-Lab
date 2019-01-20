import React, { Component } from 'react';
import Canvas from '../components/Canvas'
import ShirtTypeContainer from './ShirtTypeContainer'
import EditorContainer from './EditorContainer'
import GalleryContainer from './GalleryContainer'

import TshirtCanvas from '../components/TshirtCanvas'
import HoodieCanvas from '../components/HoodieCanvas'


class MainContainer extends Component {

  state = {
    shirtColor: 'lightgrey',
    pocketColor: 'blue',
    ringerColor: 'orange',
    target: '',
    shirtType: 'tshirt',
    features: [],
    designs: []
  }

  showClothing = () => {
    if (this.state.shirtType === 'hoodie') {
      return (
        <HoodieCanvas shirtType={this.state.shirtType}
              target={this.state.target}
              shirtColor={this.state.shirtColor}
              pocketColor={this.state.pocketColor}
              ringerColor={this.state.ringerColor}
              handleTargetClick={this.handleTargetClick}

              features={this.state.features}
              showFeatures={this.showFeatures}
            />
        )
    } else if (this.state.shirtType === 'tshirt') {
      return (
        <TshirtCanvas shirtType={this.state.shirtType}
                target={this.state.target}
                shirtColor={this.state.shirtColor}
                pocketColor={this.state.pocketColor}
                ringerColor={this.state.ringerColor}
                handleTargetClick={this.handleTargetClick}

                features={this.state.features}
                showFeatures={this.showFeatures}
                />
      )
    }
  }

  showFeatures = () => {
    console.log('HIIIII');
    if (this.state.features.includes('pocket')) {
      return <path className="pocketColor" fill={this.state.pocketColor} d="M188.1,92h44.27v36l-10.94,8.45a18.32,18.32,0,0,1-22.39,0L188.1,128Z"/>
    } else if (this.state.features.includes('ringer')) {
      return (
        <svg className="shirtColor" fill={this.state.shirtColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.13 380.91">
          <path className="ringerColor" fill={this.state.ringerColor} d="M279.69,161.34s59.24-23.89,67.22-31.8a9.53,9.53,0,0,1,1.12,6.74s-47.61,24.8-60.56,29.56C284.75,165.84,281,163.54,279.69,161.34Z"/>
          <path className="ringerColor" fill={this.state.ringerColor} d="M122.91,7.62s-2.55,28,45.34,27.42S220.08,18.83,225.62,5.4l-6.78-2.73-3.71,3.46s.45,19.91-43.9,21.29S132.76,6.58,129.39,4.65,122.91,7.62,122.91,7.62Z"/>
          <path className="ringerColor" fill={this.state.ringerColor} d="M4.91,133.9s38.42,18.18,65.22,25.62c-2.17,6-2.25,4.92-2.25,4.92S44.35,158.73,41.72,158,5.11,143,3.46,141.38,4.91,133.9,4.91,133.9Z"/>
        </svg>
    )
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
    this.setState({
      shirtType: type,
      features: []
    })
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/designs')
  //   .then(r => r.json())
  //   .then(data => {
  //     this.setState({
  //       designs: data
  //     })
  //   })
  // }

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

                            {this.showClothing()}

          <GalleryContainer designs={this.state.designs}/>
>>>>>>> 6bba24c6bce7c72889750e53b544ecb9ed8a13ac
          </div>
          <EditorContainer changeColor={this.changeColor} handleSaveDesign={this.handleSaveDesign} />
      </div>
    )
  }

}

export default MainContainer;
