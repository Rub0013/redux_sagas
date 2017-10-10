import React, { Component } from 'react';
import Home from '../Home/Home';
import Tasks from '../Tasks/Tasks';
import { Route, Router, BrowserRouter, Switch } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/tasks' component={Tasks}/>
            </Switch>
        );
    }
}

export default Main;
