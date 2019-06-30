import React from "react";

class LoginForm extends React.Component {
  state = {
    userInput: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitUsername(this.state.userInput);
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter a username..."
            name="userInput"
            onChange={this.handleInput}
          />
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
