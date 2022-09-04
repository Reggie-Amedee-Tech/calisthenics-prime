import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const StartWorkoutRegimen = () => {
    const [workoutName, setWorkoutName] = useState('')
    const [reps, setReps] = useState(0)
    const [detailedWorkout, setDetailedWorkout] = useState([])

    const location = useLocation()
    const id = location.pathname.slice(20)

    useEffect(() => {
        axios.get(`http://localhost:5003/api/regimen/workoutRegimens/${id}`)
            .then(res => {
                console.groupCollapsed(res.data)
                setDetailedWorkout([res.data])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const workout = {
        name: workoutName,
        numberOfReps: reps
    }

    const onSubmitHandler = e => {
        e.preventDefault()

        axios.post('')
    }

    // const onsubmitHandler = (e) => {
    //     e.preventDefault()
    //     axios.post('')
    // }


    return (
        <div>
            {detailedWorkout.map(dworkout => {
                return <div key={dworkout._id}>
                    <h1>{dworkout.workoutRegimen}</h1>
                    <button>Start Workout</button>
                </div>
                
            })}

        </div>
    )
}

export default StartWorkoutRegimen