import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InititateWorkoutPage from './InititateWorkoutPage'
import classes from '../assets/recordWorkout.module.css'
import { useLocation } from 'react-router-dom'

const RecordWorkout = () => {
    const [workoutName, setWorkoutName] = useState('')
    const [reps, setReps] = useState(0)
    const [done, setDone] = useState(false)
    const [workouts, setWorkouts] = useState([])
    const [initiateWorkout, setInitiateWorkout] = useState(false)
    const location = useLocation()
    const id = location.pathname.slice(15)

    console.log(id)

    const addWorkout = object => {
        setWorkouts([
            ...workouts,
            object

        ])
        setWorkoutName('')
        setReps(0)
    }

    const saveWorkout = () => {
        axios.put(`http://localhost:5003/api/regimen/${id}/exerciseQueueUpdate`, {
            workouts
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    console.log('YO')
    console.log('YOOOOOO')


    const recordWorkout = e => {
        while (done === false) {
            return <div className={classes.Div}>
                <div className={classes.Container}>
                    <div className={classes.RecordWorkoutCard}>
                        <div className={classes.Left}>
                            <div className={classes.LeftContainer}>
                                <h3 className={classes.LeftH3}>App Name</h3>
                                <p className={classes.LeftP}>"Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                        <div className={classes.Right}>
                            <div className={classes.RightContainer}>
                                <div className={classes.RightTop}>

                                <div className={classes.RightTopInputs}>

                                
                                <input type='text' onChange={e => setWorkoutName(e.target.value)} value={workoutName} className={classes.RightInput}/>
                                <input type="number" onChange={e => setReps(e.target.value)} className={classes.RightInput2} value={reps}/>
                                
                                </div>
                                <div className={classes.RightTopButton}>

                                
                                <button onClick={() => {
                                    addWorkout({
                                        workoutName: workoutName,
                                        reps: reps
                                    })
                                }} className={classes.RightButton}>Add Exercise</button>
                                </div>
                                </div>
                                <button onClick={() => {
                                    setDone(true)
                                    saveWorkout()
                                }} className={classes.RightButton2}>Record Exercise</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        return <h1>Workout Saved, check results here!</h1>
    }

    return (
        <div>
            {initiateWorkout === false ? <InititateWorkoutPage setInitiateWorkout={setInitiateWorkout} /> : recordWorkout()}
        </div>
    )
}

export default RecordWorkout