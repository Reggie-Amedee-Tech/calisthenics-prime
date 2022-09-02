import CreateExerciseForm from './components/CreateExerciseForm';
import GetAllExercises from './views/GetAllExercises';
import CreateRegimenForm from './components/CreateRegimenForm';
import GetAllWorkoutsRegimens from './views/GetAllWorkoutsRegimens';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='' element={<CreateExerciseForm />}/>
      <Route path='allExercises' element={<GetAllExercises />}/>
      <Route path="createWorkout" element={<CreateRegimenForm />}/>
      <Route path="allWorkoutRegimens" element={<GetAllWorkoutsRegimens />}/>
      </Routes>
    
  );
}

export default App;
