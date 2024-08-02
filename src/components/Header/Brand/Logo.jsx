import React from 'react'
import logo from '../../../assets/Logo.png'
import './Logo.css'
const Logo = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img className="brandlogo" src={logo} alt='logo'/>
      <div className="brand-grp">
        <p className='sulphuric'>Sulphuric <sup style={{fontSize: "15px", top: '-1.5em'}}>BETA</sup></p>
        <p className='bench'>Bench</p>
      </div>
    </div>
  )
}

export default Logo