import React from 'react'
import { Time } from '../../components'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='NavbarContainer'>
        <div className="NavbarWrapper">
            <div className="logo">
                <h3> Cat Tracker </h3> 
            </div>
            <Time />
        </div>
    </div>
  )
}

export default Navbar