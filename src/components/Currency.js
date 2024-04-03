import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Currency = () => {
  const {currency, setCurrency} = useContext(AppContext);
  const currencyNames = {"$":"$ Dollar", "£": "£ Pound", "€":"€ Euro", "₹": "₹ Ruppee"};
  const [toggle, setToggle] = useState(false);

  return (
    <div className='alert alert-success' onClick={() => setToggle(!toggle)}>

  Currency ({currencyNames[currency]}) {

  <ul className={`dropdown-menu ${toggle ? 'show' : ''}`}>
    <li><p className="dropdown-item" value="$" onClick={() => setCurrency("$")}>$ Dollar</p></li>
    <li><p className="dropdown-item" value="£" onClick={() => setCurrency("£")}>£ Pound</p></li>
    <li><p className="dropdown-item" value="€" onClick={() => setCurrency("€")}>€ Euro</p></li>
    <li><p className="dropdown-item" value="₹" onClick={() => setCurrency("₹")}>₹ Ruppee</p></li>
  </ul>
}
    </div>
    );
};

export default Currency;