import React from 'react'
import Link from 'next/link'
import { AiFillShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import Image from 'next/image'

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities} = useStateContext()
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <a>
          <Image alt="logo" src="/logo.png"  width="80" height="80"></Image>
          </a>
        </Link>
      </p>
      <button type="button" className="cart-icon" onClick={ () => setShowCart(true)}>
        <AiFillShopping color='black'/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default NavBar