import React, { useEffect, useState } from 'react'
import axios from 'axios';
import classes from '../assets/createWorkoutRegimen.module.css'
import { useNavigate } from 'react-router-dom'


const CreateRegimenForm = () => {
    const [workoutRegimen, setWorkoutRegimen] = useState('');
    const [workouts, setWorkouts] = useState([])
    const [workout, setWorkout] = useState([])

    const navigate = useNavigate()

    let id = workout.map(werk => {
        return werk._id
    })

    id = id[0]

    const createWorkout = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5003/api/regimen/exerciseQueueCreate', {
            workoutRegimen,
            workouts
        })
            .then(res => {
                setWorkout([res.data])
                console.log(res)    
            })
            .catch(err => {
                console.log(err)
            })      
    }
    useEffect(() => {
        if (id === undefined) {
            return
        } else {
            navigate(`${id}`)
        }
    }, [workout])

    return (
        <div className={classes.Div}>
            <form onSubmit={createWorkout}>
                <div className={classes.Container}>
                    <div className={classes.RegimenCard}>
                        <div className={classes.Left}>
                            <div className={classes.LeftContainer}>
                                <h3 className={classes.LeftH3}>App Name</h3>
                                <p className={classes.LeftP}>"Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                        <div className={classes.Right}>
                            <div className={classes.RightContainer}>
                                <h3 className={classes.RightH3}>Create Workout Regimen</h3>
                                <input type="text" placeholder='Input Here' onChange={(e) => setWorkoutRegimen(e.target.value)} className={classes.RightInput} />
                                <button type="submit" className={classes.RightButton}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateRegimenForm