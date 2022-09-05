import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        return <div>
          <p key={workout._id}>{workout.workoutRegimen}</p>
          {/* <Link to={`${workout._id}/startWorkout`}>Set up workout</Link> */}
          <Link to="#">Start Workout</Link>
        </div>


      })}


    </div>
  )
}

export default GetAllWorkoutsRegimens