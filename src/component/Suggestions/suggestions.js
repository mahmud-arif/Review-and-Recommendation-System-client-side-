import React from 'react'
import './suggestions.css'
import { Link } from 'react-router-dom'; 

const Suggestions = (props) => {
  console.log(props); 
  const options = props.results.map(r => (
    <Link onClick={props.onClicked} key={r.id} to={`/${r.catagory}/${r.slug}`}><li className="search__result" >
      {r.name}
    </li>
    </Link>
  ))
  return <ul className="search__results">{options}</ul>
}

export default Suggestions
