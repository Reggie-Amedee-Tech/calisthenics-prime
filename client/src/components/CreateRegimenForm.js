import React, {useState} from 'react'
import axios from 'axios';


const CreateRegimenForm = () => {
    const [workoutRegimen, setWorkoutRegimen] = useState('');
    const [workouts,setWorkouts] = useState([])


    const createWorkout = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5003/api/regimen/exerciseQueueCreate', {
            workoutRegimen,
            workouts
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    


  return (
    <div>
        <form onSubmit={createWorkout}>
        <h1>Create Workout Regimen</h1>
        <input type="text" placeholder='Create Workout Regimen' onChange={(e) => setWorkoutRegimen(e.target.value)}/>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CreateRegimenForm