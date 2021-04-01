import React, {Component} from "react"
import ReactDOM from "react-dom"
import "./index.css"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  state = {
    renderDescription: null,
  }

  getRender = (renderDescription) => {
    this.setState({renderDescription})

    console.log(renderDescription)
  }

  componentDidMount = () => {}

  render() {
    return (
      <div className="App">
        <Header renderDescription={this.state.renderDescription} />
        <Counter getRender={this.getRender} />
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          The current count is less than ${this.props.renderDescription}
        </h1>
      </header>
    )
  }
}

class Counter extends Component {
  state = {count: 0}

  increment = () => {
    this.setState({count: this.state.count + 1})
    this.props.getRender(this.renderDescription())
  }

  decrement = () => {
    this.setState({count: this.state.count - 1})
    this.props.getRender(this.renderDescription())
  }

  renderDescription = () => {
    const remainder = this.state.count % 5
    const upToNext = 5 - remainder
    return this.state.count + upToNext
  }

  render() {
    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
        {/* <h3>{this.props.getRender=() => this.renderDescription()}</h3> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import logo from './logo.svg';
// import './App.css';
// class App extends Component {
//   state = { count: 0 };
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   renderDescription = () => {
//     const remainder = this.state.count % 5;
//     const upToNext = 5 - remainder;
//     return `The current count is less than ${this.state.count + upToNext}`;
//   };
//   render() {
//     return (
//       <div className="App">
//         <Header renderDescription={this.renderDescription} />
//         <Counter state={this.state} increment={this.increment} decrement={this.decrement} />
//       </div>
//     );
//   }
// }
// class Header extends Component {
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">{this.props.renderDescription()}</h1>
//       </header>
//     );
//   }
// }
// class Counter extends Component {
//   render() {
//     return (
//       <div className="Counter">
//         <h1>{this.props.state.count}</h1>
//         <button onClick={this.props.decrement}> - </button>
//         <button onClick={this.props.increment}> + </button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));
