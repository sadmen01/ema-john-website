import React from 'react';
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const {user,logOut} = UserContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ?
                <button className='btn-logout' onClick={logOut}> LogOut</button>
                :
                    <>
                    <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;