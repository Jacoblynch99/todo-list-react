import React, { Component } from 'react';
import './App.css';
import FirstComponent from './firstComponent';
import Title from './titleComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: []
    };
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title/>
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpdate}></input>
            <button>Submit</button>
          </form>
          <FirstComponent items={this.state.items}/>
        </header>
      </div>
    );
  }
}


export default App;
