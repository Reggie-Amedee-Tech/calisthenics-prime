import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWorkoutRegimens } from '../features/GetWorkoutRegimens.js';

const GetAllWorkoutsRegimens = () => {
    const workoutRegimen = useSelector(state => state.getWorkoutRegimens)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getWorkoutRegimens())
    }, [])


  return (
    <div>
        {workoutRegimen.workoutRegimens.map(workout => {
            return <p key={workout._id}>{workout.workoutRegimen}</p>
        })}

    </div>
  )
}

export default GetAllWorkoutsRegimens