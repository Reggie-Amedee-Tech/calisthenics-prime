import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { registerUser } from '../features/user/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {

    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const { loading, error, userInfo, success } = useSelector(state => state.user)

    useEffect(() => {
        // redirect user to login page if registration was successful
        if (success) navigate('/login')
        // redirect authenticated user to profile screen
        if (userInfo) navigate('/user-profile')
      }, [navigate, userInfo, success])


    const submitForm = (data) => {

        if (data.password !== data.confirmPassword) {
            alert('Password mismatch')
            return
          }

        // transform email string to lowercase to avoid case sensitivity issues during login
        data.email = data.email.toLowerCase()
        dispatch(registerUser(data))
        console.log(data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className='form-group'>
                    <label htmlFor='firstName'>User Name</label>
                    <input
                        type='text'
                        className='form-input'
                        {...register('userName')}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className='form-input'
                        {...register('email')}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        className='form-input'
                        {...register('password')}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Confirm Password</label>
                    <input
                        type='password'
                        className='form-input'
                        {...register('confirmPassword')}
                        required
                    />
                </div>
                <button type='submit' className='button'>
                    Register
                </button>
            </form>

        </div>
    )
}

export default SignUpForm