import React from 'react'
import classes from '../assets/landingPage.module.css'
import IgIcon from '../pictures/instagram.png'
import TwIcon from '../pictures/twitter.png'
import LkIcon from '../pictures/linkedin.png'
import model from '../pictures/model3.jpeg'
import reggie from '../pictures/reggie.jpg'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()

  return (
    <div className={classes.Div}>
      <div className={classes.Container}>
        <div className={classes.Top}>
          <div className={classes.TopContainer}>
            <div className={classes.Left}>
              <h1 className={classes.LeftH1}>Strength-Track</h1>
              <p className={classes.LeftP}>Strength Track is a fitness platform designed to track your calistehnics journey through logging your overall progression. Hit those target rep-ranges by evaluating what you need to work on through our documenting system.</p>
              <button onClick={() => navigate('register')} className={classes.LButton}>Register</button>
            </div>
            <div className={classes.Right}>
              <img src={model} alt="fitness influencer" className={classes.RightPic} />
            </div>
          </div>
        </div>
        <div className={classes.Bottom}>
          <div className={classes.BottomContainer}>
            <div className={classes.BottomContainerTop}>
              <h1 className={classes.BCTH1}>Already a member? Please login!</h1>
              <button onClick={() => navigate('login')} className={classes.BottomContainerButton}>Login</button>
            </div>
            <div className={classes.BottomContainerBottom}>
              <div className={classes.SocialMediaContainer}>
                <h4 className={classes.SCSH1}>Strength-Track</h4>
                <p className={classes.SCSP}>In starting my calistehnics journey, I wanted to document my progress in a way that was intuitive and easy to reference. I developed this app with that in mind. Please follow us on social media!</p>
                <div className={classes.SocialMediaIcons}>
                <img src={IgIcon} alt="instagram icon" className={classes.Icon}/>
                <img src={TwIcon} alt="twitter icon" className={classes.Icon}/>
                <img src={LkIcon} alt="linkedin icon" className={classes.Icon}/>
                </div>
              </div>
              <div className={classes.FounderBox}>
                  <div className={classes.PictureFrame}>
                  <img src={reggie} alt="founder" className={classes.FImg}/>
                  </div>
                  <div className={classes.FounderInfo}>
                  <p>Founder</p>
                  <p>Reginald Jean Amedee</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage