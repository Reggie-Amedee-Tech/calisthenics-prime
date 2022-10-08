import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { registerUser } from '../features/user/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classes from '../assets/signUpForm.module.css'
import adeel from '../pictures/adeel.jpeg'

const SignUpForm = () => {

    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const { loading, error, userInfo, success } = useSelector(state => state.user)


    const submitForm = (data) => {

        if (data.password !== data.confirmPassword) {
            alert('Password mismatch')
            return
          }

        // transform email string to lowercase to avoid case sensitivity issues during login
        data.email = data.email.toLowerCase()
        dispatch(registerUser(data))
        navigate('/login')
        console.log(data)
    }


    return (
        <div className={classes.Div}>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={classes.Container}>
                    <div className={classes.PicCon}>
                        <img src={adeel} alt="fitness model" className={classes.Pic}/>
                    </div>
                    <h2 className={classes.SignUpText}>Sign Up Today To Get Started</h2>
                <div className={classes.FormGroup}>
                    <label htmlFor='firstName'>User Name</label>
                    <input
                        type='text'
                        className={classes.FormInput}
                        {...register('userName')}
                        required
                    />
                </div>
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
                <div className={classes.FormGroup}>
                    <label htmlFor='email'>Confirm Password</label>
                    <input
                        type='password'
                        className={classes.FormInput}
                        {...register('confirmPassword')}
                        required
                    />
                </div>
                <button type='submit' className={classes.Button}>
                    Register
                </button>
                </div>
            </form>
        
        </div>
    )
}

export default SignUpForm