import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../../utils/validation/Validation'
import { useSelector } from 'react-redux'



const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: '',
    role:''
}

function Register() {
    const [user, setUser] = useState(initialState)
    const auth = useSelector(state => state.auth)
    const {name, email, role, password,cf_password, err, success} = user

    

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: '', role:''})
    }

    const handleChangeSelect = e => {
        const {value} = e.target
        setUser({...user, role:value, err: '', success: ''})
        console.log(value)
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            if(auth.isAdmin){
                const res = await axios.post('http://localhost:3005/api/register_admin', {
                    name, email, password, role
            })
                setUser({...user, err: '', success: res.data.msg})
            } else {
                const res = await axios.post('http://localhost:3005/api/register', {
                    name, email, password
            })
                setUser({...user, err: '', success: res.data.msg})
            }
            

        } catch (err) {
            console.log(err.response)
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    return (
        <div className="login_page">
            <h2>Register</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="cf_password">Confirm Password</label>
                    <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                </div>
            
            {auth.isAdmin

              ?<div>
                    <label htmlFor="cf_password">Role  </label>
                    <select name="select" onClick={handleChangeSelect}>
                        <option value="0" selected>Estudiante</option>
                        <option value="1">Administrador</option>
                        <option value="2">Formador</option>
                    </select>
                </div>
                :''
            }
                <div className="row">
                    <button type="submit">Register</button>
                </div>
            </form>
            {auth.isAdmin
             ?''
              :<p>Already an account? <Link to="/login">Login</Link></p>
            }
        </div>
    )
}

export default Register