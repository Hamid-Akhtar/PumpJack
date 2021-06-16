import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { ReactComponent as ReactLogo } from './assets/logo.svg';

import './login.css';

const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password ) {
    firstName
    id
  }
}
`;





const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [error, setError] = useState(false);
  const [loginUser, { data }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      if (login.id) {
        props.history.push({ pathname: '/products', state: { id: login.id } });
      }
    },
    onError(err) {
      setError(true)
    }
  });


  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);
    await loginUser({
      variables: {
        email: email,
        password: password
      }
    })
    if (data && data.login.userId) {

    }
  };
  return (
    <div className="login-wrapper">
      <div className="login">
        <ReactLogo className="logo" />
        <form className="loginForm shadow" autocomplete="off" onSubmit={handleSubmit}>
          <p>
            <strong>Log in to your account</strong>
          </p>
          <label className='label'>Email</label>
          <br />
          <input
            placeholder="Enter your Email"
            className="input"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <label className={error? ' label error-label':'label'}>Password</label>
          <br />
          <input
            placeholder="Enter your Password"
            className={error?'input error-input':'input'}
            type="password"
            autocomplete="off"
            value={password}
            onChange={e => setPassWord(e.target.value)}
          />
          {error?<span className="error-info">Wrong Password. Try again or reset.</span>:''}
          
          <label className="labelForgetPass" >Forget Password?<a href="#">Reset</a></label>
          <button
            className="buttonLogin"
            type="submit">Login
                    </button>
        </form>
      </div>
    </div>
  );
}

export { Login };