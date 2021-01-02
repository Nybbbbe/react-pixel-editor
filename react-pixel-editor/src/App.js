import './App.css';
import Canvas from './Canvas.js';
import React, { useRef, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
      </header>
    </div>
  );
}

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.widthInput = React.createRef();
    this.heightInput = React.createRef();
    this.state = {
      width: 100,
      height: 100
    };
  }

  refresh = () => {
    const w = parseInt(this.widthInput.current.value, 10);
    const h = parseInt(this.heightInput.current.value, 10);
    if (!isNaN(w)) {
      this.setState({
        width: w
      });
    } else {
      console.log("Width is not a number!");
    }
    if (!isNaN(h)) {
      this.setState({
        height: h
      }, () => console.log(this.state));
    } else {
      console.log("Height is not a number!");
    }
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="toolbar-left">
            <input className="nav-input" ref={this.widthInput} placeholder="Width" />
            <input className="nav-input" ref={this.heightInput} placeholder="Height"/>
            <button type="button" className="btn btn-primary" onClick={this.refresh}>
              <i className="material-icons">refresh</i>
            </button>
          </div>
          <p className="nav-info">W: {this.state.width} H: {this.state.height}</p>
        </nav>
        <Canvas {...this.state}/>
      </>
    )
  }
  
}

export default App;
