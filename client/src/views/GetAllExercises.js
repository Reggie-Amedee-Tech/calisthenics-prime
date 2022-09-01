import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getExercises } from '../features/GetExercises'
import classes from '../assets/allExercises.module.css'

const GetAllExercises = () => {
    const getExercise = useSelector(state => state.getExercise)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getExercises())
    }, [])

    return (
        <div className={classes.Section}>
            <div className={classes.Container}>
                {getExercise.exercises.map(exercise => {
                    return <div className={classes.WorkoutCard}>
                        <h1>{exercise.exerciseName}</h1>
                        <h3>{exercise.exerciseDescription}</h3>
                        <h5>Difficulty Level: {exercise.difficulty}</h5>
                    </div>

                })}
            </div>
        </div>
    )
}

export default GetAllExercises