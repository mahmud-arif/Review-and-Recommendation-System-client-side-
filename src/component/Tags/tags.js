import React from 'react';
import './tags.css'

const tags = (props) => {
  return (
       <li className="tag" onClick={props.clicked}><div className="tag__link" >
        <span className="tag__text">{props.tag}</span>
      <span className="tag__count">{props.count}</span></div>
    </li>
    )
}

export default tags; 