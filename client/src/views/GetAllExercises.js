import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getExercises } from '../features/GetExercises'

const GetAllExercises = () => {
    const getExercise = useSelector(state => state.getExercise)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getExercises())
    }, [])
    
  return (
    <div>
        {getExercise.exercises.map(exercise => {
            return <p>{exercise.exerciseName}</p>
        })}
    </div>
  )
}

export default GetAllExercises