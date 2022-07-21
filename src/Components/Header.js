import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import  './style.css';
import { Cart } from '../Context';

const Header = () => {
  const {cart} = useContext(Cart)
  return (
    <div>
      <h1 className='header'>E-Commerce</h1>
      <ul className='nav'>
      <li className='=product'>
        <Link to ='/'>Home</Link>
      </li>
      <li className='=product'>
        <Link to='/cartitems'>CartItems ({cart.length})</Link>
      </li>
      </ul>
    </div>
  )
}

export default Header
