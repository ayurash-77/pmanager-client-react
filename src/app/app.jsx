import { useSelector } from 'react-redux';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import './app.scss';

import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { GlobalStyle } from './appColors.styles';

import LoginScreen from '../screens/LoginScreen';
import ProjectScreen from '../screens/ProjectScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import BlankScreen from '../screens/BlankScreen';

const App = () => {
  const userLogin = useSelector(state => state?.userLogin);
  const { userInfo } = userLogin;

  const { theme } = useSelector(state => state?.ui);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {userInfo ? (
          <Switch>
            <Route path="/projects" exact component={ProjectsScreen} />
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/projects/:id" component={ProjectScreen} />
            <Route path="/root" component={BlankScreen} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" exact component={LoginScreen} />
            <Redirect to="/login" />
          </Switch>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
