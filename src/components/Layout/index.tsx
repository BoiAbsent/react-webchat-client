import React from 'react'
import Nav from '../Nav'
import ConversationList from '../ConversationList'
import MessageBox from '../MessageBox'

export default function Layout(props) {
  return  (
    <div className="layout">
      <Nav/>
      <ConversationList/>
      <MessageBox/>
    </div>
  )
}