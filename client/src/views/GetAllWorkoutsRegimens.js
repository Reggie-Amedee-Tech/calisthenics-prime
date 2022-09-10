import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getWorkoutRegimens } from '../features/GetWorkoutRegimens.js';
import classes from '../assets/getAllWorkoutRegimens.module.css'
import dumbell from '../pictures/dumbell.png'


const GetAllWorkoutsRegimens = () => {
  const workoutRegimen = useSelector(state => state.getWorkoutRegimens)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getWorkoutRegimens())
  }, [])


  return (
    <div className={classes.Div}>
      <div className={classes.Container}>
        {workoutRegimen.workoutRegimens.map(workout => {
          return <div className={classes.WorkoutCard} key={workout._id}>
            <div>
              <img src={dumbell} alt="dumbell-icon" className={classes.Img} />
            </div>
            <div className={classes.MidCard}>
            <p>{workout.workoutRegimen}</p>
            <p>{workout.createdAt}</p>
            </div>
            <Link to={`#`} className={classes.Link}>Start Workout</Link>
          </div>

        })}
      </div>
    </div>
  )
}

export default GetAllWorkoutsRegimens