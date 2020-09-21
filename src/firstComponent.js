import React from 'react';

const Checkbox = props => (
  <input type="checkbox" {...props} />
)

export let checkBool = ""

class Checkboxes extends React.Component {

  state = { 
    checked: false,
   }

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
    checkBool=this.state.checked
  }
  
  render() {
    return (
      <Checkbox onChange={this.handleCheckboxChange} {...this.props}/>   
    ) 
  }
}


function FirstComponent(props) {
  return (
      <ul>
        {props.items.map((item, index)=>{
          return <li key={index}>{props.items[index]}
          <Checkboxes className="check-button" key={index}/>
          </li>
        })}
      </ul>
  )
}


export default FirstComponent;