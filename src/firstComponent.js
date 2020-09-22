import React from 'react';
import Checkboxes from './checkbox'

export let sharedIndex=0;

function FirstComponent(props) {
  return (
      <ul>
        {props.items.map((item, index)=>{
          
          return <li key={index}>{props.items[index]}
          <Checkboxes className="check-button" key={index} onClick={() => props.Change(index)}/>
          </li>
        })}
      </ul>
  )
}


export default FirstComponent;