import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";


export const AppRouter = () => {

    return ( 
        <div>
            <Router>
                <div>
                    <NavBar />
                    <div className = "container">
                        <Switch>
                            <Route exact path = "/login" component = {LoginScreen}/>
                            <Route exact path = "/about" component = {AboutScreen} />
                            <Route exact path = "/" component = {HomeScreen} />
                            <Redirect to = "/" />
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )

    /*
    return (
        <div>
            <Router>
                <div>
                    <NavBar />
                    <div className = "container">
                    <Switch>
                        <Route path ="/about" component = {AboutScreen}/>
                        <Route path = "/login" component = {LoginScreen}/>
                        <Route exact path = "/" component = {HomeScreen} />
                        <Redirect to = "/"  />
                    </Switch>
                    </div>
                    
                </div>
            </Router>
        </div>
    )
    */
}
