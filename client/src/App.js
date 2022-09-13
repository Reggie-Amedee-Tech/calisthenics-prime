import CreateRegimenForm from './components/CreateRegimenForm';
import GetAllWorkoutsRegimens from './views/GetAllWorkoutsRegimens';
import DetailedRegimenPage from './views/DetailedRegimenPage';
import RecordWorkout from './components/RecordWorkout';
import {Routes, Route} from 'react-router-dom'
import './App.css';


function App() {
  
  return (
    <Routes>
      <Route path='' element={<CreateRegimenForm/>}/>
      <Route path=":id" element={<RecordWorkout />}/>
      <Route path="allWorkoutRegimens" element={<GetAllWorkoutsRegimens />}/>
      <Route path="allWorkoutRegimens/:id" element={<DetailedRegimenPage />}/>
    </Routes>
  );
}

export default App;
