import "./styles.css";
import React, { Component } from "react";
import { TrieNode, insert, search, items } from "./Tries.js";
console.log(items);
const root = new TrieNode("\0");
for (const item of items) {
  insert(item, root);
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal_1: ""
    };
    this.result = [];
  }

  handleInput1Change = (e) => {
    const str = e.target.value.toLowerCase();
    this.setState({ inputVal_1: str });
    const result = search(str, root);
    this.result = result;
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  func_clear = () => {
    this.setState({
      inputVal_1: ""
    });
    this.result = [];
  };

  render() {
    return (
      <form className="form">
        <div className="App">
          <input
            value={this.state.inputVal_1}
            onChange={this.handleInput1Change}
            className="input"
            type="text"
            placeholder="Search"
            onKeyPress={this.handleKeyPress}
          />
          <ul className="list">
            {this.result.map((res) => (
              <li>
                <span>{res}</span>
              </li>
            ))}
          </ul>
          <svg
            className="cross-icon"
            onClick={this.func_clear}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </div>
      </form>
    );
  }
}
