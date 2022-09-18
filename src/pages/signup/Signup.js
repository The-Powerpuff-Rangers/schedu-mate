import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import loginSide from '../../assets/login-side.svg';
import './Signup.scss';

const Signup = () => {
  // Set up state for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [error, setError] = useState(''); 

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/details');
    } catch (e) {
      setError(e.message);
      console.log(e);
      console.log(e.message);
    }
  }
  
  return (
    <div className='body-container'>
      <section className='side'>
        <img className='side-img-s' src={loginSide} alt="login" />
      </section>
      <section className='main'>
        <div className='signup-container'>
          <p className='title'>Create an account!</p>
          <div className='separator'></div>
          <p className='welcome-message'>Scheduling made easy - Now never miss a class with a friend!</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className='login-form'>
            {/* Email */}
              <div className='form-control'>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required autoComplete="off" placeholder="Email"></input>
                <i className="fa-solid fa-envelope"></i>
              </div>
              {/* Password */}
              <div className='form-control'>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required autoComplete="off" placeholder="Password"></input>
                <i class="fa-solid fa-key"></i>
              </div>
              { error && <span className='error'> {error.slice(9, error.length -1)} </span>}
              {/* Sign up button */}
              <button type = 'submit'className='button is-info is-rounded'>Sign Up</button>
              <p className='login-text'>
                  Already have an account ?
              </p>
              <Link to="/login" className='log-text'>{' '}Login</Link>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup
