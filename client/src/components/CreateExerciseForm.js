import classes from '../assets/createExercise.module.css'
import React, { useState } from 'react'
import axios from 'axios'

const CreateExerciseForm = () => {
    const [exerciseName, setExerciseName] = useState('')
    const [exerciseDescription, setExerciseDescription] = useState('')
    const [difficulty, setDifficulty] = useState('')


    const onSubmitHandler = (e) => {
      e.preventDefault()
      
      axios.post('http://localhost:5003/api/createExercise', {
        exerciseName,
        difficulty,
        exerciseDescription
        
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err.message)
    })

    setExerciseName('')
    setDifficulty('')
    setExerciseDescription('')
    }

    console.log('HAYYY')
    
  return (
    <div className={classes.Page}>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.Container}>
            <h1 className={classes.Title}>Create Workout</h1>
            <div className={classes.WorkoutForm}>
              <input type='text' value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} placeholder="Name Of Exercise" className={classes.Input}/>
              <input type='text' value={difficulty} onChange={(e) => setDifficulty(e.target.value)} placeholder="Difficulty Level" className={classes.Input2}/>
              <textarea rows={10}  type="text" value={exerciseDescription} onChange={(e) => setExerciseDescription(e.target.value)} placeholder="Description Of Exercise" className={classes.TextArea}/>
              </div>
            <button type="submit" className={classes.Button}>Submit</button>
            </div>
        </form>
        
    </div>
  )
}

export default CreateExerciseForm