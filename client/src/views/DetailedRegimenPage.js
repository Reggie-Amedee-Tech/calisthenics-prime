import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classes from '../assets/detailedWorkoutPage.module.css'
import { useLocation } from 'react-router-dom'

const DetailedRegimenPage = () => {
    const location = useLocation()
    const [workout, setWorkout] = useState([])
    const id = location.pathname.slice(20)
    
    

    useEffect(() => {
        axios.get(`http://localhost:5003/api/regimen/workoutRegimens/${id}`)
            .then(res => {
                setWorkout([res.data])
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className={classes.Div}>
            <div className={classes.Container}>
            <table className={classes.Table}>
                <thead>
                <tr className={classes.TableRow}>
                    <th className={classes.TableHead}>Workout Name</th>
                    <th className={classes.TableHead}>Reps</th>
                </tr>
                </thead>
                <tbody>
                    {workout.map(werk => {
                        return werk.workouts.map((werkout, i) => {
                            return <tr key={i} className={classes.TableBottomRow}>
                                <td className={classes.TableData}>{werkout.workoutName}</td>
                                <td className={classes.TableData}>{werkout.reps}</td>
                            </tr>
                        })
                    })}
                    </tbody>  
            </table>
            </div>
        </div>
    )
}

export default DetailedRegimenPage