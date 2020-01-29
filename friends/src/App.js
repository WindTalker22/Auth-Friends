import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"
import FriendsList from "./components/FriendsList"
import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/FriendsList">Friends Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/FriendsList" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
