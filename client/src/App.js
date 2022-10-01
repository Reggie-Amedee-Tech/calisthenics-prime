import CreateRegimenForm from './components/CreateRegimenForm';
import GetAllWorkoutsRegimens from './views/GetAllWorkoutsRegimens';
import DetailedRegimenPage from './views/DetailedRegimenPage';
import RecordWorkout from './components/RecordWorkout';
import LandingPage from './views/LandingPage';
import SignUpPage from './views/SignUpPage';
import LoginPage from './views/LoginPage';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import classes from './App.module.css';

function App() {

  const navigate = useNavigate()

  return (
    <div>
      <header>
        <div className={classes.NavBar}>
          <div className={classes.LogoDiv}>
            <h1 className={classes.Logo}>&copy;Strength-Track</h1>
          </div>
          <div className={classes.Buttons}>
            <h1 className={classes.StartRegimen} onClick={() => {
              navigate('homepage')
            }}>Start Regimen</h1>
            <h1 className={classes.Workouts} onClick={() => {
              navigate('allWorkoutRegimens')
            }}>Workouts</h1>
            <h1 className={classes.Workouts}>Logout</h1>
          </div>
        </div>
      </header>
      <Routes>
        
        <Route path='' element={ <LandingPage/> } />
        <Route path="login" element={<LoginPage />}/>
        <Route path="register" element={<SignUpPage/> }/>
        <Route path='homepage' element={<CreateRegimenForm />}/>
        <Route path=":id" element={<RecordWorkout />} />
        <Route path="allWorkoutRegimens" element={<GetAllWorkoutsRegimens />} />
        <Route path="allWorkoutRegimens/:id" element={<DetailedRegimenPage />} />
      </Routes>
    </div>
  );
}

export default App;
