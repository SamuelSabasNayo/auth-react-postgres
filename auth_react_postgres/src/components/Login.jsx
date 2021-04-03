import React, { useState, useCallback, useContext } from 'react';
import { useHistory, withRouter } from 'react-router';
import firebase from '../config/firebase.config';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Apis from '../apis/Apis';

import Toaster from './pages/Toaster';

const Login = () => {
  const history = useHistory();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  // const { token, setToken } = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e) => {
      e.preventDefault();
      try {
        if (email === '') {
          Toaster('error', 'Email is required!')
        } else if (password === '') {
          Toaster('error', 'Password is required!')
        } else {
          const response = await Apis.post('/user/signin', {
            email,
            password
          });
          const { currentUser } = response.data;
          console.log(currentUser);
          localStorage.setItem('token', JSON.stringify(currentUser));
          // localStorage.setItem('token', JSON.stringify(token));
          Toaster('success', 'Logged-in successfully!');
          setTimeout(() => {
              history.push('/');
          }, 3000);
        }
      } catch (error) {
          Toaster('error', error.message);
      }
    }
    
    return (
        <React.Fragment>
            <div style={{width: '100%'}}>
                <h2
                    style={{textAlign: 'center', color: '#78472c', padding: '10px'}}
                >
                    Login
                </h2>
                <form onSubmit={handleLogin} className='userForm'>
                    <div>
                        <label>
                            Email:
                        </label> <br/>
                        <input
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className='signupInput' name='email' type="email" placeholder='example@gmail.com...' />
                    </div> <br/>
                    <div>
                        <label>
                            Password:
                        </label> <br/>
                        <input
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className='signupInput' name='password' type="password" placeholder='' />
                    </div> 
                    <br />
                    <br />
                    <div>
                        <input
                            type='submit'
                            value='Login'
                            style={submitBtn}
                        />
                    </div>
                    <br />
                    <Link to='/signup' style={{color: '#e8491d'}}>
                        Signup
                    </Link>
                        <span style={{color: '#78472c'}}> if you don't have an account.</span>
                </form>
            </div>
        </React.Fragment>
    )
}

let submitBtn = {
    flex: '1',
    background: '#a7b5be',
    fontSize: '18px',
    color: '#e8491d',
    outline: 'none',
    border: 'none',
    padding: '10px',
    width: '300px',
    'hoover': {
      background: '#e8491d'
    }
}

export default withRouter(Login);