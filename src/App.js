import React, { Component } from 'react';
import './App.css';
import FirstComponent from './firstComponent';
import Title from './titleComponent';
import DeleteButton from './delete'

let markedForDeletion = []
let className = "not-checked"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: []
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, [this.state.input, false]],
      input: '',
    })
  }

  handleCheckboxChange = (index) => {
    let copyArr = [...this.state.items]
    if (this.state.items[index][1] === false) {
      copyArr[index][1] = true
      markedForDeletion.push(copyArr[index])
      
      } else {
      copyArr[index][1] = false
      markedForDeletion = markedForDeletion.filter(i => i !== copyArr[index])
      
    }
      console.log(...this.state.items)
    this.setState({
      items: [...copyArr]
    })
    
    // if (this.state.checked) {
    //   className="checked"
    // } else {
    //   className="not-checked"
    // }

    
  }

  delete = event => {
    let copyArr = [...this.state.items]
   
    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] === markedForDeletion[i]) {
          className="checked"
        }
      }






    this.setState({
      items: [...copyArr]
    })
  }

  
  // this.setState({ items : [...this.state.items.map(item => item.filter(e => e !== true))]})


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
