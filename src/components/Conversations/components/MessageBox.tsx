import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function MessageBox(props) {
  const current = useSelector<StoreState, number | string>(store => store.conversationStore.current)
  const conv = useSelector<StoreState, Conversation>(store => store.conversationStore.map[String(current)])

  const msgList = conv.messages
  const [ targetDom, setTargetDom ] = useState(null)

  useEffect(() => {
    setTargetDom(document.querySelector('#main-content'))
  }, [])

  const messageContent = (
    <div className="message-box">
      {msgList.map(m => (
        <div key={m.id}>{m.content}</div>
      ))}
    </div>
  )
  console.log('render')
  return  (
    targetDom ? ReactDom.createPortal(messageContent, targetDom) : null
  )
}