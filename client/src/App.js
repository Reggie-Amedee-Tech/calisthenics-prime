import CreateExerciseForm from './components/CreateExerciseForm';
import GetAllExercises from './views/GetAllExercises';
import CreateRegimenForm from './components/CreateRegimenForm';
import GetAllWorkoutsRegimens from './views/GetAllWorkoutsRegimens';
import DetailedRegimenPage from './views/DetailedRegimenPage';
import RecordWorkout from './components/RecordWorkout';
import {Routes, Route} from 'react-router-dom'
import './App.css';


function App() {
  
  return (
    <Routes>
      <Route path='' element={<CreateExerciseForm />}/>
      <Route path='allExercises' element={<GetAllExercises />}/>
      <Route path="createWorkout" element={<CreateRegimenForm />}/>
      <Route path="createWorkout/:id" element={<RecordWorkout />}/>
      <Route path="allWorkoutRegimens" element={<GetAllWorkoutsRegimens />}/>
      <Route path="allWorkoutRegimens/:id" element={<DetailedRegimenPage />}/>
      {/* <Route path='allWorkoutRegimens/:id/startWorkout' element={<RecordWorkout />}/> */}
    </Routes>
  );
}

export default App;
