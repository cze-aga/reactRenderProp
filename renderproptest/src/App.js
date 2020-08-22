import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pounds = ({ amount }) => <p>Pounds: {amount * 1.11}</p>;

class Amount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    };
  }

  onIncrement = () => {
    this.setState({ amount: this.state.amount + 1 });
  };

  onDecrement = () => {
    if (this.state.amount === 0) {
      return;
    }
    this.setState({
      amount: this.state.amount - 1,
    });
  };

  render() {
    return (
      <div>
        <span> US Dollar: {this.state.amount}</span>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {/* <Euro amount={this.state.amount} /> */}
        {this.props.renderOne(this.state.amount)}
        <p>------</p>
        {this.props.renderTwo(this.state.amount)}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* The Amount component became a render prop component,
       because it implements the render prop pattern, and uses
       a children as a function or also called child as a 
       function to pass its own state */}
      <Amount
        //    Historically the pattern evolved from using a prop
        //  called render (or anything else) for it
        renderOne={(amount) => (
          <div>
            <h2>RenderOne</h2>
            <Euro amount={amount} />
          </div>
        )}
        renderTwo={(amount) => (
          <div>
            <h2>RenderTwo</h2>
            <Pounds amount={amount} />
          </div>
        )}
      />
    </div>
  );
}

export default App;
