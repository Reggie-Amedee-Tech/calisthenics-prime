import axios from 'axios'
import React, { useState, useEffect } from 'react'

const InititateWorkoutPage = (props) => {
    const [time, setTime] = useState(0)
    const [formatedTime, setFormatedTime] = useState('')
    const [timeOn, setTimeOn] = useState(false)
    const [completionTime, setCompletionTime] = useState('')
    const {id} = props;


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

  return (
    <div>
        <div>
            {/* <span>{("0" + Math.floor((time / 60000) % 100)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
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
        }}>Reset</button>
        <button onClick={() => {
            setFormatedTime((prevTime) => {
                return prevTime = formatTime()
            })
            console.log(formatedTime)
        }}>Finish</button>
        </div>
    </div>
  )
}

export default InititateWorkoutPage
