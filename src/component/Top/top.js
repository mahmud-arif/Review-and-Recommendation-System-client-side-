import React, {Suspense} from 'react';
import { Link } from 'react-router-dom'; 
import  Spinner  from '../common/Spinner';


const top = (props)=>{
  return (
      <tr>
      <td><Link to="">
        <img width="200" src={props.img} alt={props.name} /></Link></td>
        <td>{props.pos}</td>
        <td><Link to="">{props.name}</Link></td>
        <td></td>
        <td>{props.avg.toFixed(2)}/ 5</td>
      </tr>
  )
}

export default top; 