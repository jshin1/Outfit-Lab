import React, { Component } from 'react';
import Color from '../components/Color'
import Pattern from '../components/Pattern'
import Texture from '../components/Texture'
import ImageForm from '../components/ImageForm'

class EditorContainer extends Component {

  render() {
    return (
      <div>
        <br />
      <div className="editor-container">
      <Color
        shirtColor={this.props.shirtColor}
        changeColor={this.props.changeColor}
       />
     <ImageForm
        image1={this.props.image1}
        handleChange={this.props.handleChange}
        handleImgSize={this.props.handleImgSize}
       />
      </div>
      <button onClick={this.props.handleSaveDesign} className="save-button">Save Design+</button>
    </div>
    );
  }

}

export default EditorContainer;
