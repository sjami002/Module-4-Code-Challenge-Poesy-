import React from "react";

class Poem extends React.Component {
  state = {
    click: false
  };

  handleColor = event => {
    this.setState({
      click: !this.state.click
    });
  };

  render() {
    return (
      <div
        style={this.state.click ? { color: "plum" } : { color: "black" }}
        onClick={this.handleColor}
      >
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- {this.props.poem.author}</strong>
      </div>
    );
  }
}

export default Poem;
