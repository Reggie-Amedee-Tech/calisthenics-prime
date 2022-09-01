import CreateExerciseForm from './components/CreateExerciseForm';
import GetAllExercises from './views/GetAllExercises';
import CreateRegimenForm from './components/CreateRegimenForm';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='' element={<CreateExerciseForm />}/>
      <Route path='allExercises' element={<GetAllExercises />}/>
      <Route path="createWorkout" element={<CreateRegimenForm />}/>
      </Routes>
    
  );
}

export default App;
