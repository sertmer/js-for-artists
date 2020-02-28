import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../Sketches/sketch2';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { color: [Math.random() * 255, Math.random() * 255, Math.random() * 255] };
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor() {
    this.setState({ color: [Math.random() * 255, Math.random() * 255, Math.random() * 255] }
    )
  }

  render() {
    return (
      <div>
        <div className='canvas'>
          <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
        </div>
      </div>
    );
  }
}

export default App;