import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InititateWorkoutPage from './InititateWorkoutPage'
import classes from '../assets/recordWorkout.module.css'
import { useLocation, useNavigate } from 'react-router-dom'


const RecordWorkout = () => {
    const [workoutName, setWorkoutName] = useState('')
    const [reps, setReps] = useState(0)
    const [counter, setCounter] = useState(0)
    const [done, setDone] = useState(false)
    const [workouts, setWorkouts] = useState([])
    const [initiateWorkout, setInitiateWorkout] = useState(false)
    const location = useLocation()
    const id = location.pathname.slice(1)
    const navigate = useNavigate()

    const instance = axios.create({
        withCredentials: true
    });

    useEffect(() => {
        
    }, [counter])

    const addWorkout = object => {
        setWorkouts([
            ...workouts,
            object

        ])
        setWorkoutName('')
        setReps(0)
    }

    const saveWorkout = () => {
        instance.put(`http://localhost:5003/api/regimen/${id}/exerciseQueueUpdate`, {
            workouts
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const recordWorkout = e => {
        while (done === false) {
            return <div className={classes.Div}>
                <div className={classes.Container}>
                    <div className={classes.RecordWorkoutCard}>
                        <div className={classes.Left}>
                            <div className={classes.LeftContainer}>
                                <h3 className={classes.LeftH3}><span>&copy;</span>Strength-Track</h3>
                                <p className={classes.LeftP}>Please log the workout name and the amount of reps that were performed! Once executed, please select add exercise and the form will reset to its initial state, which means your current workout was saved. You are able to add multiple exercises. Once you are done, please select "Record Exercise" to see the results on your dashboard.</p>
                            </div>
                        </div>
                        <div className={classes.Right}>
                            <div className={classes.RightContainer}>
                                <div className={classes.RightTop}>
                                    <div className={classes.RightTopInputs}>
                                        <div>
                                            <label>Workout Name</label>
                                            <input type='text' onChange={e => setWorkoutName(e.target.value)} value={workoutName} className={classes.RightInput} />
                                        </div>
                                        <div>
                                            <label>Reps</label>
                                            <input type="number" onChange={e => setReps(e.target.value)} className={classes.RightInput2} value={reps} />
                                        </div>
                                    </div>
                                    <div className={classes.RightTopButton}>
                                        <button onClick={() => {
                                            addWorkout({
                                                workoutName: workoutName,
                                                reps: reps
                                            })
                                            setCounter(prev => prev + 1)
                                        }} className={classes.RightButton}>Add Exercise</button>
                                    </div>
                                    <div className={classes.WorkoutFeedback}>
                                        {counter > 0 ? <h4>Please enter add another exercise, or submit your workout!</h4> : <h4>Please add an exercise performed!</h4>}
                                    </div>
                                </div>
                                <button onClick={() => {
                                    setDone(true)
                                    saveWorkout()
                                    navigate('/allWorkoutRegimens')
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