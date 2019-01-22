import React, { Component } from 'react';
import '../App.css';
import { BaseTee } from '../BaseTee.png'

class ShirtTypeContainer extends Component {

  render() {
    return (
      <div>
      <label className="label">Shirt Type</label>
         <div className='shirtType'>
           <div className='shirt-type'
             onClick={() => this.props.chooseShirtType('tshirt')}>
            <img src={ require('../basic_template.png') } width="75" />
           </div>

           <div className='shirt-type'
             onClick={() => this.props.chooseShirtType('hoodie')}>
            <img src={ require('../hoodie_template.png') } width="75" />
           </div>
           
           <div className='shirt-type'
             onClick={() => this.props.chooseShirtType('baseball')}>
            <img src={ require('../baseball_template.png') } width="75" />
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
