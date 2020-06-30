class DivOne extends React.Component {
  render() {
    return (
      <div onClick={this.changeIt}>
        <h3> {this.state.tardis.name}</h3>
      </div>
    );
  }
}
