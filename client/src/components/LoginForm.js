import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/user/userAction'
import { useNavigate } from 'react-router-dom'
import classes from '../assets/login.module.css'
import model from '../pictures/model.jpeg'

const LoginForm = () => {
  const { loading, error } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    dispatch(loginUser(data))
    navigate('/homepage')
  }

  return (
    <div className={classes.Div}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={classes.Container}>
          <div className={classes.PicCon}>
            <img src={model} alt="fitness model" className={classes.Pic} />
          </div>

          <h2 className={classes.SignUpText}>Login</h2>
          <div className={classes.FormGroup}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className={classes.FormInput}
              {...register('email')}
              required
            />
          </div>
          <div className={classes.FormGroup}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className={classes.FormInput}
              {...register('password')}
              required
            />
          </div>
          <button type='submit' className={classes.Button}>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
export default LoginForm