import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import io from 'socket.io-client';
import Nav from '../Nav'
import ConversationList from '../Conversations'
import FriendsList from '../FriendsList'
import Search from '../Search'
import { useFetchFriends } from '../FriendsList/hooks'
import { setSocket, removeSocket } from './reducer/action'
import './style'

export default function Layout(props) {
  const dispatch = useDispatch()
  useFetchFriends()
  React.useEffect(() => {
    const socket: SocketIOClient.Socket = io();
    socket.on('recv_msg',(data: any)=>{
      console.log(data)
    })
    dispatch(setSocket(socket));
    return () => {
      console.log('?????')
      socket.close();
      dispatch(removeSocket());
    };
  }, [dispatch]);
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