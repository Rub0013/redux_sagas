import React, { Component } from 'react';
import Home from '../../containers/Home/Home';
import Tasks from '../../containers/Tasks/Tasks';
import { Route, Switch } from 'react-router-dom'

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
