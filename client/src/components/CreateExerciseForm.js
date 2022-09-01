import React, { useState } from 'react'
import axios from 'axios'

const CreateExerciseForm = () => {
    const [exerciseName, setExerciseName] = useState('')
    const [exerciseDescription, setExerciseDescription] = useState('')
    const [difficulty, setDifficulty] = useState(0)


    const onSubmitHandler = (e) => {
      e.preventDefault()
      console.log(exerciseName,exerciseDescription,difficulty)
      axios.post('http://localhost:5003/api/createExercise', {
        exerciseName,
        exerciseDescription,
        difficulty
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err.message)
    })
    }
    
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <h1>Create Workout</h1>
            <div>
              <label>Exercise Name</label>
              <input type='text' value={exerciseName} onChange={(e) => setExerciseName(e.target.value)}/>
            </div>
            <div>
              <label>Exercise Description</label>
              <input type='text' value={exerciseDescription} onChange={(e) => setExerciseDescription(e.target.value)}/>
            </div>
            <div>
              <label>Difficulty</label>
              <input type='text' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default CreateExerciseForm