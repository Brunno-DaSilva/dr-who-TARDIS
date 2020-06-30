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
