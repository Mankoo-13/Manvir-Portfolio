import React from 'react'
import sidebg from '../../assets/Mountainbg.png'
import leftbg from '../../assets/Contactsc.jpg'
import classes from '../Layout/Contact.module.css'

function Contact() {
  return (
    <div>
     <img src={sidebg} className={classes.img1}></img>

    <div className={classes.container}>
      <div className={classes.left1}>
        <img src={leftbg} className={classes.img2}></img>
      </div>
      <div className={classes.right1}>
        <h3 className={classes.heading1}>Want to get your
            <br></br>work done ?</h3>
        <input type='text' className={classes.name} placeholder='Name'></input><br></br>
        <input type='text' className={classes.phone} placeholder='Phone'></input>
        <input type='text' className={classes.email} placeholder='Email'></input><br></br>
        <input type='text' className={classes.message} placeholder='Message'></input><br></br>
        <button className={classes.btn1}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Contact
