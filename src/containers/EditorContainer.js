import React, { Component } from 'react';
import Color from '../components/Color'
import Pattern from '../components/Pattern'
import Texture from '../components/Texture'

class EditorContainer extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        <div className='editor-options'>
          <div>Colors</div>
          <div>Textures</div>
          <div>Patterns</div>
        </div>
=======
      <div class="editor-container">
      <Color shirtColor={this.props.shirtColor} />
>>>>>>> Connor
      </div>
    );
  }

}

export default EditorContainer;
