import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Grid, InputPass, InputText, Rows,
} from '../ui';
import Loader from '../ui/Loader';
import { login } from '../store/actions/userActions';

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;

  background: var(--navbar-bg);
`;

export const LoginContainer = styled.div`
  margin: 30px;
  width: 350px;
  height: 300px;
  background: var(--bg-main);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state?.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/projects';

  useEffect(() => {
    userInfo && history.push(redirect);
  }, [userInfo, history, redirect]);

  const onChangeEmailHandler = e => {
    const val = e.target.value !== '' ? e.target.value : '';
    setEmail(val);
  };

  const onChangePasswordHandler = e => {
    const val = e.target.value !== '' ? e.target.value : '';
    setPassword(val);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <LoginPageContainer>
      <LoginContainer>
        <Rows vAlign="center">
          <form onSubmit={onSubmitHandler}>
            <Grid cols="auto" gapRow={10}>
              <Grid cols="auto" gapRow={10} textAlign="center" marginBottom="20px">
                <h2>PManager</h2>
                <h3>Login</h3>
              </Grid>

              <Grid magrinTop={20}>
                <InputText label="Email" onChange={onChangeEmailHandler} autoFocus value={email} />
                <InputPass label="Password" onChange={onChangePasswordHandler} value={password} />
              </Grid>

              <Grid cols="auto" textAlign="center">
                <div style={{ height: 32 }}>
                  {error && <div className="error">{error}</div>}
                  {loading && <Loader size={32} />}
                </div>
                <Button type="submit">Login</Button>
              </Grid>
            </Grid>
          </form>
        </Rows>
      </LoginContainer>
    </LoginPageContainer>
  );
};

export default LoginScreen;
