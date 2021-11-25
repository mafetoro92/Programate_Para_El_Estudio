import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
import { 
  showErrMsg,
  showSuccessMsg
} from '../../notification/Notification'
import { dispatchLogin } from '../../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

const Login = () => {

  //Inicializo hooks
  const [user, setUser] = useState({
    email: '',
    password: '',
    err: '',
    success: ''
  }) 
  const dispatch = useDispatch() 
  const navigate = useNavigate() 

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
    }
  }

  //     const responseGoogle = async (response) => {
  //         try {
  //             const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

  //             setUser({...user, error:'', success: res.data.msg})
  //             localStorage.setItem('firstLogin', true)

  //             dispatch(dispatchLogin())
  //             history.push('/')
  //         } catch (err) {
  //             err.response.data.msg &&
  //             setUser({...user, err: err.response.data.msg, success: ''})
  //         }
  //     }

  //     const responseFacebook = async (response) => {
  //         try {
  //             const {accessToken, userID} = response
  //             const res = await axios.post('/user/facebook_login', {accessToken, userID})

  //             setUser({...user, error:'', success: res.data.msg})
  //             localStorage.setItem('firstLogin', true)

  //             dispatch(dispatchLogin())
  //             history.push('/')
  //         } catch (err) {
  //             err.response.data.msg &&
  //             setUser({...user, err: err.response.data.msg, success: ''})
  //         }
  //     }

  return (
    <div className='login_page'>
      <h2>Login</h2>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}

      {/* <Formik
                initialValues={{
					email: '',
					password: '',
                    err: '',
                    success: ''
				}}
                validate={(values) => {
					let errors = {};

					// Validacion correo
					if(!values.email){
						errors.email = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
						errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errors;
				}}
                onSubmit={(values, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					setFormSend(true);
					setTimeout(() => setFormSend(false), 5000);
				}}
			>
                {( {errors} ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Email</label>
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="Enter email address"
							/>
							<ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
						</div>
                        <div>
							<label htmlFor="nombre">Password</label>
							<Field
								type="text" 
								id="Password" 
								name="Password" 
								placeholder="Enter your password"
							/>
						</div>
                        <div className="row">
                            <button type="submit">Login</button>
                            <Link to="/forgot_password">Forgot your password?</Link>
                        </div>
                    </Form>
                )}
                    
            </Formik> */}

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
          <Link to='/forgot_password'>Forgot your password?</Link>
        </div>
      </form>

      {/* <div className="hr">Or Login With</div>

            <div className="social">
                <GoogleLogin
                    clientId="Your google client id"
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                
                <FacebookLogin
                appId="Your facebook app id"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} 
                />

            </div> */}

      <p>
        New Customer? <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default Login
