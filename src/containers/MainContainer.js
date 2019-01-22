import React, { Component } from 'react';
import Canvas from '../components/Canvas'
import ShirtTypeContainer from './ShirtTypeContainer'
import EditorContainer from './EditorContainer'
import GalleryContainer from './GalleryContainer'
import DragResizeContainer from 'react-drag-resize';

import HoodieCanvas from '../components/HoodieCanvas'
import TshirtCanvas from '../components/TshirtCanvas'
import BaseBallCanvas from '../components/BaseBallCanvas'



class MainContainer extends Component {

  state = {
    shirtColor: 'transparent',
    pocketColor: 'transparent',
    ringerColor: 'transparent',
    shirtType: 'tshirt',
    target: '',
    features: [],
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

  chooseShirtType = (type) => {
    this.setState({
      shirtType: type,
      features: []
    })
  }

  handleTargetClick = (e) => {
    console.log(e.target.className.baseVal)
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
    fetch('http://localhost:3000/api/v1/designs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        shirtType: this.state.shirtType,
        shirtColor: this.state.shirtColor,
        pocketColor: this.state.pocketColor,
        ringerColor: this.state.ringerColor,
        user_id: 1
      })
    })
      .then(r => r.json())
      .then(data => {
        this.setState({
          designs: [...this.state.designs, data]
        })
      })
  }

  handleDeleteDesign = (e) => {
    console.log(e.target.value)
  }

  // All features for base Tee Shirt

showPocket = () => {
  if (this.state.features.includes('pocket')) {
    return <path className="pocketColor" fill={this.state.pocketColor} d="M188.1,92h44.27v36l-10.94,8.45a18.32,18.32,0,0,1-22.39,0L188.1,128Z"/>
  }
}

showRinger = () => {
  if (this.state.features.includes('ringer')) {
    return (
      <svg className="shirtColor" fill={this.state.shirtColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.13 380.91">
        <path className="ringerColor" fill={this.state.ringerColor} d="M279.69,161.34s59.24-23.89,67.22-31.8a9.53,9.53,0,0,1,1.12,6.74s-47.61,24.8-60.56,29.56C284.75,165.84,281,163.54,279.69,161.34Z"/>
        <path className="ringerColor" fill={this.state.ringerColor} d="M122.91,7.62s-2.55,28,45.34,27.42S220.08,18.83,225.62,5.4l-6.78-2.73-3.71,3.46s.45,19.91-43.9,21.29S132.76,6.58,129.39,4.65,122.91,7.62,122.91,7.62Z"/>
        <path className="ringerColor" fill={this.state.ringerColor} d="M4.91,133.9s38.42,18.18,65.22,25.62c-2.17,6-2.25,4.92-2.25,4.92S44.35,158.73,41.72,158,5.11,143,3.46,141.38,4.91,133.9,4.91,133.9Z"/>
      </svg>
    )
  }
}

 showButtons = () => {
   if (this.state.features.includes('buttons')) {
     return (
       <svg className="shirtButtons" xmlns="http://www.w3.org/2000/svg" fill='black' viewBox="0 0 458.13 380.91">
       <circle class="outer-circle" cx="169.11" cy="44.13" r="4.35"/>
       <circle class="inner-circle" cx="170.2" cy="56.94" r="0.29"/>
       <circle class="inner-circle" cx="168.06" cy="57.04" r="0.29"/>
       <circle class="inner-circle" cx="170.3" cy="59.07" r="0.29"/>
       <circle class="inner-circle" cx="168.06" cy="59.07" r="0.29"/>
       <circle class="outer-circle" cx="169.12" cy="58" r="4.35"/>
       <circle class="inner-circle" cx="170.2" cy="70.44" r="0.29"/>
       <circle class="inner-circle" cx="168.06" cy="70.54" r="0.29"/>
       <circle class="inner-circle" cx="170.3" cy="72.57" r="0.29"/>
       <circle class="inner-circle" cx="168.06" cy="72.57" r="0.29"/>
       <circle class="outer-circle" cx="169.12" cy="71.5" r="4.35"/>
       <circle class="inner-circle" cx="170.19" cy="43.07" r="0.29"/>
       <circle class="inner-circle" cx="168.04" cy="43.17" r="0.29"/>
       <circle class="inner-circle" cx="170.29" cy="45.2" r="0.29"/>
       <circle class="inner-circle" cx="168.04" cy="45.2" r="0.29"/>
       </svg>
     )
   }
 }

// All features for Hoodie

showPouch = () => {
    if (this.state.features.includes('pouch')) {
      return <path class="pocketColor" fill={this.state.pocketColor} d="M83.39,302.57s2.94,17.54,3.23,20.68C88,337.64,88.1,341,91,343.93c4.65,4.7,11.44,2.12,28.94.61,13.16-1.14,22.71-.84,41.42-.25,17.71.57,19.58,1.78,32.87,1.74a216.72,216.72,0,0,0,33.53-2.73,105.06,105.06,0,0,0,3.52-21.2,101.92,101.92,0,0,0-.62-19.2,109.94,109.94,0,0,0-4-17.67c-8.58-30.19-6.66-35.17-12.41-39.7-4.5-3.54-7.87-2.23-25.88-1.88-25.27.5-64.26-1.19-67-1.31-9.74-.43-12.2-.72-15.62,1.12-7.36,4-9.41,12.55-17.85,43C85.81,294,84.15,299.85,83.39,302.57Z"/>
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
    } else if (this.state.shirtType === 'baseball') {
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


  showClothing = () => {
    if (this.state.shirtType === 'hoodie') {
      return (
        <HoodieCanvas shirtType={this.state.shirtType}
              target={this.state.target}
              shirtColor={this.state.shirtColor}
              pocketColor={this.state.pocketColor}
              handleTargetClick={this.handleTargetClick}

              features={this.state.features}
              showPouch={this.showPouch}
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
                showPocket={this.showPocket}
                showRinger={this.showRinger}
                showButtons={this.showButtons}
                />
      )
    } else if (this.state.shirtType === 'baseball') {
      console.log(this.state.shirtType);
      return (
        <BaseBallCanvas shirtType={this.state.shirtType}
                target={this.state.target}
                shirtColor={this.state.shirtColor}
                pocketColor={this.state.pocketColor}
                ringerColor={this.state.ringerColor}
                handleTargetClick={this.handleTargetClick}

                features={this.state.features}

                />
      )
    }
  }

  render() {
    console.log(this.state.shirtColor)
    return (
      <div>
        <div className="wrapper-1">
          <ShirtTypeContainer chooseShirtType={this.chooseShirtType}
                              chooseRinger={this.chooseRinger}
                              chooseFeatures={this.chooseFeatures}
                              chooseButtons={this.chooseButtons}/>
          {this.showClothing()}
          <GalleryContainer designs={this.state.designs} handleDeleteDesign={this.handleDeleteDesign}/>
          </div>
          <EditorContainer changeColor={this.changeColor} handleSaveDesign={this.handleSaveDesign} />
      </div>
    );
  }

}

export default MainContainer;
