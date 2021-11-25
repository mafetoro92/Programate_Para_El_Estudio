import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
// import { 
//   showErrMsg,
//   showSuccessMsg
// } from '../../notification/Notification'
import { useDispatch } from 'react-redux'
import './auth.css';
import { dispatchLogin } from '../../actions/authAction';

const Login = () => {

  //Inicializo hooks
  const [user, setUser] = useState({
    email: '',
    password: '',
    err: '',
    success: ''
  }) 
  const dispatch = useDispatch() 
 
const  history = useHistory ();
  const { email, password, err, success } = user

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3005/api/login', {
        email,
        password
      })
      
      setUser({ ...user, err: '', success: res.data.msg })
      window.localStorage.setItem('firstLogin', true)
      window.localStorage.setItem(
        'loggedAgoraUser', JSON.stringify(res.data)
      )
      dispatch(dispatchLogin())
 
      navigate('/landing')
    } catch (err) {
      err.response.data.error &&
        setUser({ ...user, err: err.response.data.error, success: '' })
        console.log(err)
    }
    history.push('/dashboardAspirant')
  }

  return (
    <div className='login_page'>
      <h2>Login</h2>
      {/* {err && showErrMsg(err)}
      {success && showSuccessMsg(success)} */}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            placeholder='Enter email address'
            id='email'
            value={email}
            name='email'
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            id='password'
            value={password}
            name='password'
            onChange={handleChangeInput}
          />
        </div>

        <div className='row'>
          <button type='submit'>Login</button>
        </div>
      </form>

      <p>
        New Customer? <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default Login
