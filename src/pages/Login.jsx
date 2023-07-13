import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = e => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  };

  return (
    <div>
      <h1>Page for the login</h1>
      <form className='form' action="#" onSubmit={login}>
        <h2>Sign In</h2>
        <input className='input' type='text' placeholder='Enter login'/>
        <input className='input' type='password' placeholder='Enter password'/>
        <button className='form__btn'>Sign in</button>
      </form>
    </div>
  );
}

export default Login;
