import React, {useEffect} from 'react'
import CreateRegimenPage from './views/CreateRegimenPage';
import GetAllWorkoutsRegimens from './views/GetAllWorkoutsRegimens';
import DetailedRegimenPage from './views/DetailedRegimenPage';
import RecordWorkout from './components/RecordWorkout';
import LandingPage from './views/LandingPage';
import SignUpPage from './views/SignUpPage';
import LoginPage from './views/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import classes from './App.module.css';
import { getUserDetails } from './features/user/userAction'
import { logout } from './features/user/userSlice'
import axios from 'axios';

function App() {
  
  const navigate = useNavigate()
  const {userToken, email, loading} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails())
    } 
    return
    
  }, [])

  

  const logoutUser = (e) => {
    e.preventDefault();
    axios.post('https://shielded-citadel-69871.herokuapp.com/logout', {}, { withCredentials: true })
      .then(res => {
        console.log(res, 'You have logged out!')
        dispatch(logout())
        navigate('')
      })
      .catch(err => console.log(err))
  }

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
            }}>Start</h1>
            <h1 className={classes.Workouts} onClick={() => {
              navigate('allWorkoutRegimens')
            }}>Workouts</h1>
            <h1 className={classes.Workouts} onClick={logoutUser}>Logout</h1>
          </div>
          <div className={classes.User}><h5>{loading === true ? <h5>Loading...</h5> : userToken ? `Logged in as ${email}` : "You're not logged in"}</h5></div>
        </div>
      </header>
      <Routes>

        <Route path='' element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route path='homepage' element={<CreateRegimenPage />} />
        <Route path=":id" element={<RecordWorkout />} />
        <Route path="allWorkoutRegimens" element={<GetAllWorkoutsRegimens />} />
        <Route path="allWorkoutRegimens/:id" element={<DetailedRegimenPage />} />
      </Routes>
    </div>
  );
}

export default App;
