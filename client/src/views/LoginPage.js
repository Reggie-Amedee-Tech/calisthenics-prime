
import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const user = useSelector(state => state.login)
    const dispatch = useDispatch()


    const onSubmitHandler = (e) => {
        e.preventDefault()
        
        // navigate('/homepage')
    }

    console.log(user.user)

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" >Submit</button>
        </form>

    </div>
  )
}

export default LoginPage