import React from 'react'
import classes from  '../Layout/Header.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";


function Header() {
  const[isopen, setisopen] = useState(false)

  function togglemenubar(){
   setisopen((open)=>!open)
}   

  return (
    <div className={classes.Navbar}>
       <h2 className={classes.heading}>Portfolio</h2>
       <li className={classes.trigger_menu} onClick={togglemenubar}><FaBarsStaggered /></li>
      <ul className={`${classes.menuitems} ${isopen ? classes.is_open: " "}`}>  

        <li className={classes.homebtn}><Link to ='/'>Home</Link></li>
        <li className={classes.projectsbtn}><Link to ='/projects'>Projects</Link></li>
        {/* <li className={classes.expbtn}><Link to ='/experience'>Experience</Link></li> */}
        <li className={classes.aboutbtn} ><Link to ='/contact'>Contact</Link></li>
      </ul>
     
    </div>
  )
}

export default Header
