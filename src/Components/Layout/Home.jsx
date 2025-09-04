import React from 'react'
import classes from '../Layout/Home.module.css'
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa6";
import sidebg from '../../assets/sidevector.jpg'
import { CiSettings } from "react-icons/ci";
import { GoSquirrel } from "react-icons/go";
import { GoMoon } from "react-icons/go";




function Home() {
  const cards = [
    {
      name: "FrontEnd Development",
      img: <CiSettings />,
      key: 1,
      details: "Enhance your desing by front end librarires",
    },
    {
      name: "UI and UX Designer",
      key: 2,
      img: <GoSquirrel />,
      details: " Want a good Design ? No need to worry ",
    },
    {
      name: " Backend Developement",
      key: 3,
      img: <GoMoon />,
      details: "Connecting the website backend libraries",
    }
  ];

  const skillcards = cards.map((value) => (
    <li className={classes.onlylist} key={value.key}>
      <h3 className={classes.titlehead}>{value.name}</h3>
      <div className={classes.icon}>{value.img}</div>
      <p className={classes.details}>{value.details}</p>
    </li>

  ));


  return (
    <div>
      {/* <img src={Sidebg2} alt='backgroundimg'className={classes.sidebg}></img> */}
      <div className={classes.textsection}>

       <div className={classes.info}><h3>Hello, I am</h3>
          <h1 className={classes.myname}>Manvir Mankoo</h1>
          <h3 className={classes.expertise}>Full Stack Web Developer</h3></div>
        <p>Compitent, accomplished and best in my work.<br></br>Contact me to get your work done and to get my expertise.</p>
        <button className={classes.btntalk}>Let's talk</button>
        <h3 className={classes.shandles}>Check out my social handles</h3><SiInstagram className={classes.insta} /> <FiTwitter className={classes.twitter} /><FaFacebookMessenger className={classes.facebook} />

        <h4 className={classes.service}>My services</h4>
        <h2 className={classes.wid}>What I do</h2>
      </div>
      <div className={classes.sidebg}><img src={sidebg} height={"550px"} width={"550px"}></img></div>
      <ul className={classes.list}>{skillcards}</ul>
      </div>

  )
}

export default Home
