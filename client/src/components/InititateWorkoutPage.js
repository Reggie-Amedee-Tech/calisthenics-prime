import axios from 'axios'
import React, { useState, useEffect } from 'react'
import classes from '../assets/InitiateWorkoutPage.module.css'
import { useLocation } from 'react-router-dom'


const InititateWorkoutPage = (props) => {
    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false)
    const [completionTime, setCompletionTime] = useState('00:00:00')
    const { setInitiateWorkout } = props;
    const [fin,setFin] = useState(false)
    const [pressStart, setPressStart] = useState(false)
    const [timeSaved, setTimeSaved] = useState(false)
    const location = useLocation()
    const id = location.pathname.slice(1)
    console.log(id)

    useEffect(() => {
        let interval = null;
        if (timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timeOn])

    const formatTime = () => {
        const hours = ("0" + Math.floor((time / 60000) % 100)).slice(-2)
        const minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
        const seconds = ("0" + Math.floor((time / 10) % 100)).slice(-2)
        return `${hours}:${minutes}:${seconds}`
    }

    useEffect(() => {
    }, [completionTime])


    const saveTime = () => {
        setCompletionTime(formatTime())
    }

    const recordTime = () => {
        axios.put(`http://localhost:5003/api/regimen/${id}/exerciseQueueUpdate`, {
            completionTime
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <div className={classes.Div}>
            <div className={classes.Container}>
                <div className={classes.StopClockContainer}>
                    <div className={classes.NumbersDiv}>
                        <h1 className={classes.H1}>{formatTime()}</h1>
                    </div>
                    <div className={classes.ButtonDiv}>
                        <button className={classes.Start} disabled={pressStart} onClick={(e) => {
                            if (timeSaved === true) {
                                e.currentTarget.disabled = true
                            }
                            e.currentTarget.disabled = true
                            setPressStart(true)
                            setTimeOn(true)
                        }}>Start</button>
                        <button className={classes.Stop} disabled={timeSaved} onClick={(e) => {
                            if (timeSaved === true) {
                                e.currentTarget.disabled = true
                            }
                            setFin(true)
                            setTimeOn(false)
                        }}>Stop</button>
                        <button className={classes.Resume} disabled={timeSaved} onClick={(e) => {
                            if (timeSaved === true) {
                                e.currentTarget.disabled = true
                            }
                            
                            setFin(false)
                            setTimeOn(true)
                        }}>Resume</button>
                        <button className={classes.Reset} disabled={timeSaved}  onClick={(e) => {
                            if (timeSaved === true) {
                                e.currentTarget.disabled = true
                            }
                            setPressStart(false)
                            setFin(false)
                            setTime(0)
                            setTimeOn(false)
                        }}>Reset</button>
                        <button className={classes.SaveTime} disabled={!fin} onClick={(e) => {
                            e.currentTarget.disabled = true
                            setPressStart(true)
                            setFin(true)
                            setTimeSaved(true)
                            saveTime()
                        }}>Save Time</button>
                        <button className={classes.Finish} disabled={!timeSaved} onClick={(e) => {
                            e.currentTarget.disabled = true
                            recordTime()
                            setInitiateWorkout(true)
                        }}>Finish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InititateWorkoutPage
