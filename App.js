class App extends React.Component {
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

  changeIt = () => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toUpperCase(),
          caps: true,
        },
      });
    }
  };

  render() {
    return (
      <div className="div-app">
        <DivOne tardis={this.state.tardis} changeIt={this.changeIt} />
      </div>
    );
  }
}

class DivOne extends React.Component {
  render() {
    return (
      <div className="div-one">
        <DivTwo tardis={this.props.tardis} changeIt={this.props.changeIt} />
      </div>
    );
  }
}

class DivTwo extends React.Component {
  render() {
    return (
      <div className="div-two">
        <DivThree tardis={this.props.tardis} changeIt={this.props.changeIt} />
        <DivThree tardis={this.props.tardis} changeIt={this.props.changeIt} />
      </div>
    );
  }
}

class DivThree extends React.Component {
  render() {
    return (
      <div className="div-three" onClick={this.props.changeIt}>
        <h3>{this.props.tardis.name}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
