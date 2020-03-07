import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!!</h1>;
  }
}

const where = document.getElementById('root');

class ClapCounter extends React.Component {
  constructor() {
    super();
    this.state = { claps: 0 };
  }
  render() {
    return (
      <div>
        {this.props.children}
        <button
          type="button"
          onClick={() =>
            this.setState((prevState) => ({
              claps: prevState.claps + 1
            }))}
        >
          {this.state.claps}
        </button>
        {this.state.claps === 0 &&
          (
            <i>Be the first to click this button!</i>
          )}

      </div>
    );
  }
}

// const Greeting = props => <h1>Hello {props.name}!</h1>


ReactDOM.render(
  <ClapCounter>
    <Greeting name="Bina" />
  </ClapCounter>,
  where
);

