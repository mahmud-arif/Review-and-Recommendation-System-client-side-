import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; 


const footer = (props) => {
  return (
    <div className="footer-section">
  <ul className="footer-ul">
    <li className="footer-item">
      <div className="f-head">Links
        <p className="f-child"><Link to="">Add your business</Link></p>
        <p className="f-child"><Link to="#">Services</Link></p>
      </div>
    </li>
    <li className="footer-item">
      <div className="f-head">XYZ
        <p className="f-child"><Link to="#">About us</Link></p>
        <p className="f-child"><Link to="#">Contact us</Link></p>
      </div>
    </li>
    <li className="footer-item">
      <div className="f-head">Others
        <p className="f-child"><Link to="#">&copy;Terms of use</Link></p>
        <p className="f-child"><Link to="#">Privacy policy</Link></p>
      </div>
    </li>
  </ul>

</div>
  )
}

export default footer; 