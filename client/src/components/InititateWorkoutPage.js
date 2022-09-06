import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react'

const InititateWorkoutPage = (props) => {
    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false)
    const [completionTime, setCompletionTime] = useState('00:00:00')
    const {id, setInitiateWorkout} = props;


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
        console.log('Time is now', completionTime)
        
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
    <div>
        <div>
            {formatTime()}
        </div>
        <div>
        <button onClick={() => {
            setTimeOn(true)
        }}>Start</button>
        <button onClick={() => {
            setTimeOn(false)
        }}>Stop</button>
        <button onClick={() => {
            setTimeOn(true)
        }}>Resume</button>
        <button onClick={() => {
            setTime(0)
            setTimeOn(false)
        }}>Reset</button>
        <button onClick={() => {
            saveTime()
        }}>Save Time</button>
        <button onClick={() => {
            recordTime()
            setInitiateWorkout(true)
        }}>Finish</button>
        </div>
    </div>
  )
}

export default InititateWorkoutPage
