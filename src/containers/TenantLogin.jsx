import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TenantLoginForm from '../components/tenantLoginForm/TenantLoginForm';
// import Logo from '../components/logo/Logo';
import { loginPost } from '../services/auth.js';

function TenantLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const login = (event) => {
    event.preventDefault();
    loginPost(email, password)
      .then(() => history.push('./dashboard'));
    
  };

  return (
    <div>
      {/* <Logo /> */}
      <TenantLoginForm
        email={email}
        password={password}
        login={login}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword} />
      <Link to="/tenantSignUp">Need to signup? Click here.</Link>
    </div>
  );
}

export default TenantLogin;
