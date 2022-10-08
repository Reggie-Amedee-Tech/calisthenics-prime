import React from 'react'
import {useNavigate} from 'react-router-dom'
import classes from '../assets/unauthorizedPage.module.css'

const UnauthorizedPage = () => {
    const navigate = useNavigate()

  return (
    <div className={classes.Div}>
        <div className={classes.Container}>
            <div className={classes.UnauthorizedInfo}>
            <h1 className={classes.UIH1}>401</h1>
            <h3 className={classes.UIH3}>Unauthorized</h3>
            <button className={classes.Button} onClick={() => {
                navigate('/login')
            }}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default UnauthorizedPage