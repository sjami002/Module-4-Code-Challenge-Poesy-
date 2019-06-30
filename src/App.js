import React from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import UserHeader from "./UserHeader";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    username: "",
    filteredPoems: [],
    filter: false
  };

  submitUsername = username => {
    this.setState({
      username: username
    });
  };

  userLogout = () => {
    this.setState({
      username: ""
    });
  };

  submitNewPoem = newPoemDetails => {
    if (this.state.username === "") {
      alert("Please Log In");
      return;
    }
    let addPoem = {
      ...newPoemDetails,
      author: this.state.username
    };

    fetch("http://localhost:3000/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: addPoem.title,
        content: addPoem.content,
        author: addPoem.author
      })
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          poems: [...this.state.poems, data],
          filteredPoems: [...this.state.filteredPoems, data]
        })
      );
  };

  handleTitle = event => {
    if (this.state.filter === true) {
      //turns filtered poems to all poems

      this.setState({
        filteredPoems: this.state.poems,
        filter: false
      });
      console.log("hello");
      return;
    }
    //turns filtered into filtered
    const filteredPoems = this.state.poems.filter(poem => {
      return poem.title.toLowerCase().includes("the");
    });
    this.setState({
      filteredPoems: filteredPoems,
      filter: true
    });
    console.log("hey");
  };

  componentDidMount() {
    fetch("http://localhost:3000/poems")
      .then(res => res.json())
      .then(data => {
        this.setState({
          poems: data,
          filteredPoems: data
        });
      });
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleTitle}>Filter Title</button>
          {this.state.username ? (
            <UserHeader
              username={this.state.username}
              userLogout={this.userLogout}
            />
          ) : (
            <LoginForm submitUsername={this.submitUsername} />
          )}

          <NewPoemForm submitNewPoem={this.submitNewPoem} />
        </div>

        <PoemsContainer poems={this.state.filteredPoems} />
      </div>
    );
  }
}

export default App;
