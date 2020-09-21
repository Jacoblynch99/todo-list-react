import React from 'react';

function FirstComponent(props) {
  return (
    <div>
      <ul>
        {props.items.map((item, index)=>{
          return <li key={index}>{props.items[index]}   
          <input type="radio" className="radio-App"/>
          </li>
        })}
      </ul>
    </div>
  )
}


export default FirstComponent;