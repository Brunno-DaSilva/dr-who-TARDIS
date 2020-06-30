class DivOne extends React.Component {
  render() {
    return (
      <div className="div-one">
        <DivTwo tardis={this.props.tardis} changeIt={this.props.changeIt} />
      </div>
    );
  }
}
