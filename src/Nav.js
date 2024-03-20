import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear(); // Clear user data from localStorage
    navigate('/login'); // Navigate to login page after logout
  };

  return (
    <div className='aqua'>
      <img
        alt='logo'
        className='logo'
        src="https://th.bing.com/th/id/OIP.KBQr5aSklxnoHhkhk_mWswHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      />
      {auth ? (
        <div className='nav-ul'>
          <li>
            <Link className="lip" to="/">
              Products
            </Link>
            <br />
          </li>
          <li>
            <Link className="lip" to="/add">
              Add Product
            </Link>
          </li>
          <li>
            <Link className="lip" to="/update">
              Update
            </Link>
          </li>
          <li>
           
          </li>
          <li>
            <Link className="lip" onClick={logout} to="/login">
              Logout 
            </Link>
          </li>
        </div>
      ) : (
        <ul className='nav-ul right'>
          <li>
            <Link className="lip" to="/SignUp">
              SignUp
            </Link>
          </li>
          <li>
            <Link className="lip" to="/login">
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
