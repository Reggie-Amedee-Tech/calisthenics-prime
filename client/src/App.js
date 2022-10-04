import React, { useEffect } from 'react'
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
import {logout} from './features/user/userSlice'

function App() {

  const navigate = useNavigate()

  const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  console.log(userToken)

  useEffect(() => {
    if (!userToken ) {
      return
    } 
      dispatch(getUserDetails())
    
  }, [])


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
            <h1 className={classes.Workouts} onClick={() => {
              dispatch(logout())
              navigate('')
            }}>Logout</h1>

            <h5>{userInfo ? `Logged in as ${userInfo.email}` : "You're not logged in"}</h5>
          </div>
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
