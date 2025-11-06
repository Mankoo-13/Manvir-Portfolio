import React from 'react'
import classes from "../Layout/Projects.module.css"
import leftsc from "../../assets/foot-left-sc.png"
import food from "../../assets/foodapp.png"
import weatherapp from "../../assets/weatherapp.png"
import gameapp from "../../assets/gameapp.png"

function Projects() {
  return (
    <div>
   <div className={classes.wrapper1}>
       <div className={classes.lefts1}>
        <h2 className={classes.heading1}>PROJECTS CREATED BY ME</h2>
      <h3 className={classes.heading2}>1.Sneaker Co - A Sneaker Showcaseapp</h3>
      <img src={leftsc} className={classes.img1}></img>
      </div>
      
       
      <div className={classes.rights1}>
        <h3 className={classes.abtproject1}> ABOUT PROJECT</h3>
        <p className={classes.descript1}> Built an interactive sneaker display platform that fetches real-time data from external<br></br>
                                          websites and allows users to navigate to purchase pages. <br></br>
                                          Implemented global state management using useContext, useReducer, and Redux hooks. <br></br>
                                          Designed a responsive and modern UI with Tailwind CSS for a seamless user experience
        </p>
        <p  className={classes.github1}>Github Link:- <a
                                        href="https://accuweather.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer">Click here for live project demo</a>

        </p>
      </div>

    </div>

{/* Project 2 */}
< div className={classes.wrapper1}>
       <div className={classes.lefts1}>
      <h3 className={classes.heading2}>2.Food at Door-Food Ordering App</h3>
      <img src={food} className={classes.img1}></img>
      </div>
      
       
      <div className={classes.rights1}>
        <h3 className={classes.abtproject1}> ABOUT PROJECT</h3>
        <p className={classes.descript1}> Developed a fully functional e-cart application using React.
                                          Implemented features like meal listing, adding/removing items to/from the cart, 
                                         and dynamic price calculation.
                                        Utilized React hooks (useState, useReducer, useEffect) for
                                       state management and Firebase for real-time data fetching
        </p>
        <p  className={classes.github1}>Github Link:-</p>
      </div>

      </div>

{/* Project 3 */}
< div className={classes.wrapper1}>
       <div className={classes.lefts1}>
      <h3 className={classes.heading2}> 3.AccuWeather  - A weather App</h3>
      <img src={weatherapp} className={classes.img1}></img>
      </div>
      
       
      <div className={classes.rights1}>
        <h3 className={classes.abtproject1}> ABOUT PROJECT</h3>
        <p className={classes.descript1}> - AccuWeather was created by using JS and on this I have worked on 
                                            the APIs and the main objective 
                                            was of the app to fetch the air quality, 
                                            temperature and wind details of the any city in the world just by entering name there.
        </p>
        <p  className={classes.github1}>Github Link:- <a
                                        href="https://accuweather.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer">Click here for live project demo</a>

        </p>

      </div>


      </div>

      {/* Project 4 */}
< div className={classes.wrapper1}>
       <div className={classes.lefts1}>
      <h3 className={classes.heading2}> 4.Roll the Dice - Two Player Game</h3>
      <img src={gameapp} className={classes.img1}></img>
      </div>
      
       
      <div className={classes.rights1}>
        <h3 className={classes.abtproject1}> ABOUT PROJECT</h3>
        <p className={classes.descript1}> -        The Roll Dice Game is a simple and fun game where players roll a virtual 
                                                   or physical die (or dice) to get a random number. Player who would be getting 
                                                   the highest roll would be announced as winner.
        </p>
        <p  className={classes.github1}>Github Link:-</p>
      </div>


      </div>


      
</div>


  )
}

export default Projects
