import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-titel'>Signup</h2>
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
            <div className='form-control'>
               <label htmlFor="confirm">Confirm Password</label>
               <input type="password" name="password" required />
            </div>
            <input className='btn-submit' type="submit" value="signup" />
            </form>
            <p><small>Already have an account? <Link to='/login'><span>Login</span></Link> </small></p>
        </div>
    );
};

export default Signup;