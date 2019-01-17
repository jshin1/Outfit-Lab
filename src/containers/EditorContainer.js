import React, { Component } from 'react';
import Color from '../components/Color'
import Pattern from '../components/Pattern'
import Texture from '../components/Texture'

class EditorContainer extends Component {

  render() {
    return (
      <div class="editor-container">
      <Color shirtColor={this.props.shirtColor} />
      </div>
    );
  }

}

export default EditorContainer;
