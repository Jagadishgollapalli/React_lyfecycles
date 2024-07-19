import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: 'kakinada',
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  componentDidMount() {
    console.log('Mounting Phase');
  }

  shouldComponentUpdate() {
    return true; //shouldComponentUpdate is always a boolean value
    //if given false it will not help to make the updations in our component
  }

  componentDidUpdate() {
    console.log('UPDATING PHASE - componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('UNMOUNTING PHASE - componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <input
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
          value={this.state.name}
        />
        <p>Counter : {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
