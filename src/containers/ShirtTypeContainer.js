import React, { Component } from 'react';
import '../App.css';


class ShirtTypeContainer extends Component {

  render() {
    return (
      <div>
          <h3>
            <label className="label">Shirt Types:</label>
          </h3>
          <div onChange={(event) => this.props.chooseShirtType(event)}>
            <div className='tshirt'
                 onClick={() => this.props.chooseShirtType('tshirt')}>
              {'T-Shirt'} <br />
              <img src={ require('../basic_template.png') } width="75" />
            </div>

            <div className='hoodie'
                 onClick={() => this.props.chooseShirtType('hoodie')}>
              {'Hoodie'} <br />
            <img src={ require('../hoodie_template.png') } width="75" />
            </div>
          </div>

          <h3>
            <label className="label">Features:</label>
          </h3>

          {this.props.chooseFeatures()}
      </div>
    );
  }

}

export default ShirtTypeContainer;
