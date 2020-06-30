/* global ReactDOM:true */
/* global React:true */

class DivThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: {
        name: "Time and Relative Dimension in Space",
        caps: false,
      },
    };
    this.changeIt = this.changeIt.bind(this);
  }

  changeIt(text) {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true,
        },
      });
    }
  }
  render() {
    return (
      <div className="div-three">
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>
          {" "}
          {this.state.tardis.name}
        </h3>
      </div>
    );
  }
}

class DivTwo extends React.Component {
  render() {
    return (
      <div className="div-two">
        <DivThree />
        <DivThree />
      </div>
    );
  }
}
class DivOne extends React.Component {
  render() {
    return (
      <div className="div-one">
        <DivTwo />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="div-app">
        <DivOne />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
