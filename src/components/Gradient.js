import React, { Component } from 'react'
import './Gradient.css'
import Fade from 'react-reveal/Fade'


class Gradient extends Component {
  render() {
    return (
      <div>
        <Fade>
      <div className="Gradient">
          <h1>
            <span><i class="far fa-star"></i></span> pretty cool<span>!</span>
          </h1>
      </div>
      </Fade>
      </div>
    );
  }
}
  
  export default Gradient;
  