import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classes from '../assets/detailedWorkoutPage.module.css'
import { useLocation } from 'react-router-dom'

const DetailedRegimenPage = () => {
    const location = useLocation()
    const [workout, setWorkout] = useState([])
    const id = location.pathname.slice(20)
    
    

    useEffect(() => {
        axios.get(`http://localhost:5003/api/regimen/workoutRegimens/${id}`)
            .then(res => {
                setWorkout([res.data])
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className={classes.Div}>
            <div className={classes.Container}>
                <div className={classes.DetailedWorkoutCard}>
                    <div className={classes.Left}>
                        <div className={classes.LeftContainer}>
                            <h3 className={classes.LeftH3}>App Name</h3>
                            <p className={classes.LeftP}>"Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className={classes.Right}>
                        {workout.map(werk => {
                            return <div className={classes.RightContainer}>
                                <h1>{werk.workoutRegimen}</h1>
                                <h2>HELLO</h2>
                            </div>
                        })}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailedRegimenPage