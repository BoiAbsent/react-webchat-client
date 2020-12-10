import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from '../Nav'
import ConversationList from '../Conversations'
import FriendsList from '../FriendsList'
import Search from '../Search'
import './style'

export default function Layout(props) {
  return  (
    <div className="layout">
      <Nav/>
      <Router>
        <div className="container">
          <div className="side-list">
            <Search/>
            <Switch>
              <Route exact path="/conversation">
                <ConversationList/>
              </Route>
              <Route exact path="/friends">
                <FriendsList/>
              </Route>
              <Redirect to="/conversation"/>
            </Switch>
          </div>
          <div id="main-content"></div>
        </div>
      </Router>
    </div>
  )
}