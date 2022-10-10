import React, { useEffect, useState } from 'react'
import axios from 'axios';
import classes from '../assets/createWorkoutRegimen.module.css'
import UnauthorizedPage from './UnauthorizedPage'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const CreateRegimenForm = () => {
    const [workoutRegimen, setWorkoutRegimen] = useState('');
    const [workouts, setWorkouts] = useState([])
    const [createdBy, setCreatedBy] = useState('')
    const [workout, setWorkout] = useState([])
    const [errors, setErrors] = useState([])

    const {userToken, userId} = useSelector((state) => state.user)
    console.log(userToken)

    

    const config = {
        headers: { Authorization: `Bearer ${userToken}` }
    };

    console.log(config.headers.Authorization)

    const navigate = useNavigate()

    let id = workout.map(werk => {
        return werk._id
    })

    id = id[0]

    const createWorkout = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5003/api/regimen/exerciseQueueCreate', config, {withCredentials: true}, {
            workoutRegimen,
            workouts
        })
            .then(res => {
                setWorkout([res.data])
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr)
            })
    }

    useEffect(() => {
        if (id === undefined) {
            return
        } else {
            navigate(`/${id}`)
        }
    }, [workout])

    return (
        <div className={classes.Div}>
            {userToken ? <form onSubmit={createWorkout}>
                <div className={classes.Container}>
                    <div className={classes.RegimenCard}>
                        <div className={classes.Left}>
                            <div className={classes.LeftContainer}>
                                <h3 className={classes.LeftH3}><span>&copy;</span>Strength-Track</h3>
                                <p className={classes.LeftP}><span>&copy;</span>Strength-Track is an application that allows you to log your overall strength training process. Please create a workout regimen. Once created, you will be brought to the workout initiate page which will allow you to start your current exercise! After you save your workout, you will be able to log it and see the results in the following page!</p>
                            </div>
                        </div>
                        <div className={classes.Right}>
                            <div className={classes.RightContainer}>
                                <h3 className={classes.RightH3}>Create Workout Regimen</h3>
                                {errors.length > 0 ? <div className={classes.RightInputWithError}>
                                    <input type="text" placeholder='Type Here' onChange={(e) => setWorkoutRegimen(e.target.value)} className={classes.RightInput} />
                                    {errors.map((err, i) => <p key={i} className={classes.ErrorMessage}>Please enter a workout name!</p>)}
                                </div> : <input type="text" placeholder='Type Here' onChange={(e) => setWorkoutRegimen(e.target.value)} className={classes.RightInput} />}
                                <button type="submit" className={classes.RightButton}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form> : <UnauthorizedPage />}
        </div>
    )
}

export default CreateRegimenForm