import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      placeholder: 'Water Drop Search Bar by Joe Morales'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  handleSubmit(event) {
    alert('A search was submitted: Hooray. I hope this component works soon :)');
    event.preventDefault();
  }

  render() {
    return (
      <div className="searchbarContainer">
        <div className="searchbarComponent">
          <form>
            <input type="text" name="waterdropSearchBar" onChange={this.handleChange} 
              autoComplete="" placeholder={this.state.placeholder}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
