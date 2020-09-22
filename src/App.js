import React, { Component } from 'react';
import './App.css';
import FirstComponent, { sharedIndex } from './firstComponent';
import Title from './titleComponent';
import DeleteButton from './delete'


let className = "not-checked"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: {
        list: [],
        checked: true
      }
      
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items.list, this.state.input],
      input: '',
    })
  }

  handleCheckboxChange = (index) => {
    for (let i = 0; i < this.state.items.length; i++) {
       if (i === index) {
         if (this.state.checked === false) {
           this.setState( {checked: true} )
         } else {
           this.setState( {checked: false} )
         }


       } 
      }
    console.log(index, this.state.checked)
    // if (this.state.checked) {
    //   className="checked"
    // } else {
    //   className="not-checked"
    // }
  }

  delete = event => {
    console.log(this.state.checked)
    if (this.state.checked === false) {
      this.setState({ items : [...this.state.items.filter(item => item)]
        }
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title/>
          <form onSubmit={this.formSubmit.bind(this)}>
            <input value={this.state.input} onChange={this.inputUpdate.bind(this)}></input>
            <button>Submit</button>
          </form>
          <div>
            <FirstComponent className={className} items={this.state.items} Change={(i) => this.handleCheckboxChange(i)}/>
          </div>
          <DeleteButton onClick={this.delete.bind(this)}/>
        </header>
      </div>
    );
  }
}


export default App;
