import React from 'react';

const Checkbox = props => (
  <input type="checkbox" {...props} />
)

export let checkBool = ""

class Checkboxes extends React.Component {
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

