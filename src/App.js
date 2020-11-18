import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SignIn from "./pages/Auth/Signin";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <SignIn/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
