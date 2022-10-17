import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Signup.css'

const Signup = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('password should be 6 characters or more')
            return;
        }
        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-titel'>Signup</h2>
            <form onSubmit={handleSubmit}>
                {/* <form> */}
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="signup" />
            </form>
            <p><small>Already have an account? <Link to='/login'><span>Login</span></Link> </small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Signup;