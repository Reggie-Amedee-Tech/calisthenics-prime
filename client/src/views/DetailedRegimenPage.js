import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classes from '../assets/detailedWorkoutPage.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

const DetailedRegimenPage = () => {
    const location = useLocation()
    const [workout, setWorkout] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    const id = location.pathname.slice(20)
    console.log(id)

    const deleteRegimen = (id) => {
        axios.delete(`https://shielded-citadel-69871.herokuapp.com/api/regimen/${id}/deleteExercise`)
        .then(res => {
            console.log(res)

        })
        .catch(err => console.log(err.message))
    }

    useEffect(() => {
        axios.get(`https://shielded-citadel-69871.herokuapp.com/api/regimen/workoutRegimens/${id}`)
            .then(res => {
                setWorkout([res.data])
                setLoaded(true)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                setLoaded(false)
            })
    }, [])

    

    return (
        <div className={classes.Div}>
            <div className={classes.Container}>
                <table className={classes.Table}>
                    <thead>
                        {
                            loaded === true ? <tr className={classes.TableRow}>
                                <th className={classes.TableHead}>Workout Name</th>
                                <th className={classes.TableHead}>Reps</th>
                            </tr> : <tr className={classes.TableRow}>
                                <th className={classes.TableHead}>Loading...</th>
                            </tr>
                        }
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
                <button onClick={() => {
                    deleteRegimen(id)
                    navigate('/allWorkoutRegimens')
                }} classname={classes.Button}>Delete Regimen</button>
            </div>
        </div>
    )
}

export default DetailedRegimenPage