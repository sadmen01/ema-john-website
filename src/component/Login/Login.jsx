import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-titel'>Login</h2>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email'required/>
            </div>
            <div className='form-control'>
               <label htmlFor="password">Password</label>
               <input type="password" name="password" required />
            </div>
            <input className='btn-submit' type="submit" value="login" />
            </form>
            <p><small>new to ema john? <Link to='/signup'><span>create a New Account</span></Link> </small></p>
        </div>
    );
};

export default Login;