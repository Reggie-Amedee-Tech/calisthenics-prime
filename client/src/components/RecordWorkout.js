import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const RecordWorkout = () => {
    const [workoutName, setWorkoutName] = useState('')
    const [reps, setReps] = useState(0)
    const [done, setDone] = useState(false)
    const [workouts, setWorkouts] = useState([])

    const location = useLocation()

    const id = location.pathname.slice(20,44)

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

    console.log(workouts)

    const recordWorkout = e => {
        while(done === false) {
            return <div>
                <input type='text' onChange={e => setWorkoutName(e.target.value)} value={workoutName}/>
                <input type="number" onChange={e => setReps(e.target.value)}/>
                <button onClick={() => {
                    addWorkout({
                        workoutName: workoutName,
                        reps: reps
                    })
                }}>Add Exercise</button>
                <button onClick={() => {
                    setDone(true)
                    saveWorkout()
                }}>Record Exercise</button>
            </div>

            
        }
        return <h1>Workout Saved, check results here!</h1>
    }

  return (
    <div>
        {recordWorkout()}

    </div>
  )
}

export default RecordWorkout