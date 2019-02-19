import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div>
        <h1>About Us!</h1>
        <div className="aboutus-wrapper">
          <div>
            <h3>Connor Callahan</h3>
            <img className='profile-pic' src='https://media.licdn.com/dms/image/C4D03AQE1fZn08yTbxw/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=r0lH5_acQIZ2YarJP4Xuh88i26Oznsg5Cllm02bg914' />
            <br />
            <br />
            <p>
            Art Director with a demonstrated history of working in the executive office industry.
            Skilled in Marketing Management, Sales, Retail, Creative Concept Design, and Art Direction.
            Strong arts and design professional with a Bachelor of Arts (B.A.) focused in English/Language
            Arts Teacher Education from Montana State University-Bozeman.
            </p>
          </div>

          <div>
            <h3>Ji Shin</h3>
            <img className='profile-pic' src={require('./me.jpg')} />
            <br />
            <br />
            <p>
            Financial analyst-turned-developer with a passion for converting concepts and ideas into reality and innovation.
            Bachelor of Science (B.S.) focused in Finance & Accounting (double major) from Syracuse University.
            </p>
          </div>

        </div>
      </div>
    );
  }

}

export default About;
