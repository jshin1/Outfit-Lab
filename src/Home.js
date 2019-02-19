import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Home extends Component {

  render() {
    return (
      <div>
      <Carousel>
        <Carousel.Item>
        <img className="logo" src={ require("./outfitlabs_logo.png")} />
          <img className="bg-image" src={ require("./slider_1.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="logo" src={ require("./outfitlabs_logo.png")} />
          <img className="bg-image" src={ require("./slider_2.jpg") } />
        </Carousel.Item>
        <Carousel.Item>
        <img className="logo" src={ require("./outfitlabs_logo.png")} />
          <img className="bg-image" src={ require("./slider_3.jpg") } />
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

}

export default Home;
