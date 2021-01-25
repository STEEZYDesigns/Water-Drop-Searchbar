import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {animations} from './animations.js';
import './App.css';

//global function to trim the whitespace and add anything necessary
//to the search query to make it able to pass to whatever i use (API or google, bing etc)
let trim = function(trimmy) {
  console.log("Trim trimmy up");
  return trimmy.trim();
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: 'Water Drop Search Bar by Joe Morales', //this value will be submitted and used to make a search on something.
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
  }

  handleAnimations(target) {
    // const target = target; //take the button
    const submitField = target.parentElement; //take the div to collapse
    animations.dissapear(target, submitField); //gibu anime-shon
  }

  handleChange(event) {    
    //perhaps i should trim value here.
    let value = event.target.value;
    this.setState({value: value});  
  }

  handleSubmit(event) {
    this.handleAnimations(event.target);

    console.log('A search was submitted: Hooray. I hope this component works soon :)');
    //when we click "Search", we want a concise search query
    this.setSearchValue();
    //below we can provide the animation to close out the submit button.
    
    event.preventDefault(); //look up what this does
  }

  replaceSubmission(event) {
    //here we would replace the searchbar, and submit button once the query
    //has been executed and results have been returned.
  }

  setSearchValue() {
    let value = this.state.value;
    value = trim(value);
    // console.log()
    console.log("Will search for: " + this.state.value);
    this.setState({
      value: value
    })
  }


  render() {
    return (
      <div className="searchbarContainer">
        <div className="searchbarComponent">
          <form onSubmit={this.handleSubmit}>
            <div className="SearchBar-Animation">
              <input type="text" name="waterdropSearchBar" onChange={this.handleChange} 
                autoComplete="" placeholder="Water Drop Search Bar by Joe Morales" value={this.state.value} />
            </div>
            <div className="SubmitField" >
              <button className="waterdropSubmit" onClick={this.handleSubmit} value="Search"> Begin Search </button>
            </div>
          </form>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}

export default SearchBar;





// {
//   this.state.open ? 
//   (<div className="SubmitFieldOpen">
//     <button className="waterdropSubmit" onClick={this.handleSubmit} value="Search"> Begin Search </button>
//   </div>) :
//   (<div className="SubmitFieldClosed">
//     <button className="waterdropSubmit" onClick={this.handleSubmit} value="Search"> Begin Search </button>
//   </div>)
// }  





// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }