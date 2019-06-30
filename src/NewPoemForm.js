import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    content: ""
  };

  handlePoemSubmit = event => {
    event.preventDefault();
    this.props.submitNewPoem(this.state);
  };

  handlePoemInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.handlePoemSubmit}>
          <input
            placeholder="Name your masterpiece..."
            name="title"
            onChange={this.handlePoemInput}
          />
          <textarea
            placeholder="Your masterpiece belongs here..."
            name="content"
            onChange={this.handlePoemInput}
          />
          <input type="submit" value="Share your masterpiece" />
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
