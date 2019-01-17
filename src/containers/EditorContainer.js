import React, { Component } from 'react';
import Color from '../components/Color'
import Pattern from '../components/Pattern'
import Texture from '../components/Texture'

class EditorContainer extends Component {

  render() {
    return (
      <div>
      <div class="editor-container">
      <Color
        shirtColor={this.props.shirtColor}
        changeColor={this.props.changeColor}
       />
      </div>
    </div>
    );
  }

}

export default EditorContainer;
