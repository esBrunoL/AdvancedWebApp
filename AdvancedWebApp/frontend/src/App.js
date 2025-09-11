import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import UserCountPage from './components/UserCountPage';
import SuccessPage from './components/SuccessPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/user-count" component={UserCountPage} />
                <Route path="/success" component={SuccessPage} />
            </Switch>
        </Router>
    );
};

export default App;