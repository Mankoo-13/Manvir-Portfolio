import React from 'react'
import classes from  '../Layout/Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={classes.Navbar}>
       <h2 className={classes.heading}>Portfolio</h2>
      <ul>
        <li className={classes.homebtn}><Link to ='/'>Home</Link></li>
        <li className={classes.projectsbtn}><Link to ='/projects'>Projects</Link></li>
        {/* <li className={classes.expbtn}><Link to ='/experience'>Experience</Link></li> */}
        <li className={classes.aboutbtn} ><Link to ='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header
