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
          <Checkbox
            onChange={this.handleCheckboxChange}
            {...this.props}
            />   
    ) 
  }
}

export default Checkboxes;

// this.state.checked ? { checked: false } : { checked: true }