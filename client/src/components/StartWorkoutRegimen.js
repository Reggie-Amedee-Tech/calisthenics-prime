import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const StartWorkoutRegimen = () => {
    const [detailedWorkout, setDetailedWorkout] = useState([])

    const location = useLocation()
    const id = location.pathname.slice(20)

    const instance = axios.create({
        withCredentials: true
    });

    useEffect(() => {
        instance.get(`http://localhost:3000/api/regimen/workoutRegimens/${id}`)
            .then(res => {
                setDetailedWorkout([res.data])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <div>
            {detailedWorkout.map(dworkout => {
                return <div key={dworkout._id}>
                    <h1>{dworkout.workoutRegimen}</h1>
                    <Link to='startWorkout'>Start Workout</Link>
                </div>
            })}
        </div>
    )
}

export default StartWorkoutRegimen