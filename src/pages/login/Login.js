import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import SignupSide from '../../assets/login.svg';
import './login.scss';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [error, setError] = useState(''); 

    const navigate = useNavigate();
    const { login } = UserAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/home');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

    return (

      <div className='body-container'>
      <section className='side'>
        <img className='side-img' src={SignupSide} alt="login" />
      </section>
      <section className='main'>
        <div className='signup-container'>
          <p className='title'>Welcome Back</p>
          <div className='separator'></div>
          <p className='welcome-message'>Scheduling made easy - Now never miss a class with a friend!</p>

          {/* Form */}
          <form onSubmit={handleLogin} className='signup-form'>
            {/* Email */}
              <div className='form-control'>
                <input 
                onChange= {
                    (e) => { 
                      setEmail(e.target.value);
                      setError(''); }
                  } 
                type="email" name="email" id="email" required autoComplete="off" placeholder="Email"></input>
                <i className="fa-solid fa-envelope"></i>
              </div>
              {/* Password */}
              <div className='form-control'>
                <input 
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }} 
                  type="password" name="password" id="password" required autoComplete="off" placeholder="Password"></input>
                <i className="fa-solid fa-key"></i>
              </div>
              { error && <span className='error'> {error} </span>}
              {/* Sign up button */}
              <button type='submit' className='button is-info is-rounded'>Login</button>
              <p className='signup-text'>
                  Don't have an account yet ?
              </p>
              <Link to="/signup" className='sign-text'>Sign Up</Link>
          </form>
        </div>
      </section>
    </div>
    )
}

export default Login
