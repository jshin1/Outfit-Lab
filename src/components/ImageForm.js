import React, { Component } from 'react';

class ImageForm extends Component {

  render() {
    return (
      <div>
        <select onChange={this.props.handleImgSize}>
          <option value="small">Small logo</option>
          <option value="big">Big graphic</option>
        </select>
        <form>
          <label>
            Please enter image URL (PNG): <br />
            <input onChange={this.props.handleChange} type="text" name="image" />
          </label>
        </form>
      </div>
    );
  }

}

export default ImageForm;
