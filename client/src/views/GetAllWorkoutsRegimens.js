import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getWorkoutRegimens } from '../features/GetWorkoutRegimens.js';
import classes from '../assets/getAllWorkoutRegimens.module.css'
import UnauthorizedPage from '../components/UnauthorizedPage.js';

const GetAllWorkoutsRegimens = () => {
  const [loaded, setLoaded] = useState(false)

  const workoutRegimen = useSelector(state => state.getWorkoutRegimens)
  const { userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWorkoutRegimens())
  }, [])

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (

    <div className={classes.Div}>
      {userToken ? <div className={classes.Container}>
        <table className={classes.Table}>
          <thead>
            {
              loaded === false ? <tr className={classes.TableRow}>
                <th className={classes.TableHead}>Loading...</th>
              </tr> : <tr className={classes.TableRow}>
                <th className={classes.TableHead}>Regimen Name</th>
                <th className={classes.TableHead}>Workouts Completed</th>
                <th className={classes.TableHead}>Date</th>
                <th className={classes.TableHead}>Time</th>
                <th className={classes.TableHead}>View</th>
              </tr>
            }
          </thead>
          <tbody>
            {workoutRegimen.workoutRegimens.map(workout => {
              let arr = []
              let date = workout.createdAt.slice(0, 10)
              let year = workout.createdAt.slice(0, 4)

              for (let i = 0; i < date.length; i++) {
                if (i > 4) {
                  arr.push(date[i])
                }
              }

              const workoutDate = arr.toString().replace(/,/g, "") + "-" + year

              return <tr key={workout._id} className={classes.TableBottomRow}>
                <td className={classes.TableData}>{workout.workoutRegimen}</td>
                <td className={classes.TableData}>{workout.workouts.length}</td>
                <td className={classes.TableData}>{workoutDate}</td>
                <td className={classes.TableData}>{workout.completionTime}</td>
                <td className={classes.TableData}><Link to={`${workout._id}`} className={classes.Link}>View Workout</Link></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
        : <UnauthorizedPage />}
    </div>
  )
}

export default GetAllWorkoutsRegimens