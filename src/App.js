import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
// import collapseSubmitDiv from './animations.js';

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
      open: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    //perhaps i should trim value here.
    let value = event.target.value;
    this.setState({value: value});  
  }

  setSearchValue() {
    let value = this.state.value;
    value = trim(value);
    // console.log()
    console.log("Will search for: " + this.state.value);
  }

  handleSubmit(event) {
    console.log('A search was submitted: Hooray. I hope this component works soon :)');
    //when we click "Search", we want a concise search query
    this.setSearchValue();
    //below we can provide the animation to close out the submit button.

    this.setState({
      open: !this.state.open
    })

    // console.log("event target")
    // console.log(event.target); // button == submit. thus button HTML object is event.target
    // const submitField = (event.target).parentElement; //div to collapse
    //CAN I SET A DELAYED STYLE: DISPLAY NONE ?
    // submitField.style = "animation: SubmitField linear 0.5s normal; "
    // submitField.style = "display: none";
    //transition and onclick?

    const submitField = (event.target).parentElement; 
    submitField.style = "height: 0px;";
    event.target.style = `visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear;`;

    console.log((event.target).parentElement);
    
    event.preventDefault(); //look up what this does
  }

  replaceSubmission(event) {
    //here we would replace the searchbar, and submit button once the query
    //has been executed and results have been returned.
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