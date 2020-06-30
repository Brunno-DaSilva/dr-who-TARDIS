class DivThree extends React.Component {
  render() {
    return (
      <div className="div-three" onClick={this.props.changeIt}>
        <h3>{this.props.tardis.name}</h3>
      </div>
    );
  }
}
