import React from 'react'
import { Route, Switch } from 'react-router'
import AddUser from '../add-user/AddUser.js'
import Dashboard from '../dashboard/Dashboard.js'
import History from '../history/History.js'
import Home from "../home/Home.js"
import ManageUser from '../manage-user/ManageUser.js'
import Profile from '../profile/Profile.js'
import Reports from '../reports/Reports.js'
import ProtectedRoute from './ProtectedRoute.js'

function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Home}/>
                <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
                <ProtectedRoute exact path="/profile" component={Profile}/>
                <ProtectedRoute exact path="/history" component={History}/>
                <ProtectedRoute exact path="/add-user" component={AddUser}/>
                <ProtectedRoute exact path="/manage-user" component={ManageUser}/>
                <ProtectedRoute exact path="/reports" component={Reports}/>
            </Switch>
        </div>
    )
}

export default RouteTree
