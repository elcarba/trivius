import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Game from './Game/Game';
import Login from './User/Login';
import Logout from './User/Logout';
import Register from './User/Register';
import Profile from './User/Profile';
import Ranking from './Ranking/Ranking';
import Layout from '../components/Layout/Layout';
import Alert from '../components/Alert/Alert';
import Roulette from '../components/Roulette/Roulette';

const app = () => {
  //CurrentUser
  const currentUser = useSelector(state => state.userReducer.currentUser);

  return (
    <Router>
      <Layout>

        <Alert />

        <Switch>
          <Route exact path="/"
                 render={() => !currentUser ? <Redirect to='/login' /> : <Game/> }/>

          <Route exact path="/ranking">
            <Ranking/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/logout">
            <Logout/>
          </Route>
          <Route exact path="/signup">
            <Register/>
          </Route>

          <Route exact path="/profile">
            <Profile/>
          </Route>

          <Route exact path="/roulette">
            <Roulette/>
          </Route>

        </Switch>
      </Layout>
    </Router>
  );
}

export default app;